from django.db import models

class Lead(models.Model):
    ASSUNTO_CHOICES = [
        ('ideia', 'Quero desenvolver minha ideia'),
        ('parceria', 'Parceria'),
        ('outro', 'Outros'),
    ]

    nome = models.CharField(max_length=200)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    descricao = models.TextField(verbose_name="Descreva sua ideia")
    assunto = models.CharField(max_length=20, choices=ASSUNTO_CHOICES)
    criado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Lead"
        verbose_name_plural = "Leads"
        ordering = ['-criado_em']

    def __str__(self):
        return f"{self.nome} - {self.get_assunto_display()}"
