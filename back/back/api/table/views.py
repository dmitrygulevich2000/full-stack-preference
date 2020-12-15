from rest_framework import viewsets

from .models import Table
from .serializers import TableSerializer
from api.serializers import TablePlayerSerializer, TablePlayerUserSerializer
from rest_framework.permissions import IsAuthenticated

class TableViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Table.objects.all()
    serializer_class = TablePlayerUserSerializer
