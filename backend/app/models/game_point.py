from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, ForeignKey, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base


class GamePoint(Base):
    __tablename__ = "game_points"

    id: Mapped[int] = mapped_column(primary_key=True)
    office_id: Mapped[int] = mapped_column(ForeignKey("offices.id", ondelete="RESTRICT"), nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    qr_code: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    zone_name: Mapped[str | None] = mapped_column(String(150))
    floor: Mapped[str | None] = mapped_column(String(30))
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
