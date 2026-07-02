"""
URL configuration for uaplotter project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

"""
This is the master dispatcher.
The project urls.py just hands off to the app specified, it doesn't know about individual pages at all.

urlpatterns = [
    path("1", include("2")),
    path("admin/", admin.site.urls),
    
    1. Any URL starting with whatever it is called.
    2. Django then strips the app_name/ part off the URL and passes the remainder.
        E.g. So if someone visits /polls/5/, Django sends just 5/ to the polls app to deal with.

    E.g. path("polls/", include("polls.urls")),
]
"""

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('sightings/', include('sightings.urls')),
    path('admin/', admin.site.urls),
]