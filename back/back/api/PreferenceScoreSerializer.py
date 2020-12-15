from rest_framework import serializers

from api.models import PreferenceScore

class PreferenceScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreferenceScore
        fields = '__all__'