import reflex as rx

#UTILS
from utils.measures import Display
from utils.measures import Border

def avatar()->rx.Component:

    return rx.container(
        rx.flex(
            rx.image(
                src = "/sufoto.jpg",
                width = Display.LARGE,
                border_radius = Border.MINIMUN,
                height = "auto"
            ),
            justify = "center",
            align = "center",
            margin_top = Display.SMALL,
    )
),
    
    