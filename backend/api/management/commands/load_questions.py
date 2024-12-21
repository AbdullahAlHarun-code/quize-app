# filepath: /g:/Abdullah-codeacademy/react-django/backend/api/management/commands/load_questions.py
import json
from django.core.management.base import BaseCommand
from api.models import Question, Option

class Command(BaseCommand):
    help = 'Load questions from a JSON file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='The path to the JSON file')

    def handle(self, *args, **kwargs):
        file_path = kwargs['file_path']
        try:
            # Wipe all existing questions and options
            Question.objects.all().delete()
            Option.objects.all().delete()

            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                for item in data:
                    question_text = item['question']
                    answer_text = item['answer']
                    options_data = item['options']

                    question = Question.objects.create(question=question_text, answer=answer_text)
                    for option_data in options_data:
                        option = Option.objects.create(text=option_data['text'], is_correct=option_data['isCorrect'])
                        question.options.add(option)

                    question.save()

            self.stdout.write(self.style.SUCCESS('Successfully loaded questions'))
        except FileNotFoundError:
            self.stderr.write(self.style.ERROR(f'File not found: {file_path}'))
        except json.JSONDecodeError as e:
            self.stderr.write(self.style.ERROR(f'Error decoding JSON: {e}'))
        except Exception as e:
            self.stderr.write(self.style.ERROR(f'An error occurred: {e}'))