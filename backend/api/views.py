# filepath: /g:/Abdullah-codeacademy/react-django/backend/api/views.py
from rest_framework import generics
from .models import Question, ExamAttempt, QuestionResult
from .serializers import QuestionSerializer, ExamAttemptSerializer, QuestionResultSerializer

class QuestionList(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class ExamAttemptCreate(generics.CreateAPIView):
    queryset = ExamAttempt.objects.all()
    serializer_class = ExamAttemptSerializer

class QuestionResultUpdate(generics.UpdateAPIView):
    queryset = QuestionResult.objects.all()
    serializer_class = QuestionResultSerializer
    lookup_field = 'question_id'