from django.db import models

# Create your models (for 'sightings' app) here.

class Sightings(models.Model):
    date = models.DateField()
    decade = models.CharField(max_length=5)
    time = models.TimeField()
    city = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    lat = models.FloatField()
    lng = models.FloatField()
    shape = models.CharField(max_length=150)
    summary = models.CharField(max_length=150)
    media = models.CharField(max_length=1)
    link = models.URLField()