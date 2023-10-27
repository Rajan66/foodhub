from .models import Restaurant
from rest_framework import serializers
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = [
            'id',
            'name',
            'address',
            'phone',
            'image',
            'about',
            'fb_url',
            'insta_url',
            'x_url',
        ]


# class UserRegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = '__all__'

#         def create(self, clean_data):
#             user_obj = UserModel.objects.create_user(
#                 email=clean_data['email'], password=clean_data['password'])
#             user_obj.username = clean_data['username']
#             user_obj.save()
#             return user_obj


# class UserLoginSerializer(serializers.ModelSerializer):

#     # email = serializers.EmailField()
#     email = serializers.EmailField(
#         validators=[UniqueValidator(queryset=UserModel.objects.all())])
#     password = serializers.CharField(
#         validators=[UniqueValidator(queryset=UserModel.objects.all())])

#     def check_user(self, clean_data):
#         user = authenticate(
#             email=clean_data['email'], password=clean_data['password'])
#         if not user:
#             raise ValidationError('user not found')
#         return user


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         models: UserModel
#         fields = ('email', 'username')
