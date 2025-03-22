from django.db import models

class Book(models.Model):

    image = models.CharField(max_length=255)  
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    url = models.URLField(null=True, blank=True)

    class Meta:
        db_table = 'books'
        
    def __str__(self):
        return self.name
