# Use a imagem oficial do Python como base
FROM python:3.9-slim

# Define o diretório de trabalho
WORKDIR /app

# Copie o arquivo de requisitos para o contêiner
COPY requirements.txt /app/

# Instale as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie todo o projeto para o diretório de trabalho
COPY . /app/

# Defina as variáveis de ambiente para o Django
ENV DJANGO_SETTINGS_MODULE=seu_projeto.settings
ENV PYTHONUNBUFFERED 1

# Exponha a porta que o Django usará
EXPOSE 8000

# Comando para rodar a aplicação
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
