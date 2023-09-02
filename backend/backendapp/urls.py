from django.contrib import admin
from django.urls import path,include

from backendapp import views


urlpatterns = [
    path('user/',views.UserAPI,name="user"),
    path('user/<int:pk>/',views.UserAPI),
]