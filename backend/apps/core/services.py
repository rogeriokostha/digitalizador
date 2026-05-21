import logging
from .models import Lead

logger = logging.getLogger(__name__)

class LeadService:
    @staticmethod
    def criar_lead(validated_data: dict) -> Lead:
        """
        Cria um novo Lead no banco de dados e prepara o terreno
        para disparar webhooks futuramente (ex: para o n8n).
        """
        lead = Lead.objects.create(**validated_data)
        
        # TODO: Implementar integração com n8n aqui no futuro.
        # Exemplo:
        # try:
        #     requests.post(N8N_WEBHOOK_URL, json=LeadSerializer(lead).data)
        # except Exception as e:
        #     logger.error(f"Erro ao enviar lead para n8n: {e}")
        
        return lead
