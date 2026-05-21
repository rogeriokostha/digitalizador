from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Lead

@admin.register(Lead)
class LeadAdmin(ModelAdmin):
    list_display = ['nome', 'email', 'telefone', 'assunto', 'criado_em']
    search_fields = ['nome', 'email', 'telefone']
    list_filter = ['assunto', 'criado_em']
    ordering = ['-criado_em']
