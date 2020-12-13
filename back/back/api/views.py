from django.shortcuts import render
from rest_framework import viewsets, mixins

from api.models import Users, Tables, Players
from api.serializers import UserSerializer, TableSerializer, PlayerSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

class TablesViewSet(viewsets.ModelViewSet):
    queryset = Tables.objects.all()
    serializer_class = TableSerializer

class PlayersViewSet(viewsets.ModelViewSet):
    queryset = Players.objects.all()
    serializer_class = PlayerSerializer

