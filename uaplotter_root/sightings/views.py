from django.http import HttpResponse
from django.template import loader

# Create your views here.
def welcome(request):
    template = loader.get_template('welcome.html')
    return HttpResponse(template.render())

def sightings_map(request):
    template = loader.get_template('sightings_map.html')
    return HttpResponse(template.render())