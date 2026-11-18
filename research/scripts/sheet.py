import sys,os,glob
from PIL import Image,ImageDraw
d,out=sys.argv[1],sys.argv[2]; prefixes=sys.argv[3].split(',') if len(sys.argv)>3 else None
fs=sorted(glob.glob(d+'/img/*.jpg'))
if prefixes: fs=[f for f in fs if os.path.basename(f).split('_')[0] in prefixes or any(os.path.basename(f).startswith(p+'_') for p in prefixes)]
T=220; cols=8; rows=(len(fs)+cols-1)//cols
S=Image.new('RGB',(cols*T,rows*(T+16)),'white'); dr=ImageDraw.Draw(S)
for k,f in enumerate(fs):
    try: im=Image.open(f).convert('RGB'); im.thumbnail((T,T))
    except Exception: continue
    x,y=(k%cols)*T,(k//cols)*(T+16); S.paste(im,(x,y)); dr.text((x+2,y+T+2),os.path.basename(f)[:-4],fill='black')
S.save(out,quality=80); print(len(fs),out)
