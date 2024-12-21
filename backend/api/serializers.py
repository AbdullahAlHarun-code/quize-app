# filepath: /g:/Abdullah-codeacademy/react-django/backend/api/serializers.py
from rest_framework import serializers
from .models import Question, Option, ExamAttempt, QuestionResult

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text', 'is_correct']

class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)

    class Meta:
        model = Question
        fields = ['id', 'question', 'options', 'answer']

class ExamAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamAttempt
        fields = ['id', 'correct_answers', 'incorrect_answers', 'timestamp']

class QuestionResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionResult
        fields = ['id', 'question', 'correct_count', 'incorrect_count']