from enum import Enum

# font size
class Text_size(Enum):
    CERO = "0px"
    VERY_SMALL = "10px"
    SMALL = "16px"
    MEDIUM = "24px"
    LARGE = "36px"

# font types     
class FontFamily(Enum):
    VERDANA = "verdana italic"
    TIME = "Times New Roman monospace"
    ARIAL = "Arial cursive"
    GEORGIA  = "Georgia-serif",
    OPENSANS = "Open Sans san-serif",
    INHERIT = "inherit",