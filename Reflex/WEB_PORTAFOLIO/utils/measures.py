from enum import Enum

# Display dimensions
class Display(Enum):
    VERY_SMALL ="10px"
    SMALL = "40px"
    MEDIUM = "80px"
    LARGE = "120px"
    EXTRA_LARGE = "240px"

# Border Dimensions 
class Border(Enum):
    MINIMUN = "25px",
    MAXIMUN = "100%"

# Image dimensions    
class Image(Enum):
    VERY_SMALL = "10vh"
    MINIMUN = "20vh"
    MEDIUN = "50vh"
    MAXIMUN = "100vh"
    EXTRA = "250vh"

#Input dimensions
class Input(Enum):
    SMALL = "10em"
    MEDIUN =  "20em"
    LARGE = "40em"
    EXTRA_LARGE = "60em"