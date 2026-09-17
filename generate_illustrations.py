"""Generate original schematic SVG exercise illustrations (standard library only)."""
from pathlib import Path
from html import escape
out=Path(__file__).parent/'public/exercises'
# Each drawing is a distinct, deliberately schematic pose, not a photographic demo.
# Lines: head, torso, two arms, two legs, optional bench and weights.
poses={
'chest-row':('REMO EN BANCO', 'Banco inclinado · jala hacia la cadera', (120,81), (140,125),(181,190),[(145,134),(109,165),(93,180)],[(153,144),(173,158),(188,173)],[(180,190),(204,221),(230,229)],[(181,190),(162,221),(137,230)],'incline',[(93,180),(188,173)],'↗'),
'bench-press':('PRESS DE PECHO','Empuja arriba · banco plano',(128,116),(150,161),(210,164),[(155,156),(144,111),(132,78)],[(159,158),(180,112),(189,78)],[(209,165),(234,189),(240,223)],[(205,165),(210,205),(192,223)],'flat',[(132,78),(189,78)],'↑'),
'goblet-squat':('SENTADILLA GOBLET','Pecho erguido · baja controlado',(151,76),(153,119),(155,169),[(149,123),(135,137),(151,142)],[(157,123),(174,137),(152,142)],[(151,165),(111,192),(109,222)],[(158,165),(199,190),(202,222)],None,[(151,141)],'↓'),
'rdl':('PESO MUERTO RUMANO','Cadera atrás · espalda neutra',(128,89),(153,124),(190,155),[(157,127),(179,160),(187,198)],[(159,132),(202,160),(218,198)],[(192,157),(201,204),(200,226)],[(189,159),(162,203),(150,225)],None,[(187,198),(218,198)],'↙'),
'shoulder-press':('PRESS DE HOMBROS','Empuja hacia arriba · sentado',(150,79),(150,125),(153,176),[(148,124),(122,110),(119,61)],[(153,124),(182,110),(184,61)],[(155,176),(194,194),(205,230)],[(150,177),(118,197),(118,230)],'seat',[(119,61),(184,61)],'↑'),
'curl':('CURL DE BÍCEPS','Codos pegados · sin impulso',(151,73),(152,119),(151,166),[(150,124),(130,150),(118,127)],[(157,122),(182,150),(195,127)],[(150,168),(136,207),(133,232)],[(154,168),(177,207),(179,232)],None,[(118,127),(195,127)],'↗'),
'one-arm-row':('REMO UNILATERAL','Torso estable · codo hacia atrás',(118,85),(158,122),(204,142),[(160,124),(124,138),(104,171)],[(167,125),(194,148),(192,181)],[(206,142),(218,189),(232,225)],[(199,145),(163,183),(145,226)],'flat',[(192,181)],'↗'),
'incline-press':('PRESS INCLINADO','Banco 15–30° · empuja arriba',(124,89),(150,137),(190,181),[(150,137),(124,104),(118,65)],[(155,144),(181,111),(185,66)],[(191,182),(215,206),(223,228)],[(188,182),(160,204),(149,229)],'incline',[(118,65),(185,66)],'↑'),
'plank':('PLANCHA','Aprieta abdomen · postura estable',(99,145),(137,158),(192,169),[(137,158),(108,187),(78,189)],[(140,158),(128,182),(111,188)],[(190,169),(224,185),(252,190)],[(189,169),(224,175),(253,190)],None,[],'→'),
'split-squat':('SENTADILLA DIVIDIDA','Una pierna delante · con apoyo',(150,74),(152,117),(155,163),[(150,121),(124,140),(100,140)],[(156,121),(181,148),(204,146)],[(153,163),(125,192),(108,226)],[(156,164),(198,182),(218,218)],None,[],'↓'),
'reverse-fly':('APERTURAS INVERSAS','Abre los brazos · poco peso',(123,85),(151,125),(183,170),[(151,127),(105,128),(67,112)],[(152,129),(197,127),(235,112)],[(183,170),(201,212),(219,226)],[(183,170),(159,212),(143,226)],'incline',[(67,112),(235,112)],'↔'),
 'triceps':('EXTENSIÓN TRÍCEPS','Mancuerna arriba · codos estables',(151,84),(150,129),(154,178),[(149,127),(134,95),(149,48)],[(156,127),(172,95),(153,48)],[(155,179),(193,195),(202,229)],[(152,179),(116,195),(112,229)],'seat',[(151,48)],'↑')
}
def line(points,color='#263e60',width=10):
    return '<polyline points="'+ ' '.join(f'{x},{y}' for x,y in points)+'" fill="none" stroke="'+color+'" stroke-width="'+str(width)+'" stroke-linecap="round" stroke-linejoin="round"/>'
for name,(title,sub,head,neck,hip,arm1,arm2,leg1,leg2,bench,weights,arrow) in poses.items():
    shapes=['<rect width="320" height="300" rx="24" fill="#f1f0fe"/>','<circle cx="260" cy="42" r="59" fill="#e4e1ff"/>','<circle cx="53" cy="244" r="75" fill="#e8e5ff"/>', '<path d="M35 241H285" stroke="#c7c7e8" stroke-width="3" stroke-linecap="round"/>']
    if bench=='incline':shapes += [line([(94,230),(145,138),(190,187)],'#8a81d8',10),line([(145,138),(128,227)],'#a19ae2',7)]
    elif bench=='flat': shapes += [line([(95,178),(224,178)],'#8a81d8',10),line([(113,179),(103,232)],'#aaa3e5',7),line([(214,179),(228,231)],'#aaa3e5',7)]
    elif bench=='seat':shapes += [line([(131,104),(131,190)],'#8880d8',11),line([(112,185),(189,185)],'#8880d8',10),line([(128,189),(120,232)],'#aaa3e5',7)]
    shapes += [line([neck,hip],'#263e60',15),line(leg1),line(leg2),line(arm1,'#526bc6',10),line(arm2,'#526bc6',10),f'<circle cx="{head[0]}" cy="{head[1]}" r="16" fill="#f0ba98" stroke="#263e60" stroke-width="4"/>']
    for x,y in weights:
        shapes += [f'<rect x="{x-14}" y="{y-9}" width="28" height="18" rx="5" fill="#5a50bc"/>',f'<path d="M{x-18} {y-11}v22M{x+18} {y-11}v22" stroke="#3b328e" stroke-width="5" stroke-linecap="round"/>']
    shapes.append(f'<text x="267" y="94" text-anchor="middle" fill="#6e5bdc" font-family="Arial,sans-serif" font-size="37" font-weight="bold">{escape(arrow)}</text>')
    shapes.append(f'<rect x="12" y="252" width="296" height="39" rx="10" fill="#ffffff" fill-opacity=".94"/>')
    shapes.append(f'<text x="160" y="268" text-anchor="middle" fill="#272a58" font-family="Arial,sans-serif" font-size="12" font-weight="bold">{escape(title)}</text>')
    shapes.append(f'<text x="160" y="282" text-anchor="middle" fill="#6a6d87" font-family="Arial,sans-serif" font-size="8">{escape(sub)}</text>')
    svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 300" role="img" aria-label="'+escape(title)+'">'+''.join(shapes)+'</svg>\n'
    (out/f'{name}.svg').write_text(svg,encoding='utf-8')
print('Created',len(poses),'SVG illustrations')
