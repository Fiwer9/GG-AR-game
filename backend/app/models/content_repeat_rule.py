from sqlalchemy import Integer, ForeignKey, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class ContentRepeatRule(Base):
    __tablename__ = "content_repeat_rules"
    __table_args__ = (
        CheckConstraint("cooldown_seconds >= 0", name="ck_repeat_cooldown"),
        CheckConstraint("max_completions_per_day IS NULL OR max_completions_per_day > 0", name="ck_repeat_daily_limit"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id", ondelete="CASCADE"), nullable=False, unique=True)
    cooldown_seconds: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    max_completions_per_day: Mapped[int | None] = mapped_column(Integer)
