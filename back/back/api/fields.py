from rest_framework import serializers

from .serializers import PreferenceScoreSerializer
from .models import PreferenceScore

class ScoreObjectRelatedField(serializers.RelatedField, serializers.ReadOnlyField):
    """
    A custom field to use for the `score_object` generic relationship.
    """
    queryset = PreferenceScore.objects.all()

    def to_representation(self, value):
        if isinstance(value, PreferenceScore):
            # if PreferenceScoreSerializer(value).is_valid():
            #     return PreferenceScoreSerializer(value).validated_data
            # else:
            #     raise Exception('Invalid data')
            return PreferenceScoreSerializer(value).data
        raise Exception('Unexpected type of score object')

    # def to_internal_value(self, data):
    #     print(data)
    #     return PreferenceScoreSerializer(data)