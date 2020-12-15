import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes import fields

class User(AbstractUser):
    pass

# class PreferenceScore(models.Model):
#     #id = models.UUIDField(primary_key=True, default=uuid.uuid4)
#     mountain = models.IntegerField()
#     pool = models.IntegerField()
#     total = models.IntegerField()
