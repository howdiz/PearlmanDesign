import re,json,sys,subprocess,time,os,html as H
out=sys.argv[1]; codes=sys.argv[2].split(',')
UA='facebookexternalhit/1.1'
res={}
if os.path.exists(out+'/posts.json'): res=json.load(open(out+'/posts.json'))
for kc in codes:
    k,c=kc.split(':')
    if c in res and res[c].get('imgs') and 'vu' in res[c]['imgs'][0]: continue
    h=subprocess.run(['curl','-s','-A',UA,f'https://www.instagram.com/p/{c}/embed/captioned/'],capture_output=True,text=True).stdout
    m=re.search(r'"contextJSON":("(?:[^"\\]|\\.)*")',h)
    rec={'code':c,'kind':k}
    if m:
        full=json.loads(json.loads(m.group(1))); ctx=full['context']
        sm=(full.get('gql_data') or {}).get('shortcode_media') or {}
        if not sm:
            rec['keys']=list(ctx.keys())
        cap=sm.get('edge_media_to_caption',{}).get('edges',[])
        rec['cap']=cap[0]['node']['text'] if cap else ctx.get('caption','')
        rec['t']=sm.get('taken_at_timestamp'); rec['type']=sm.get('__typename'); rec['loc']=(sm.get('location') or {}).get('name')
        kids=[e['node'] for e in sm.get('edge_sidecar_to_children',{}).get('edges',[])] or [sm]
        rec['imgs']=[{'u':n.get('display_url'),'vu':n.get('video_url'),'v':n.get('is_video'),'w':n.get('dimensions',{}).get('width'),'h':n.get('dimensions',{}).get('height')} for n in kids if n.get('display_url')]
    else:
        im=re.search(r'class="EmbeddedMediaImage"[^>]*src="([^"]+)"',h)
        cap=re.search(r'class="Caption">.*?</a><br /><br />(.*?)</div>',h,re.S)
        if im:
            rec['type']='GraphImage'; rec['imgs']=[{'u':H.unescape(im.group(1)),'vu':None,'v':False}]
            rec['cap']=H.unescape(re.sub('<[^>]+>','',cap.group(1))) if cap else ''
        else: rec['err']=len(h)
    res[c]=rec; time.sleep(1.2)
json.dump(res,open(out+'/posts.json','w'),indent=1)
for c,r in res.items(): print(c,r.get('type'),len(r.get('imgs',[])),r.get('err',''),r.get('keys',''),'|',(r.get('cap') or '')[:70].replace('\n',' '))
