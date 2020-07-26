from django.db import models


class AppSettingModel(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=20)
    value = models.CharField(max_length=100)