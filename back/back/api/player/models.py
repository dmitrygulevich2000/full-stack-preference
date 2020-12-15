import uuid
from django.db import models

from api.models import User
from api.table.models import Table

class Player(models.Model):
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    table = models.ForeignKey(Table, on_delete=models.CASCADE) # if table deleted, player deleted too
    number = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True) # if user deleted, player becomes unauthorized

    # # polymorphic relation to score model
    # content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    # score_id = models.CharField(max_length=128, blank=True)
    # score_object = fields.GenericForeignKey('content_type', 'score_id')