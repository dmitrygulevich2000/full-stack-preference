import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes import fields

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
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    table = models.ForeignKey(Table, on_delete=models.CASCADE) # if table deleted, player deleted too
    number = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True) # if user deleted, player becomes unauthorized

    # polymorphic relation to score model
    content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    score_id = models.CharField(max_length=128, blank=True)
    score_object = fields.GenericForeignKey('content_type', 'score_id')
    
class PreferenceScore(models.Model):
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    mountain = models.IntegerField()
    pool = models.IntegerField()
    total = models.IntegerField()
