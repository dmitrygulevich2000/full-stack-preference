from django.shortcuts import render
from rest_framework import viewsets, mixins
import rest_framework.permissions as perm

from api.models import User
from api.serializers import UserSerializer, UserPlayerSerializer, UserPlayerTableSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    #serializer_class = UserPlayerTableSerializer

    # def get_permissions(self):
    #     if self.action == 'list':
    #         return [perm.IsAdminUser()]
    #     elif self.action == 'create':
    #         return [perm.AllowAny()]
    #     else:
    #         return [perm.IsAuthenticated()]
    def perform_create(self, serializer):
        User.objects.create_user(**serializer.validated_data)

    def get_serializer_class(self):
        if (self.action == 'create'):
            return UserSerializer
        else:
            return UserPlayerTableSerializer

# class PreferenceScoreViewSet(viewsets.ModelViewSet):
#     queryset = PreferenceScore.objects.all()
#     serializer_class = PreferenceScoreSerializer
