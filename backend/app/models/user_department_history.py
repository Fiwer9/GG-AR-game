from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class UserDepartmentHistory(Base):
    __tablename__ = "user_department_history"
    __table_args__ = (
        CheckConstraint("ended_at IS NULL OR ended_at >= started_at", name="ck_department_history_dates"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    department_id: Mapped[int] = mapped_column(ForeignKey("departments.id", ondelete="RESTRICT"), nullable=False)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    ended_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
