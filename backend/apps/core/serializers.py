from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id', 'nome', 'email', 'telefone', 'assunto', 'descricao', 'criado_em']
        read_only_fields = ['id', 'criado_em']
