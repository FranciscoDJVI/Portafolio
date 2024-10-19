import reflex as rx

# FONTS
from utils.fonts import FontFamily
from utils.fonts import Text_size

#UTILS 
from utils.measures import Display
from utils.measures import Border
from utils.measures import Image

PRIMARY_COLOR = "#ffffff"
SECUNDARY_COLOR = "#9cafb6"

background_color = {
    "background": "#07212a"
}
title = {    
    f"font_family": {FontFamily.OPENSANS},
    f"font_size": {Text_size.LARGE},
    "text_transform ":"uppercase",
    "text_align":"center",
}
subtitle = {    
    f"font_family": {FontFamily.OPENSANS},
    f"font_size": {Text_size.MEDIUM},
    "text_transform ":"capitalize",
}
body_text = {    
    f"font_family": {FontFamily.OPENSANS},
    f"font_size": {Text_size.SMALL},
    "text_aling": "justify",
}
button_primary = {
    "background":"#ffffff",
    "color":"#07212a",
    f"font_family":{FontFamily.OPENSANS},
    "font_weight":"bold",
    "border":"3px solid #07212a",
    f"width" :{Display.MEDIUM},
    "margin_top": "20px", 
}
button_secundary = {
    "background":"#2e9a40",
    "color":"#ffffff",
    f"font_family":FontFamily.INHERIT,
    f"width" :Display.MEDIUM,
    f"margin_bottom": Display.SMALL,
}
color_title = {
    f"color": PRIMARY_COLOR,
}
color_subtitle = {
    f"color":SECUNDARY_COLOR,
}
color_body_text = {
    "color": SECUNDARY_COLOR
}
color_footer = {
    "color": PRIMARY_COLOR,
}
data_list_style = {    
    "color":"black",
    f"font_size": {Text_size.SMALL},
    "font_weight" : "bold",
    "text_transform":"capitalize",
    "box_shadow":"0 0 1px 1px #ffffff",
}
footer_style = {
    f"font_family": {FontFamily.OPENSANS},
    f"font_size": {Text_size.VERY_SMALL}
}
style_box_image_footer = {
    "font_size":"0px",
    "background":"None",
    "color":"#ffffff",
}
hover_skills = {
    "transition": "all easi-in-out",
    "transition_dealy": ".5ms",
    "transition_duration": ".5s",
    "background" :"#031820",
    f"font_size" : {Text_size.SMALL},
    "color" : "white",
    "box_shadow":"0 0 3px 3px  #07212a",
    f"border_radius": {Border.MINIMUN}
}
hover_image_about_projects = {
    "transition":"width easi-in-out",
    "transition_delay":".5ms",
    "transition_duration":".3s",
    f"width":{Image.MAXIMUN},
}
hover_box_image_footer = {
    "font_size":"10px",
    "text_align" :"center",
    "transition": "all easi-in-out",
    "transition_duration":".5s"
}
image_style_footer = {
    f"width":"5vh",
    "padding" : "0px"
}



