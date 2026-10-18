from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, CheckConstraint, Index, text, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class OfficeVisit(Base):
    __tablename__ = "office_visits"
    __table_args__ = (
        CheckConstraint("detection_method IN ('qr', 'admin', 'geolocation', 'other')", name="ck_office_visits_detection_method"),
        CheckConstraint("status IN ('open', 'closed', 'corrected')", name="ck_office_visits_status"),
        CheckConstraint("check_out_at IS NULL OR check_out_at >= check_in_at", name="ck_office_visits_dates"),
        Index("uq_office_visit_open_per_user", "user_id", unique=True, postgresql_where=text("check_out_at IS NULL AND status = 'open'")),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    office_id: Mapped[int] = mapped_column(ForeignKey("offices.id", ondelete="RESTRICT"), nullable=False, index=True)
    check_in_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    check_out_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    detection_method: Mapped[str] = mapped_column(String(30), nullable=False, default="qr", server_default="qr")
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="open", server_default="open")
