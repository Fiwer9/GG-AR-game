from datetime import datetime
from sqlalchemy import Boolean, DateTime, ForeignKey, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class UserInventory(Base):
    __tablename__ = "user_inventory"
    __table_args__ = (UniqueConstraint("user_id", "shop_item_id", name="uq_user_inventory_user_item"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    shop_item_id: Mapped[int] = mapped_column(ForeignKey("shop_items.id", ondelete="RESTRICT"), nullable=False)
    purchase_id: Mapped[int | None] = mapped_column(ForeignKey("shop_purchases.id", ondelete="RESTRICT"), unique=True)
    acquired_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    is_equipped: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, server_default="false")
