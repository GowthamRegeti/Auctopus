from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.CharField(max_length=50)
    address = models.TextField()
    college = models.TextField()

    def __str__(self):
        return self.name
    
