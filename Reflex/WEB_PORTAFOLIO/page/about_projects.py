import reflex as rx
from reflex.style import set_color_mode, color_mode

#COMPONENTS
from components.button import link_button

#UTILS
from utils.measures import Display
from utils.measures import Image

#STYLE
from custom.style import subtitle
from custom.style import body_text
from custom.style import color_subtitle
from custom.style import button_primary
from custom.style import button_secundary
from custom.style import color_body_text
from custom.style import hover_image_about_projects

def dark_mode_toggle() -> rx.Component:
    return rx.box(
        rx.segmented_control.root(
        rx.segmented_control.item(
            rx.icon(tag="monitor", size=10),
            value="system",
        ),
        rx.segmented_control.item(
            rx.icon(tag="sun", size=10),
            value="light",
        ),
        rx.segmented_control.item(
            rx.icon(tag="moon", size=10),
            value="dark",
        ),
        on_change=set_color_mode,
        variant="surface",
        radius="large",
        value=color_mode,
    ),
        margin_left = "75%",
        position= "absolute",
        margin_top = ".5%",
)

def about_projects()-> rx.Component:
    return rx.container(
            rx.hstack(
                rx.box(
                    rx.text(
                        "Projecto 1",
                        font_family = subtitle,
                        style = color_subtitle,
                        margin_bottom = Display.SMALL,
                    ),
                    rx.text(
                        """Descripción del projecto.""",
                        text_align = "justify",
                        font_family = body_text,
                        style = color_body_text,
                        margin_bottom = Display.SMALL,
                    ),
                rx.flex(
                    rx.box(
                        rx.image(
                            src = "/projecto.PNG",
                            width = Image.MEDIUN,
                            transition = "width easi-in-out",
                            transition_delay = "5.ms",
                            transition_duration = ".3s",
                            _hover = hover_image_about_projects,
                        ),
                        padding = "0px",
                    ),
                        spacing = "3",
                        align = "center",
                        justify = "center",
                        margin = Display.VERY_SMALL,
                ),
                rx.button(
                    rx.link(
                        "Github",
                        href = "",
                        is_external = True,
                        color = "#ffffff",
                    ),
                    style = button_secundary,
                ),
            ),
        ),
        rx.hstack(
            rx.spacer(),
                rx.box(
                    rx.text(
                        "Projecto 2",
                        font_family = subtitle,
                        style = color_subtitle,
                        margin_bottom = Display.SMALL,
                    ),
                    rx.text(
                    """Descripción del projecto""",
                    text_align = "justify",
                    font_family = body_text,
                    style = color_body_text,
                    margin_bottom = Display.SMALL,
                    ),
                rx.flex(
                    rx.box(
                        rx.image(
                            src = "/projecto2.PNG",
                            width = Image.MEDIUN,
                            transition = "width easi-in-out",
                            transition_duration = ".5s",
                            _hover = hover_image_about_projects,
                        ),
                        padding = "0px",
                    ),
                        spacing = "3",
                        align = "center",
                        justify = "center",
                        margin = Display.VERY_SMALL,
                ),
                rx.button(
                    rx.link(
                        "Github",
                        href = "link de la documentción en github/si tiene.",
                        is_external = True,
                        color = "#ffffff",
                    ),
                    style = button_secundary,
                ),
            ),  
        ),
            rx.button(
                link_button("Regresar", "/"),
                style = button_primary,
            ),
            padding_left = Display.LARGE,
            padding_right = Display.LARGE,
            background = "#07212a",
            margin_letf = Display.EXTRA_LARGE,
            margin_rigth = Display.EXTRA_LARGE,   
    )


