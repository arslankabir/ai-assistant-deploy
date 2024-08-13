# lbtchat/views.py

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .liberte_ai import get_response_from_libertai

@csrf_exempt  # This is for development purposes only; use proper CSRF protection in production.
def send_message(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data.get('message')
        response_message = get_response_from_libertai(user_message)
        return JsonResponse({'response': response_message})
    return JsonResponse({'error': 'Invalid request'}, status=400)

from django.shortcuts import render

def home(request):
    return render(request, 'lbtchat/index.html')  # Updated template path

def chat_interface(request):
    return render(request, 'lbtchat/chatbox.html')

from django.http import JsonResponse
from .models import VisitorCount

def update_visitor_count(request):
    visitor_count, created = VisitorCount.objects.get_or_create(id=1)
    return JsonResponse({'count': visitor_count.count})

@csrf_exempt
def update_visitor_count_increment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        increment = data.get('increment', 0)
        visitor_count, created = VisitorCount.objects.get_or_create(id=1)
        visitor_count.count += increment
        visitor_count.save()
        return JsonResponse({'status': 'success', 'new_count': visitor_count.count})
    return JsonResponse({'status': 'fail'}, status=400)

