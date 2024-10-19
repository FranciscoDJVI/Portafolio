import reflex as rx

#MEASURES(MEDIDAS)
from utils.measures import Display
from utils.measures import Image
from utils.measures import Border
from utils.fonts import FontFamily
from utils.fonts import Text_size

#STYLES
from custom.style import title
from custom.style import color_title
from custom.style import hover_skills


def skills()-> rx.Component:
    return rx.container(
        rx.center(
            rx.text(
            "Skills",
            font_family = title,
            style  = color_title,
            ),
            margin = Display.MEDIUM,
        ),
        rx.center(
            rx.hstack(
            rx.box(
                rx.image(
                    src="/pythonimg.png",
                    width = Image.VERY_SMALL,
                    padding = Display.VERY_SMALL,
                ),
                font_size =Text_size.CERO,
                text_align="center",
                transition = "all easi-in-out",
                transition_duration = ".5s",
                _hover = hover_skills,
            ),
            rx.box(
                rx.image(
                    src="/reflex.png",
                    width = Image.VERY_SMALL,
                    border_radius = Border.MINIMUN,
                    padding = Display.VERY_SMALL
                ),
                font_size =Text_size.CERO,
                text_align="center",
                transition = "all easi-in-out",
                transition_duration = ".5s",
                _hover = hover_skills,
            ),
            rx.box(
                rx.image(
                    src="/mysql.png",
                    width = Image.VERY_SMALL,
                    padding = Display.VERY_SMALL
                ),
                font_size =Text_size.CERO,
                text_align="center",
                transition = "all easi-in-out",
                transition_duration = ".5s",
                _hover = hover_skills,
                
            ),
            rx.box(
                rx.image(
                    src="/html.png",
                    width = Image.VERY_SMALL,
                    padding = Display.VERY_SMALL
                ),
                font_size =Text_size.CERO,
                text_align="center",
                transition = "all easi-in-out",
                transition_duration = ".5s",
                _hover = hover_skills,
            ),
            rx.box(
                rx.image(
                    src="/css2.png",
                    width = Image.VERY_SMALL,
                    padding = Display.VERY_SMALL
                ),
                font_size =Text_size.CERO,
                text_align="center",
                transition = "all easi-in-out",
                transition_duration = ".5s",
                _hover = hover_skills,
            ),
        ),
    ),
),
