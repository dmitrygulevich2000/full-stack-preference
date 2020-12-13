from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Table(models.Model):
    GAME_TYPES = [
        ('pref', 'Preference')
    ]
    
    name = models.CharField(max_length=50, primary_key=True)
    game = models.CharField(max_length=20, choices=GAME_TYPES)

    def __str__(self):
        return self.name

class Player(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE) # if table deleted player on it deleted to
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True) # if user deleted player becomes unauthorized