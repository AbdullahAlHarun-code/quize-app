from django.urls import path
from . import views



urlpatterns = [
    ## function based views
    path('', views.homepage, name='homepage'),
    ## function based views with template
    path('home/', views.home, name='home'),
    # class based views
    path('classhome/', views.Home.as_view(), name='classhome'),
    ## json data view
    path('jsondata/', views.jsondata, name='jsondata'),
]
