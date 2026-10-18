from sqlalchemy import String, Integer, Boolean, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class ParticipationMilestone(Base):
    __tablename__ = "participation_milestones"
    __table_args__ = (
        CheckConstraint("required_days > 0", name="ck_milestones_required_days"),
        CheckConstraint("reward_coins >= 0", name="ck_milestones_reward_coins"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    required_days: Mapped[int] = mapped_column(Integer, nullable=False, unique=True)
    reward_coins: Mapped[int] = mapped_column(Integer, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
