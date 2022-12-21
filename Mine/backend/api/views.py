from .serializers import MineralSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .models import Mineral


# Create your views here.
class MineralView(generics.CreateAPIView):
    queryset = Mineral.objects.all()
    serializer_class = MineralSerializer

    def get(self,request):
        queryset = Mineral.objects.all()
        serializer = MineralSerializer(queryset, many=True)
        # dataTable = request.get(serializer)
        
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        a = Mineral.objects.create(
            mineralType=data["mineralType"],
            atomicWeight=data["atomicWeight"] or 0.0,
            pricePerKg=data["pricePerKg"] or 0.0,
            crystalStructure=data["crystalStructure"],
            picture=data["picture"]
        )
        a.save()
        return Response(status=status.HTTP_200_OK)