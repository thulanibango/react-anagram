
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="dash"),
    path('add-dash',views.add_dash, name="add_dash")
]
