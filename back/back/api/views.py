from django.shortcuts import render
from rest_framework import viewsets, mixins

from api.models import Users, Tables
from api.serializers import UserSerializer, TableSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

class TablesViewSet(viewsets.ModelViewSet):
    queryset = Tables.objects.all()
    serializer_class = TableSerializer
