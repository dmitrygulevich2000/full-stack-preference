from rest_framework import serializers

from api.models import Users, Tables, Players

class UserSerializer(serializers.ModelSerializer):
    #password = serializers.CharField(write_only=True)
    class Meta:
        model = Users
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tables
        fields = '__all__'

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = '__all__'