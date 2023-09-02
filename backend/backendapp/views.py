from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer
from .models import User

# Create your views here.
@csrf_exempt
def UserAPI(request,pk=0):
    if request.method == 'GET':
        users = User.objects.all()
        users_serializer = UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        users_serializer = UserSerializer(data=user_data,many=True)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("User Added Successfully", safe=False)
        return JsonResponse("Failed To Add Use", safe=False)
    elif request.method == 'DELETE':
        user = User.objects.get(id=pk)
        user.delete()
        return Response("User was Deleted Successfully", safe=False)
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    