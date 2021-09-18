from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    species=serializers.StringRelatedField(many=True)
    vehicles=serializers.StringRelatedField(many=True)
    homeworld=serializers.StringRelatedField()

    class Meta:
        model = Person
        fields = '__all__'