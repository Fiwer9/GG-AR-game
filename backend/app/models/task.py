from datetime import datetime
from sqlalchemy import String, Text, Boolean, Integer, DateTime, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class Task(Base):
    __tablename__ = "tasks"
    __table_args__ = (
        CheckConstraint("task_type IN ('question', 'blitz', 'route', 'other')", name="ck_tasks_type"),
        CheckConstraint("reward_coins >= 0", name="ck_tasks_reward_coins"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    task_type: Mapped[str] = mapped_column(String(30), nullable=False)
    reward_coins: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
