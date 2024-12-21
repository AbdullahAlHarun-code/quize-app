# filepath: /g:/Abdullah-codeacademy/react-django/backend/api/urls.py
from django.urls import path
from .views import QuestionList, ExamAttemptCreate, QuestionResultUpdate

urlpatterns = [
    path('questions/', QuestionList.as_view(), name='question-list'),
    path('exam-attempts/', ExamAttemptCreate.as_view(), name='exam-attempt-create'),
    path('question-results/<int:question_id>/', QuestionResultUpdate.as_view(), name='question-result-update'),
]