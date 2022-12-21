from django.contrib import admin
from .models import Mineral

# Register your models here.

class MineralAdmin(admin.ModelAdmin):
    lst = ("mineralType","atomicWeight", "pricePerKg", "crystalStructure", "picture")


admin.site.register(Mineral, MineralAdmin)