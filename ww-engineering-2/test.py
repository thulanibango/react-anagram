import requests

BASE ="http://127.0.0.1:5000/students/1"

response = requests.get(BASE)
print(response.json())

# resp = requests.get(BASE + id)