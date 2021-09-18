from django.urls import path
from .views import *

urlpatterns = [
    #path('people/', ),
    path('person/<int:pk>/', PersonDetail.as_view()),
]