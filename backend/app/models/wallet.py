from datetime import datetime
from sqlalchemy import BigInteger, DateTime, ForeignKey, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class Wallet(Base):
    __tablename__ = "wallets"
    __table_args__ = (CheckConstraint("balance >= 0", name="ck_wallet_balance_nonnegative"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="RESTRICT"), nullable=False, unique=True)
    balance: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0, server_default="0")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())
