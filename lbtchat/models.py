

# Create your models here.
from django.db import models

class VisitorCount(models.Model):
    count = models.IntegerField(default=0)
