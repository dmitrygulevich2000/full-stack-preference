from rest_framework import viewsets
import rest_framework.permissions as perm


from .models import Table
from .serializers import TableSerializer
from api.serializers import TablePlayerSerializer, TablePlayerUserSerializer

class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TablePlayerUserSerializer

    def get_permissions(self):
        if (self.action == 'list' or self.action == 'retrieve'):
            return [ perm.AllowAny() ]
        else:
            return [ perm.IsAuthenticated() ]

