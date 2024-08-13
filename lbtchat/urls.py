# lbtchat/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('chatbox/', views.chat_interface, name='chatbox'),
    path('', views.home, name='home'),
    path('send_message/', views.send_message, name='send_message'),
    path('update-visitor-count/', views.update_visitor_count, name='update_visitor_count'),
    path('update-visitor-count-increment/', views.update_visitor_count_increment, name='update_visitor_count_increment'),
    
]
