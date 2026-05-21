from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle
from .serializers import LeadSerializer
from .services import LeadService

class LeadThrottle(AnonRateThrottle):
    rate = '5/hour' # Limita 5 leads por hora por IP para evitar spam

class LeadCreateAPIView(views.APIView):
    permission_classes = [AllowAny]
    throttle_classes = [LeadThrottle]

    def post(self, request, *args, **kwargs):
        serializer = LeadSerializer(data=request.data)
        if serializer.is_valid():
            lead = LeadService.criar_lead(serializer.validated_data)
            return Response(
                {"message": "Lead recebido com sucesso!", "data": LeadSerializer(lead).data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
