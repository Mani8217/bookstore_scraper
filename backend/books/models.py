from django.db import models

class Book(models.Model):

    image = models.CharField(max_length=255)  # چون از دیتابیس ایمپورت کردیم، URLField را تغییر بده
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'books'
        
    def __str__(self):
        return self.name
