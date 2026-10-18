from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, ForeignKey, func, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class User(Base):
    __tablename__ = "users"
    __table_args__ = (
        CheckConstraint("role IN ('employee', 'manager', 'admin')", name="ck_users_role"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
    password_hash: Mapped[str | None] = mapped_column(String(255))
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)
    patronymic: Mapped[str | None] = mapped_column(String(100))
    department_id: Mapped[int | None] = mapped_column(ForeignKey("departments.id", ondelete="SET NULL"))
    office_id: Mapped[int | None] = mapped_column(ForeignKey("offices.id", ondelete="SET NULL"))
    role: Mapped[str] = mapped_column(String(30), nullable=False, default="employee", server_default="employee")
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
