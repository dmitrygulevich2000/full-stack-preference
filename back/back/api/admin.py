from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from api.models import User, Table, Player

admin.site.register(User, UserAdmin)
admin.site.register(Table)
admin.site.register(Player)