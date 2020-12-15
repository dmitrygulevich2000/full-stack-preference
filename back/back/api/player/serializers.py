from rest_framework import serializers

from .models import Player

class PlayerSerializer(serializers.ModelSerializer):
    #score_object = ScoreObjectRelatedField()
    #user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Player
        fields = '__all__'
