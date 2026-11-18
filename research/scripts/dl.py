import json,sys,os,subprocess
d=sys.argv[1]; posts=json.load(open(d+'/posts.json')); os.makedirs(d+'/img',exist_ok=True); os.makedirs(d+'/vid',exist_ok=True)
n=0
for c,r in posts.items():
    for i,m in enumerate(r.get('imgs',[])):
        f=f"{d}/img/{c}_{i}.jpg"
        if m.get('u') and not os.path.exists(f):
            subprocess.run(['curl','-s','-o',f,m['u']]); n+=1
print('downloaded',n)
