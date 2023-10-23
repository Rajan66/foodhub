from django.shortcuts import render
from rest_framework import generics
from .serializers import RestaurantSerializer
from .models import Restaurant


class RestaurantListCreateView(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        name = serializer.validated_data.get('name')
        about = serializer.validated_data.get('about') or None
        if about is None:
            about = name
        serializer.save(about=about)


class RestaurantDetailView(generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantUpdateView(generics.UpdateAPIView,generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.about:
            instance.about = instance.name


class RestaurantDestroyView(generics.DestroyAPIView,generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_destroy(self, instance):
        super().perform_destroy(instance)