import uuid
from django.db import models

from api.models import User
from api.table.models import Table, max_players

def free_place(table_pk):
    game = Table.objects.get(pk=table_pk).game
    queryset = Player.objects.filter(table_id=table_pk).values_list('number', flat=True).order_by('number')
    numbers = list(queryset)

    return min(set(range(max_players[game])) - set(numbers)) # choose smallest number among not reserved

class Player(models.Model):
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    table = models.ForeignKey(Table, on_delete=models.CASCADE) # if table deleted, player deleted too
    number = models.IntegerField(blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True) # if user deleted, player becomes unauthorized

    def save(self, *args, **kwargs):
        print(self.__dict__)
        if self.number is None:
            self.number = free_place(self.table_id)
        super().save(*args, **kwargs)
    
    # def __str__(self):
    #     print(self.table_id + ": " + self.number)
    # # polymorphic relation to score model
    # content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    # score_id = models.CharField(max_length=128, blank=True)
    # score_object = fields.GenericForeignKey('content_type', 'score_id')