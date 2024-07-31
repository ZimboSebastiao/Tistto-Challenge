from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    TIPOS_CHOICES = [
        ('Bug', 'Bug'),
        ('Tarefa', 'Tarefa'),
        ('Melhoria', 'Melhoria'),
    ]

    STATUS_CHOICES = [
        ('Em progresso', 'Em progresso'),
        ('Concluído', 'Concluído'),
        ('Não iniciado', 'Não iniciado'),
    ]

    PRIORIDADE_CHOICES = [
        ('Alta', 'Alta'),
        ('Média', 'Média'),
        ('Baixa', 'Baixa'),
    ]

    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    tipo = models.CharField(max_length=8, choices=TIPOS_CHOICES)
    status = models.CharField(max_length=13, choices=STATUS_CHOICES, default='Não iniciado')
    prioridade = models.CharField(max_length=5, choices=PRIORIDADE_CHOICES, default='Média')
    data_inicio = models.DateField()
    data_termino = models.DateField()
    etiquetas = models.CharField(max_length=255, blank=True)  # Tags separadas por vírgulas
    reporter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tarefas_reportadas')

    def __str__(self):
        return self.titulo
