import reflex as rx

#UTILS
from utils.measures import Display

#STYLE
from custom.style import data_list_style

def data_lsit()-> rx.Component:
    return rx.center(
    rx.card(
        rx.data_list.root(
            rx.data_list.item(
                rx.data_list.item(
                rx.data_list.label("Nombre"),
                rx.data_list.value(rx.code("tu nombre")),
                ),
                rx.data_list.item(
                rx.data_list.label("ID"),
                rx.data_list.value(rx.code("tu ID")),
                ),
                rx.data_list.item(
                rx.data_list.label("Nacionalidad"),
                rx.data_list.value(rx.code("tu nacionalidad")),
                align="center",
                ),
                rx.data_list.item(
                rx.data_list.label("GitHub"),
                rx.data_list.value(
                    rx.link(
                        "usuario github",
                        href="url del perfil",
                        is_externak = True,
                        ),
                    ),
                        
                ),
            )     
        ),
        style = data_list_style,
    ),
        margin_top = Display.MEDIUM
),