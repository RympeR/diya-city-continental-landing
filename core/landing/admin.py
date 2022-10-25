from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAmin(admin.ModelAdmin):
    list_display = ('email', 'short_text', 'created_pretty')
    list_filter = ('created',)
    search_fields = ('email',)
    ordering = ('-created',)

