import uuid
from django.db import models

max_players = {
    'pref': 4
}

class Table(models.Model):
    GAME_TYPES = [
        ('pref', 'Preference')
    ]
    
    name = models.CharField(max_length=50, primary_key=True)
    description = models.TextField()
    game = models.CharField(max_length=20, choices=GAME_TYPES)

    def __str__(self):
        return self.name