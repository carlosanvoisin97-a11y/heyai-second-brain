cd /home/claude && python3 -c "
import cairosvg
cairosvg.svg2png(
    url='/mnt/user-data/outputs/Noloop_Architettura_Ecosistema_v4.svg',
    write_to='/home/claude/arch_v4.png',
    output_width=2460,
    output_height=2700
)
print('Done')
"