from datetime import date, time, datetime
from sqlalchemy import String, Boolean, Date, Time, DateTime, Text, ForeignKey, UniqueConstraint, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class EmployeeWorkday(Base):
    __tablename__ = "employee_workdays"
    __table_args__ = (
        UniqueConstraint("user_id", "work_date", name="uq_employee_workday_user_date"),
        CheckConstraint("attendance_status IN ('unknown', 'present', 'absent', 'remote', 'vacation', 'sick_leave')", name="ck_employee_workday_status"),
        CheckConstraint("source IN ('admin', 'import', 'system')", name="ck_employee_workday_source"),
        CheckConstraint("planned_start IS NULL OR planned_end IS NULL OR planned_end > planned_start", name="ck_employee_workday_planned_time"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    work_date: Mapped[date] = mapped_column(Date, nullable=False, index=True)
    is_workday: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
    planned_start: Mapped[time | None] = mapped_column(Time)
    planned_end: Mapped[time | None] = mapped_column(Time)
    attendance_status: Mapped[str] = mapped_column(String(30), nullable=False, default="unknown", server_default="unknown")
    absence_reason: Mapped[str | None] = mapped_column(Text)
    source: Mapped[str] = mapped_column(String(30), nullable=False, default="admin", server_default="admin")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
