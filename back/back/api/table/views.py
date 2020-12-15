from rest_framework import viewsets

from .models import Table
from .serializers import TableSerializer
from api.serializers import TablePlayerSerializer, TablePlayerUserSerializer

class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TablePlayerUserSerializer
