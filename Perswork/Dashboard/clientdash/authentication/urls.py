from .views import Registrationview
from django.urls import path

urlpatterns =[ path('register', Registrationview.as_view(), name='register')]

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('',views.index, name="authenitcation"),
#     path('register',views.register, name="register"),
# ]