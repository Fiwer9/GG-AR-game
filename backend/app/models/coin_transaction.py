from datetime import datetime
from sqlalchemy import String, BigInteger, DateTime, ForeignKey, CheckConstraint, func
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class CoinTransaction(Base):
    __tablename__ = "coin_transactions"
    __table_args__ = (
        CheckConstraint("amount <> 0", name="ck_coin_transactions_amount_nonzero"),
        CheckConstraint("transaction_type IN ('earn', 'spend', 'refund', 'adjustment')", name="ck_coin_transactions_type"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    wallet_id: Mapped[int] = mapped_column(ForeignKey("wallets.id", ondelete="RESTRICT"), nullable=False, index=True)
    amount: Mapped[int] = mapped_column(BigInteger, nullable=False)
    transaction_type: Mapped[str] = mapped_column(String(30), nullable=False)
    reason: Mapped[str] = mapped_column(String(255), nullable=False)
    source_type: Mapped[str | None] = mapped_column(String(50))
    source_id: Mapped[int | None] = mapped_column(BigInteger)
    idempotency_key: Mapped[str | None] = mapped_column(String(255), unique=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
