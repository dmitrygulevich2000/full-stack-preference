from django.db import models

class Users(models.Model):
    login = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=300)

    def __str__(self):
        return self.login


class Tables(models.Model):
    GAME_TYPES = [
        ('pref', 'Preference')
    ]
    
    name = models.CharField(max_length=50, primary_key=True)
    game = models.CharField(max_length=20, choices=GAME_TYPES)

    def __str__(self):
        return self.name

class Players(models.Model):
    table = models.ForeignKey(Tables, on_delete=models.CASCADE) # if table deleted player on it deleted to
    user = models.ForeignKey(Users, on_delete=models.SET_NULL, blank=True, null=True) # if user deleted player becomes unauthorized