from .models import Restaurant
from rest_framework import serializers

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = [
            'name',
            'address',
            'phone',
            'image',
            'about',
            'fb_url',
            'insta_url',
            'x_url',
        ]