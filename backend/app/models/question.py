from sqlalchemy import String, Text, Integer, ForeignKey, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class Question(Base):
    __tablename__ = "questions"
    __table_args__ = (CheckConstraint("position > 0", name="ck_questions_position"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id", ondelete="CASCADE"), nullable=False, index=True)
    text: Mapped[str] = mapped_column(Text, nullable=False)
    question_type: Mapped[str] = mapped_column(String(30), nullable=False, default="single_choice", server_default="single_choice")
    position: Mapped[int] = mapped_column(Integer, nullable=False, default=1, server_default="1")
