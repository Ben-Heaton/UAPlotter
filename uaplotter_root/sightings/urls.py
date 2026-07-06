"""
urlpatterns = [
    path('1', views.2, name='3'),

    1. The URL to match. An empty string means the root of wherever this app is mounted.
    2. The view function to call when that URL is matched.
    3. A nickname for this URL. Lets you refer to it elsewhere in the project by name rather than hardcoding the URL string.

    E.g. path("", views.index, name="index"),
]
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('map/', views.map, name='map'),
]