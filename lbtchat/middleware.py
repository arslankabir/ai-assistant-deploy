from django.utils.deprecation import MiddlewareMixin
from .models import VisitorCount

class VisitorCounterMiddleware(MiddlewareMixin):
    def process_request(self, request):
        ip_address = request.META.get('REMOTE_ADDR')
        session_key = 'visited_from_ip_{}'.format(ip_address)

        if not request.session.get(session_key):
            request.session[session_key] = True
            visitor_count, created = VisitorCount.objects.get_or_create(id=1)
            visitor_count.count += 1
            visitor_count.save()
