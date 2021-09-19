from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import Person
from .serializers import PersonSerializer
from rest_framework.pagination import PageNumberPagination
import time

class PersonDetail(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PeopleList(ListAPIView):
    pagination_class = PageNumberPagination
    pagination_class.page_size = 5
    queryset = Person.objects.all()
    serializer_class = PersonSerializer