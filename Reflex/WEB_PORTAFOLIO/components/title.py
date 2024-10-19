import reflex as rx

#UTILS
from utils.measures import Display

#STYLE
from custom.style import title
from custom.style import color_title

#Titulo principal
def tittle(message: str)-> rx.Component:
    return rx.center(
        rx.text(f"{message}"),
            margin_top = Display.VERY_SMALL,
            padding = Display.VERY_SMALL,
            font_family = title,
            style= color_title,
    )