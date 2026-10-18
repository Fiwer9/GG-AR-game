from datetime import datetime
from typing import Any
from sqlalchemy import String, Integer, DateTime, ForeignKey, CheckConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class TaskCompletion(Base):
    __tablename__ = "task_completions"
    __table_args__ = (
        CheckConstraint("status IN ('in_progress', 'completed', 'failed')", name="ck_task_completions_status"),
        CheckConstraint("score >= 0", name="ck_task_completions_score"),
        CheckConstraint("completed_at IS NULL OR started_at IS NULL OR completed_at >= started_at", name="ck_task_completions_dates"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    assignment_id: Mapped[int] = mapped_column(ForeignKey("task_assignments.id", ondelete="RESTRICT"), nullable=False, unique=True)
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="in_progress", server_default="in_progress")
    score: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    answers: Mapped[dict[str, Any]] = mapped_column(JSONB, nullable=False, default=dict, server_default="{}")
