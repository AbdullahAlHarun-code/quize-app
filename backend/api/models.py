# filepath: /g:/Abdullah-codeacademy/react-django/backend/api/models.py
from django.db import models

class Option(models.Model):
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text

class Question(models.Model):
    question = models.CharField(max_length=255)
    options = models.ManyToManyField(Option)
    answer = models.CharField(max_length=255)

    def __str__(self):
        return self.question

class ExamAttempt(models.Model):
    correct_answers = models.IntegerField(default=0)
    incorrect_answers = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Attempt on {self.timestamp}: {self.correct_answers} correct, {self.incorrect_answers} incorrect"

class QuestionResult(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    correct_count = models.IntegerField(default=0)
    incorrect_count = models.IntegerField(default=0)

    def __str__(self):
        return f"Question: {self.question.question} - Correct: {self.correct_count}, Incorrect: {self.incorrect_count}"