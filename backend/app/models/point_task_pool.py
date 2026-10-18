from sqlalchemy import Boolean, ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class PointTaskPool(Base):
    __tablename__ = "point_task_pool"
    __table_args__ = (UniqueConstraint("game_point_id", "task_id", name="uq_point_task_pool_point_task"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    game_point_id: Mapped[int] = mapped_column(ForeignKey("game_points.id", ondelete="CASCADE"), nullable=False)
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id", ondelete="CASCADE"), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, server_default="true")
