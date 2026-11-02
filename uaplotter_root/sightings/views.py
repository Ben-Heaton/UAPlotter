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
    # Read the comma separated decades from the URL e.g. /api/?decades=1960s,1970s
    decades_param = request.GET.get('decades', '')

    if decades_param:
        # Turn "1960s,1970s" into a Python list: ['1960s', '1970s']
        decades = decades_param.split(',')

        # decade__in means "decade matches ANY value in this list".
        sightings = Sightings.objects.filter(decade__in=decades)
    else:
        sightings = Sightings.objects.all()

    # Convert to a list of dictionaries and return as JSON.
    data = list(sightings.values(
        'lat', 'lng', 'date', 'time', 'city',
        'country', 'shape', 'media', 'summary', 'link'
    ))
    return JsonResponse(data, safe=False)