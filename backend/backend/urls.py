"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
import frontend.views as frontend_views
from django.conf.urls import handler404 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    ## home page
    ##path('', include('frontend.urls')),
]
handler404 = frontend_views.custom_404_frontend
## all django.contrib import list 
# admin
# auth
# contenttypes
# sessions
# messages
# staticfiles
# sites
# admin
'''from django.http import all import list'''
# HttpResponse
# HttpResponseRedirect
# JsonResponse
# Http404
# HttpResponseNotAllowed
# HttpResponsePermanentRedirect
# HttpResponseBadRequest
# HttpResponseForbidden
# HttpResponseNotFound
# HttpResponseServerError
# StreamingHttpResponse
# FileResponse
# EmptyPage
# PageNotAnInteger
# InvalidPage
# Paginator
# SimpleTemplateResponse
# TemplateResponse
# TemplateResponseMixin
# TemplateView
# ContextMixin
# View
# RedirectView
# TemplateHTMLRenderer
# JSONRenderer
# BrowsableAPIRenderer
# BaseRenderer
# StaticHTMLRenderer
# AdminRenderer
# HTMLFormRenderer
# FormRenderer
# MultiPartParser
# FileUploadParser
# DataAndFiles
# Data
# File
# TemporaryUploadedFile
# InMemoryUploadedFile
# FieldFile
# FileField
# ImageField
# ImageFieldFile
# ImageFile
# Image
# ImageIO
# ImageOps
# ImagePalette
# ImageSequence
# ImageStat
# ImageFilter
# ImageEnhance
# ImageDraw
# ImageFont
# ImageColor
# ImageChops
# ImageCms
# ImageMode
# ImageMorph
# ImageQt
# ImageTk
# ImageWin
# ImageShow
# ImagePlugin
# ImageTk
# ImageQt





