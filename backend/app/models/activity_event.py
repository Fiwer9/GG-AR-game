from datetime import datetime
from typing import Any
from sqlalchemy import String, DateTime, ForeignKey, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class ActivityEvent(Base):
    __tablename__ = "activity_events"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    web_session_id: Mapped[int | None] = mapped_column(ForeignKey("web_sessions.id", ondelete="SET NULL"), index=True)
    event_type: Mapped[str] = mapped_column(String(100), nullable=False, index=True)
    page_path: Mapped[str | None] = mapped_column(String(500))
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), index=True)
    event_metadata: Mapped[dict[str, Any]] = mapped_column("metadata", JSONB, nullable=False, default=dict, server_default="{}")
