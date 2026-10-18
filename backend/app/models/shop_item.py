from datetime import datetime
from sqlalchemy import String, Text, BigInteger, Boolean, DateTime, func, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class ShopItem(Base):
    __tablename__ = "shop_items"
    __table_args__ = (CheckConstraint("price >= 0", name="ck_shop_items_price"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    category: Mapped[str | None] = mapped_column(String(100))
    price: Mapped[int] = mapped_column(BigInteger, nullable=False)
    image_url: Mapped[str | None] = mapped_column(Text)
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
