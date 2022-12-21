from django.urls import path
from .views import MineralView


urlpatterns = [
    path('api/',MineralView.as_view())
]