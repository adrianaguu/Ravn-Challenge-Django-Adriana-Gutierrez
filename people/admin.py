from django.contrib import admin
from .models import *

admin.register(Person,Species,Planet,Vehicle)(admin.ModelAdmin)
