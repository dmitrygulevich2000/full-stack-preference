from rest_framework import viewsets

from .models import Player
from .serializers import PlayerSerializer
from api.serializers import PlayerTableSerializer, PlayerUserSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    #serializer_class = PlayerUserSerializer

    def get_serializer_class(self):
        if (self.action == 'create' or self.action == 'update'):
            return PlayerSerializer
        else:
            return PlayerUserSerializer
