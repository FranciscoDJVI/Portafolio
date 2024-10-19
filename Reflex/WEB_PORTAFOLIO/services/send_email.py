from mailjet_rest import Client
import os

#CREDENTIALS
from . credentials import api_key, api_key_secret

Api_key = api_key
Api_key_secret = api_key_secret

def send_mail(remitente: str, name_remitente: str):
# Inicializa el cliente
    mailjet = Client(auth=(Api_key, Api_key_secret), version='v3.1')

    # Configuración del correo
    data = {
    'Messages': [
        {
        "From": {
            "Email": "youremail@example.com",
            "Name": "tu nombre"
        },
        "To": [
            {
            f"Email": remitente,
            f"Name": name_remitente, 
            }
        ],
        "Subject": "tu nombre",
        "TextPart": "Asunto del email.",
        "HTMLPart": "<p>Cuerpo del email/>Algo que quieras agregar"
        }
    ]
    }

    # Enviar el correo
    result = mailjet.send.create(data=data)

    # Mostrar la respuesta
    print(f"Su correo se ha enviado corretamente {result.status_code}.")

