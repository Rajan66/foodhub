from django.db import models


class Restaurant(models.Model):
    name = models.CharField(null=False, max_length=40)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    image = models.ImageField(
        null=True, blank=True, upload_to='images/')
    about = models.TextField(null=True, blank=True)
    fb_url = models.CharField(max_length=225, null=True, blank=True)
    insta_url = models.CharField(max_length=225, null=True, blank=True)
    x_url = models.CharField(max_length=225, null=True, blank=True)

    def __str__(self):
        return self.name
