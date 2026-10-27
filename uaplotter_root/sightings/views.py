# ==== imports ====
# This does the same job in one line as: from django.http import HttpResponse, & from django.template import loader
from django.shortcuts import render

from django.http import JsonResponse

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

def sightings_api(request):
    # Read the decade from the URL e.g. /api/?decade=1960s
    # If no decade provided, default to None
    decade = request.GET.get('decade', None)

    # Filter by decade if one was provided, otherwise return all sightings
    if decade:
        sightings = Sightings.objects.filter(decade=decade)
    else:
        sightings = Sightings.objects.all()

    # Convert to a list of dictionaries and return as JSON
    data = list(sightings.values('lat', 'lng', 'date', 'city', 'country', 'shape', 'summary'))
    return JsonResponse(data, safe=False)