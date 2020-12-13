from rest_framework import serializers

from api.models import Users, Tables

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = Users
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tables
        fields = '__all__'