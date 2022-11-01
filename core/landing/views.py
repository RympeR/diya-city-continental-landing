from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import ContactSerializer
from .models import Contact
from django.http import HttpResponse


class ContactView(CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


def index(request, *args, **kwargs):
    return render(request, 'main.html')


def process_form(request):
    if request.method == 'POST':
        Contact.objects.create(
            email=request.POST.get('email'),
            text=request.POST.get('text'),
        )
    return HttpResponse('success')


def switch_to_English_link(request):
    request.session['lang'] = 'eng'
    response = HttpResponse(...)
    response = HttpResponse(...)
    request.session['django_language'] = 'eng'
    return response


def switch_to_Ukraiunian_link(request):
    request.session['lang'] = 'uk'
    user_language = 'uk'
    response = HttpResponse(...)
    request.session['django_language'] = user_language
    return response
