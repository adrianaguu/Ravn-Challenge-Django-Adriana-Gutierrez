from django.db import models

class Species(models.Model):
    name = models.CharField(max_length=50,help_text="The name of this species.",unique=True)

    def __str__(self):
        return self.name


class Planet(models.Model):
    name = models.CharField(max_length=50,help_text="The name of this planet.",unique=True)

    def __str__(self):
        return self.name


class Vehicle(models.Model):
    name = models.CharField(max_length=50,help_text="The name of this vehicle.",unique=True)

    def __str__(self):
        return self.name


class Person(models.Model):

    name = models.CharField(max_length=50,help_text="The name of this person.",unique=True)

    birth_year = models.CharField(max_length=10,help_text="""The birth year of the person, 
    using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. 
    The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.""")

    eye_color = models.CharField(max_length=20,help_text="""The eye color of this person. Should be \"unknown\" 
    if not known or \"n/a\" if the person does not have an eye.""")

    hair_color = models.CharField(max_length=20,help_text="""The hair color of this person. Should be \"unknown\" 
    if not known or \"n/a\" if the person does not have hair.""")

    skin_color = models.CharField(max_length=20,help_text="The skin color of this person.")

    homeworld = models.ForeignKey(Planet, on_delete=models.PROTECT,help_text="Planet that this person was born on or inhabits.")

    species = models.ManyToManyField(Species,help_text="Set of species that this person belongs to.")

    vehicles = models.ManyToManyField(Vehicle,help_text="Set of vehicles that this person has piloted.",null=True,blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "People"