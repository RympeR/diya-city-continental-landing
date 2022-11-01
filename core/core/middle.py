from rest_framework.authtoken.models import Token
from django.core.exceptions import ObjectDoesNotExist
import logging


class DisableCSRFMiddleware(object):

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        setattr(request, '_dont_enforce_csrf_checks', True)
        response = self.get_response(request)
        return response


def RequestLangMiddleware(get_response):
    def middleware(request):
        if request.session.get('lang') is None:
            request.session['lang'] = 'uk'
        if request.session.get('django_language') is None:
            request.session['django_language'] = 'uk'
        response = get_response(request)
        return response
    return middleware

