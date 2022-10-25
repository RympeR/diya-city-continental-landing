
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from core import settings


urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/api/', include('rest_framework.urls')),
    path('api/landing/', include('landing.urls')),
    # path('', include('front.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

