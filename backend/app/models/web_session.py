from datetime import datetime
from sqlalchemy import String, Text, DateTime, ForeignKey, func, CheckConstraint
from sqlalchemy.dialects.postgresql import INET
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base


class WebSession(Base):
    __tablename__ = "web_sessions"
    __table_args__ = (
        CheckConstraint("last_activity_at >= started_at", name="ck_web_sessions_activity_time"),
        CheckConstraint("ended_at IS NULL OR ended_at >= started_at", name="ck_web_sessions_end_time"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    last_activity_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    ended_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    device_type: Mapped[str | None] = mapped_column(String(50))
    user_agent: Mapped[str | None] = mapped_column(Text)
    ip_address: Mapped[str | None] = mapped_column(INET)
