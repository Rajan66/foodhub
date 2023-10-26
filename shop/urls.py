from django.urls import path, re_path
from .import views

urlpatterns = [
    path('', views.RestaurantListCreateView.as_view(), name='list-restaurant'),
    path('<int:pk>/', views.RestaurantDetailView.as_view(), name='list-restaurant'),
    path('<int:pk>/update/', views.RestaurantUpdateView.as_view(),
         name='list-restaurant'),
    path('<int:pk>/delete/', views.RestaurantDestroyView.as_view(),
         name='list-restaurant'),
    re_path('register', views.register, name='register'),
    re_path('login', views.login, name='login'),
]
