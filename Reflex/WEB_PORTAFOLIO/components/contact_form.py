import reflex as rx

#STYLE
from custom.style import subtitle
from custom.style import color_subtitle
from custom.style import body_text
from custom.style import color_body_text
from custom.style import button_secundary

#UTilS
from utils.measures import Display

#SERVICE
from services.send_email import send_mail

class EventArgState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
    
        self.form_data = form_data
        name_remitente = self.form_data["name"]
        remitente = self.form_data["email"]
        send_mail(remitente, name_remitente)

def event_arg_contact_form():
    return rx.vstack(
            rx.form(
            rx.flex(
                    rx.text(
                "Contacteme..",
                font_family = subtitle,
                style=color_subtitle,
                ),
                rx.text(
                    """Ingresa tu nombre y correo: 
                    y te respondere para ponernos en contacto""",
                    font_family = body_text,
                    style = color_body_text
                ),
                rx.input(
                    placeholder="Name",
                    name="name",
                ),
                rx.input(
                    placeholder="Email",
                    name="email",
                ),
                rx.button("Enviar", type="submit", style=button_secundary,
                        on_click=rx.window_alert(
                            "Correo enviado. Espera mi respuesta!😊"
                            ),
                        ),
                
                direction="column",
                align="center",
                justify="center",
                spacing="2",
            ),
            on_submit=EventArgState.handle_submit,
            reset_on_submit=True,
            
        ),
        rx.divider(),
        #rx.text(EventArgState.form_data.to_string()),
        margin = Display.SMALL,
        transition = "all easi-in-out",
        transition_duration = ".4s",
        transition_delay = ".3ms",
        _hover = {
            "transitio":"all easi-in-out",
            "transition_duration" : ".4s",
            "transition_delay" : ".3ms",
            "background":"#031820",
            "box_shadow":"0 0 3px 3px #07212a"
        }
    )