from django.urls import path
from .views import *

urlpatterns = [
    path('create-contact/', ContactView.as_view(), name='contact'),
    path('', index, name='index'),
    path('uk-switch/', switch_to_Ukraiunian_link, name='uk'),
    path('en-switch/', switch_to_English_link, name='en'),
    path('process_form/', process_form, name='process_form'),
]
