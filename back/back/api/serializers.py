from rest_framework import serializers

from .models import User, Table, Player, PreferenceScore
from .PreferenceScoreSerializer import PreferenceScoreSerializer
from .fields import ScoreObjectRelatedField

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        write_only_fields = ('password',)

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'

class PlayerSerializer(serializers.ModelSerializer):
    #score_object = ScoreObjectRelatedField()
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Player
        fields = '__all__'