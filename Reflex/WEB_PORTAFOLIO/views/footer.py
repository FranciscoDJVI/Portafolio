import reflex as rx

#COMPONENTS
from components.dates import today_date

#STYLE
from custom.style import footer_style
from custom.style import color_footer
from custom.style import image_style_footer
from custom.style import style_box_image_footer
from custom.style import hover_box_image_footer

def footer()->rx.Component:
    return rx.center(
        rx.spacer(),
            rx.flex(
                rx.vstack(
                    rx.box(
                        rx.center(
                            rx.image(
                            src = "/github.png",
                            style = image_style_footer,
                            margin = "5px",
                            ),
                            rx.link(
                                "usuario github",
                                color = "#ffffff",
                                href="link usuario",
                                is_external = True,
                            ),
                            style = style_box_image_footer,
                            transition = "all easi-in-out",
                            transition_delay = ".5ms",
                            transition_duration = ".5s",
                            _hover = hover_box_image_footer,
                        )   
                    ),
                    rx.box(
                        rx.center(
                            rx.image(
                                src = "/linkedin.png",
                                style = image_style_footer,
                                margin = "5px",
                                ),
                                rx.link(
                                    "usuario",
                                    color = "#ffffff",
                                    href="link usuario ",
                                    is_external = True,
                                ),
                                style = style_box_image_footer,
                                transition = "all easi-in-out",
                                transition_duration = ".5s",
                                transition_delay = ".5ms",
                                _hover = hover_box_image_footer,
                            )
                        ),
                        rx.text(
                        f"™Portafolio construido con Reflex-framework {today_date.date_now()}®.",
                        font_family = footer_style,
                        style = color_footer,
                        ),
                        spacing = "2",
                        align = "center",
                        justify = "center",
                        direction = "column"
                    ),
                ),  
                rx.spacer(),
    )
