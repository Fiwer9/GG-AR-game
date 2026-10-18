from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class TaskAssignment(Base):
    __tablename__ = "task_assignments"
    __table_args__ = (
        CheckConstraint("status IN ('assigned', 'in_progress', 'completed', 'expired')", name="ck_task_assignments_status"),
        CheckConstraint("expires_at IS NULL OR expires_at >= assigned_at", name="ck_task_assignments_dates"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id", ondelete="RESTRICT"), nullable=False, index=True)
    assigned_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    expires_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="assigned", server_default="assigned")
