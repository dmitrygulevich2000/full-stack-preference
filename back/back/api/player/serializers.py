from rest_framework import serializers

from .models import Player
from api.table.models import max_players, Table

class PlayerSerializer(serializers.ModelSerializer):
    #score_object = ScoreObjectRelatedField()
    #user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Player
        fields = '__all__'

class PlayerLimitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

    def validate(self, data):
        table_pk = data['table']
        #print(table_pk)
        game = Table.objects.get(pk=table_pk).game
        #print(game)
        limit_reached = len(Player.objects.filter(table_id=table_pk))
        
        if limit_reached >= max_players[game]:
            raise serializers.ValidationError("Table is full")

        return data
