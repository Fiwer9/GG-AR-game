from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class UserMilestoneReward(Base):
    __tablename__ = "user_milestone_rewards"
    __table_args__ = (UniqueConstraint("user_id", "milestone_id", name="uq_user_milestone_reward"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    milestone_id: Mapped[int] = mapped_column(ForeignKey("participation_milestones.id", ondelete="RESTRICT"), nullable=False)
    awarded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    transaction_id: Mapped[int | None] = mapped_column(ForeignKey("coin_transactions.id", ondelete="RESTRICT"), unique=True)
