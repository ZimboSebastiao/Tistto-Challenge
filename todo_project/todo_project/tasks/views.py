from rest_framework import viewsets
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, TaskSerializer
from .models import Task
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# para testes das APIs via Postman
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    # para testes das APIs via Postman
    permission_classes = [AllowAny]

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'success': 'Login efetuado com sucesso'})
        return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_400_BAD_REQUEST)
    
    # para testes das APIs via Postman
    permission_classes = [AllowAny]

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    # para testes das APIs via Postman
    
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request):
        logout(request)
        return Response({'success': 'Logout efetuado com sucesso'}, status=status.HTTP_204_NO_CONTENT)

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtra as tarefas pelo usuário autenticado
        return Task.objects.filter(reporter=self.request.user)

    def perform_create(self, serializer):
        # Define o usuário autenticado como o reporter da tarefa
        serializer.save(reporter=self.request.user)

    def perform_update(self, serializer):
        # Garante que o reporter não seja alterado manualmente durante atualizações
        serializer.save(reporter=self.request.user)