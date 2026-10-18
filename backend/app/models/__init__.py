# Импорт всех моделей необходим, чтобы SQLAlchemy зарегистрировал таблицы
# в Base.metadata, а Alembic увидел их при autogenerate.

from backend.app.models.employee_workday import EmployeeWorkday

__all__ = [
    "Base", "Department", "Office", "User", "UserDepartmentHistory",
    "GamePoint", "WebSession", "ActivityEvent", "OfficeVisit",
    "EmployeeWorkday", "Task", "Question", "QuestionOption",
    "TaskAssignment", "TaskCompletion", "PointTaskPool",
    "ContentRepeatRule", "Wallet", "CoinTransaction",
    "ParticipationMilestone", "UserMilestoneReward", "ShopItem",
    "ShopPurchase", "UserInventory", "DailyActivity",
]
