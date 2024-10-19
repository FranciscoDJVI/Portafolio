import reflex as rx

#THEME
from reflex.style import set_color_mode, color_mode

#STYLE
from custom.style import background_color

#UTILS
from utils.measures import Display

#COMPONENTS
from components.title import tittle
from components.avatar import avatar
from components.data_list import data_lsit
from components.contact_form import event_arg_contact_form

#VIEWS
from views.skill import skills
from views.projects import personal_projects
from views.footer import footer

#PAGES
from page.about_projects import about_projects

class State(rx.State):
    """The app state."""

    ...
#MODO OSCURO DE LOS TOGGLES
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

#PAGINA PRINCIPAL.
@rx.page(route="/", title="Portafolio")
def index() -> rx.Component:
    return rx.container(
        dark_mode_toggle(),
        tittle("portafolio"),
        avatar(),
        data_lsit(),
        skills(),
        personal_projects(),
        rx.spacer(),
        event_arg_contact_form(),
        footer(),
        margin_left = Display.LARGE,
        margin_right = Display.LARGE,
        background = "#07212a",         
        )

# DECORDOR CON LA URL DE LA PAGINA "A CERCA DE".
@rx.page(route="/about/projects", title="Projectos")
def about():
    return rx.container(
        dark_mode_toggle(),
        tittle("Información a cerca de los projectos"),
        about_projects(),
        margin_left = Display.LARGE,
        margin_right = Display.LARGE,
        background = "#07212a"
        )

app = rx.App(style = background_color )
app.add_page(index)
app.add_page(about)

