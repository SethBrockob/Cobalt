from django.db import models

# Create your models here.

class MineralManager(models.Manager):
    def create_mineral(self, mineralType, atomicWeight, pricePerKg, crystalStructure, picture):
        return Mineral( mineralType,atomicWeight, pricePerKg, crystalStructure, picture)


class Mineral(models.Model):
    mineralType = models.TextField(max_length=40,blank=True)
    atomicWeight = models.IntegerField()
    pricePerKg = models.IntegerField()
    crystalStructure = models.TextField(max_length=40)
    picture = models.ImageField()
    
    objects = MineralManager()

    def __str__(self):
        return str(self.mineralType)