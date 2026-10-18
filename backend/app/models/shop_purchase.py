from datetime import datetime
from sqlalchemy import BigInteger, DateTime, ForeignKey, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class ShopPurchase(Base):
    __tablename__ = "shop_purchases"
    __table_args__ = (CheckConstraint("price_paid >= 0", name="ck_shop_purchases_price_paid"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="RESTRICT"), nullable=False, index=True)
    shop_item_id: Mapped[int] = mapped_column(ForeignKey("shop_items.id", ondelete="RESTRICT"), nullable=False)
    price_paid: Mapped[int] = mapped_column(BigInteger, nullable=False)
    transaction_id: Mapped[int] = mapped_column(ForeignKey("coin_transactions.id", ondelete="RESTRICT"), nullable=False, unique=True)
    purchased_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
