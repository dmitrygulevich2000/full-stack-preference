from rest_framework import viewsets

from .models import Player
from .serializers import PlayerSerializer
from api.serializers import PlayerTableSerializer, PlayerUserSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerUserSerializer
