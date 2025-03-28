from django.conf import settings
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')

urlpatterns = [
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
