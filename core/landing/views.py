from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import ContactSerializer
from .models import Contact

class ContactView(CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
