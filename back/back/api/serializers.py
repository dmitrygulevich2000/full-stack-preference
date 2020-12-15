from rest_framework import serializers

from .models import User
from api.table.models import Table
from api.player.models import Player

from api.player.serializers import PlayerSerializer
from api.table.serializers import TableSerializer
#from .PreferenceScoreSerializer import PreferenceScoreSerializer
#from .fields import ScoreObjectRelatedField

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        write_only_fields = ('password',)

####
## complex serializers performing joins
#####
class TablePlayerSerializer(serializers.ModelSerializer):
    player_set = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = Table
        fields = ['name', 'description', 'game', 'player_set']

class PlayerUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Player
        fields = ['id', 'table', 'number', 'user']

class TablePlayerUserSerializer(serializers.ModelSerializer):
    player_set = PlayerUserSerializer(many=True, read_only=True)
    
    class Meta:
        model = Table
        fields = fields = ['name', 'description', 'game', 'player_set']


class UserPlayerSerializer(serializers.ModelSerializer):
    player_set = PlayerSerializer(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'player_set']

class PlayerTableSerializer(serializers.ModelSerializer):
    table = TableSerializer(read_only=True)

    class Meta:
        model = Player
        fields = ['id', 'table', 'number']

class UserPlayerTableSerializer(serializers.ModelSerializer):
    player_set = PlayerTableSerializer(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'player_set']
