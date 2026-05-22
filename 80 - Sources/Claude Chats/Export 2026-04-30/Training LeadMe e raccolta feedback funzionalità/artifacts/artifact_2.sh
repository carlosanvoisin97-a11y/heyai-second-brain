cd /home/claude && python3 -c "
import cairosvg
cairosvg.svg2png(
    url='arch_v4_fixed.svg',
    write_to='arch_v4_fixed.png',
    output_width=2700,
    output_height=2760
)
print('Done')
"