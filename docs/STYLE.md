# STYLE

Styleguides
Tailwind principles
Colors

## Colors

3 shades for base dark/light themes based on a faint purple
pure white/black are not invalid colors. used sparingly, valid on shadows/highlight effects.
primary/secondary saturation of a dark/light variation of purple and gold colors separately

in total:
3x base (base0,base1,base2)
2x purple hues (purp0,purp1)
2x gold hues (gold0,gold1)
adding -dark to specify dark mode versions
using 0th as the higher priority color (background being a base0 and card backgrounds as base1)

hue constant for base and purple at 270
all colors AAA rated contrast for regular text on white/black background
dark mode base, saturation going from 33 to 20 (1/3 to 1/5) and value from 10 to 25 (1/10 to 1/4)
light mode base, saturation going from 15 to 10 (1/6 to 1/10) and value from 75 to 90 (3/4 to 9/10)
dark mode purple, saturation going from 50 to 30 (1/2 to 1/3) and value at constant 95
light mode purple, saturation going from 75 to 55 (3/4 to 5.5/10) and value at constant 60

current colors:
base0           #B1A2BF
base1           #C5B8D2
base2           #DACFE6
purp0           #602699
purp1           #6E4499
base0-dark      #15111A
base1-dark      #26202C
base2-dark      #39323F
purp0-dark      #B679F3
purp1-dark      #CDA8F2
