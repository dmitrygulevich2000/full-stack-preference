from django.shortcuts import render
from rest_framework import viewsets, mixins

from api.models import User, Table, Player, PreferenceScore
from api.serializers import UserSerializer, TableSerializer, PlayerSerializer, PreferenceScoreSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PreferenceScoreViewSet(viewsets.ModelViewSet):
    queryset = PreferenceScore.objects.all()
    serializer_class = PreferenceScoreSerializer

