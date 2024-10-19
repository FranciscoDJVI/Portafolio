import reflex as rx

#STYLE
from custom.style import button_primary

def link_button(name: str, direction: str)-> rx.Component:
    return rx.button(
        f"{name}",
        on_click=rx.redirect(
            direction,
        ),
        style = button_primary
    )