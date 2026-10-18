from datetime import date, datetime
from sqlalchemy import Date, Integer, BigInteger, DateTime, ForeignKey, UniqueConstraint, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class DailyActivity(Base):
    __tablename__ = "daily_activity"
    __table_args__ = (
        UniqueConstraint("user_id", "activity_date", name="uq_daily_activity_user_date"),
        CheckConstraint("sessions_count >= 0", name="ck_daily_sessions_count"),
        CheckConstraint("site_time_seconds >= 0", name="ck_daily_site_time"),
        CheckConstraint("game_time_seconds >= 0", name="ck_daily_game_time"),
        CheckConstraint("tasks_completed >= 0", name="ck_daily_tasks_completed"),
        CheckConstraint("coins_earned >= 0", name="ck_daily_coins_earned"),
        CheckConstraint("coins_spent >= 0", name="ck_daily_coins_spent"),
        CheckConstraint("office_visits_count >= 0", name="ck_daily_office_visits"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    activity_date: Mapped[date] = mapped_column(Date, nullable=False, index=True)
    sessions_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    site_time_seconds: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0, server_default="0")
    game_time_seconds: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0, server_default="0")
    tasks_completed: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    coins_earned: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0, server_default="0")
    coins_spent: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0, server_default="0")
    office_visits_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0, server_default="0")
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())
