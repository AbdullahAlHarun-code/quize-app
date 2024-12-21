from django.shortcuts import render

# Create your views here.
# function based views
from django.http import HttpResponse, HttpResponseNotFound
from django.views import View
from django.views.generic import TemplateView
from django.conf.urls import handler404 
# function based views
def homepage(request):
    return HttpResponse('function based homepage')

# functions based views with template
def home(request):
    return render(request, 'home.html', {'name': 'function based home with template'})

# class based views
class Home(TemplateView):
    template_name = 'home.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['name'] = 'Class Home'
        return context
    
# jason data view
from django.http import JsonResponse
def jsondata(request):
    return JsonResponse({'name': 'json data'})

    # Option 1: Return plain text response
def custom_404_root(request, exception):
    return render(request, '404.html', status=404)

def custom_404_frontend(request, exception):
    return render(request, '404.html', status=404)
