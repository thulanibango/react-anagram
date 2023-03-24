from django.shortcuts import render
from django.views import View
# Create your views here.
class Registrationview(View):
    def get(self, request):
        return render(request, 'authentication/register.html')

# from django.shortcuts import render

    
# def index(req):
#     return render(req, 'authentication/login.html')
# def register(request):
#     return render(request, 'authentication/register.html')

