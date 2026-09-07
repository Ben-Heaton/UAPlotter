# ==== imports ====
# This does the same job in one line as: from django.http import HttpResponse, & from django.template import loader
from django.shortcuts import render

# This line allows communication with the database.
from .models import Sightings

# ==== Create your views here ====.
# Returns the main (home) page.
def main(request):
    return render(request, 'sightings/main.html')

# Fetches every row from the 'sightings' table (sightings_sightings), then renders the webpage.
def map(request):
    sightings = Sightings.objects.all()
    return render(request, 'sightings/map.html', {'sightings': sightings})