from django.http import HttpResponse
from django.template import loader

# Create your views here.
def main(request):
    template = loader.get_template('sightings/main.html')
    return HttpResponse(template.render())

def map(request):
    template = loader.get_template('sightings/map.html')
    return HttpResponse(template.render())