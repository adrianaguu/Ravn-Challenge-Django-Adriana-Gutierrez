from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView
from .models import Person
from .serializers import PersonSerializer

class PersonDetail(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer