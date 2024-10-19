import reflex as rx

#PAGES
from page.about_projects import about_projects

#COMPONENT
from components.button import link_button

#MEASURES
from utils.measures import Border
from utils.measures import Display

#STYLE
from custom.style import title
from custom.style import color_title
from custom.style import body_text
from custom.style import color_body_text

def personal_projects()-> rx.Component:

    return rx.container(
            rx.center(
                rx.text(
                "Projectos",
                font_family = title,
                style  = color_title,
                ),
                margin = Display.SMALL,
                
            ),
            rx.center(
                rx.box(
                    rx.text(
                        "- Projwcto 1",
                        text_align = "center",
                        font_family = body_text,
                        style = color_body_text,
                        margin_top = Display.VERY_SMALL,
                        margin_bottom = Display.VERY_SMALL,
                    ),
                    rx.text(
                        "- Projwcto 2",
                        text_align = "center",
                        font_family = body_text,
                        style = color_body_text,
                        margin_top = Display.VERY_SMALL,
                        margin_bottom = Display.VERY_SMALL,
                    )
                ),
                align = "center",
                justify = "center",
                padding = Display.SMALL,
                margin_left = Display.LARGE,
                margin_right = Display.LARGE,
                border_radius = Border.MINIMUN,       
            ),
            rx.center(
                rx.box(
                link_button("ver más", "/about/projects")
                ),
            ),
            margin = Display.SMALL,
            
        )
