# STYLE

Colors (WIP)
Styleguides (TODO)
Tailwind principles (direct to documentation)

## Colors

3 shades for base dark/light themes based on a faint purple
pure white/black are not invalid colors. used sparingly, valid on shadows/highlight effects.
primary/secondary saturation of a dark/light variation of purple and gold colors separately

in total:
3x base (base0,base1,base2)
2x purple hues (purp0,purp1)
2x gold hues (gold0,gold1)
adding -dark to specify dark mode versions
using 0th as the higher priority color (ex. background being a base0 and card backgrounds as base1)

see tailwind config for current colors

### Color Use

In all cases, the number on the color should be increasing through the layers of the content. For example, a header on an article being  purp0 would then have its secondary header in purp1. Add -dark for only dark mode colors. Do not use any dark or light mode colors outside their respective modes for consistency.

base0: background color
base1: secondary backgrounds (sections/cards)
base2: tertiary backgrounds (headers/subsections within sections/cards)
purp0: primary accent (header text)
purp1: shade of primary accent (secondary header text)
gold0: secondary accent
gold1: shade of secondary accent

### Generic colors

In cases such as shadows or highlights, use plain black (#000000) or plain white (#FFFFFF). These colors are allowed and should be used when necessary but only in details or for text. They are distinct from the theme colors, and should be used when the content itself is worthy of the distinction outside of the theme.
