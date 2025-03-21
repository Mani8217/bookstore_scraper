from django.db import models

# Create your models here.
from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()  # Assuming the image field is a URL
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Suitable for storing prices with 2 decimal places

    def __str__(self):
        return self.name
