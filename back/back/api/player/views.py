from rest_framework import viewsets
import rest_framework.permissions as perm

from .models import Player
from .serializers import PlayerSerializer, PlayerLimitSerializer
from api.serializers import PlayerTableSerializer, PlayerUserSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    permission_classes = [perm.IsAuthenticated]

    def get_serializer_class(self):
        if (self.action == 'create'):
            return PlayerLimitSerializer # additionally checks if table if full
        if (self.action == 'update'):
            return PlayerSerializer
        else:
            return PlayerUserSerializer
