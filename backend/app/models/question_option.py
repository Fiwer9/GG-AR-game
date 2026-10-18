from sqlalchemy import Text, Boolean, Integer, ForeignKey, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from backend.app.infrastructure.database.base import Base

class QuestionOption(Base):
    __tablename__ = "question_options"
    __table_args__ = (CheckConstraint("position > 0", name="ck_question_options_position"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    question_id: Mapped[int] = mapped_column(ForeignKey("questions.id", ondelete="CASCADE"), nullable=False, index=True)
    text: Mapped[str] = mapped_column(Text, nullable=False)
    is_correct: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, server_default="false")
    position: Mapped[int] = mapped_column(Integer, nullable=False, default=1, server_default="1")
