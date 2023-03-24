from django.shortcuts import render

# Create your views here.
def index(req):
    return render(req, 'dash/index.html')
def add_dash(request):
    return render(request, 'dash/add_dash.html')

