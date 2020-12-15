from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from api.models import User
from api.player.models import Player
from api.table.models import Table

admin.site.register(User, UserAdmin)
admin.site.register(Table)
admin.site.register(Player)
#admin.site.register(PreferenceScore)