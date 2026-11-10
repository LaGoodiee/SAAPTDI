(function(){
  var $=function(s,r){return (r||document).querySelector(s)};
  var on=function(s,ev,fn){var el=document.querySelector(s);if(el)el.addEventListener(ev,fn)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var EMAIL='albayaninterfaithcentre@gmail.com';

  /* ---------- events data ---------- */
  var FL={wandt:'fl-wandt.jpg',sanusi:'fl-sanusi.jpg',botha:'fl-botha.jpg',fitriani:'fl-fitriani.jpg',abdullahi:'fl-abdullahi.jpg',keynote:'fl-keynote.jpg',temi:'fl-temi.jpg',coster:'fl-coster.jpg',exec:'fl-exec.jpg'};
  var EVENTS=[
    {id:'wandt',start:'2026-11-08T20:00:00+01:00',end:'2026-11-08T22:00:00+01:00',date:'8 November 2026',time:'8pm – 10pm WAT',platform:'Google Meet',img:'wandt.jpg',flyer:FL.wandt,who:'Professor Adam Wandt',role:'International expert in digital forensics, cybercrime investigation and intelligence',topic:'Social Media and Mobile Device Forensics: Turning Digital Evidence into Actionable Intelligence'},
    {id:'sanusi',start:'2026-11-07T20:00:00+01:00',end:'2026-11-07T22:00:00+01:00',date:'7 November 2026',time:'8pm – 10pm WAT',platform:'Google Meet',img:'sanusi.jpg',flyer:FL.sanusi,who:'Dr. MS Sanusi',role:'Abcorp Africa President',topic:'Forensics Intelligence Analysis and Investigative Techniques: Turning Information into Actionable Intelligence'},
    {id:'botha',start:'2026-10-24T20:00:00+01:00',end:'2026-10-25T22:00:00+01:00',date:'24 – 25 October 2026',time:'8:00 – 10:00 PM WAT',platform:'Google Meet',img:'botha.jpg',flyer:FL.botha,who:'Dr. Anneli Botha',role:'Director, Security Initiative for Africa (South Africa)',topic:'Forensic Investigation, Intelligence, Counter-Terrorism and Peace: From Evidence to Intelligence'},
    {id:'fitriani',start:'2026-10-24T20:00:00+01:00',end:'2026-10-25T22:00:00+01:00',date:'24 – 25 October 2026',time:'8:00 – 10:00 PM WAT (West Africa Time)',platform:'Google Meet',img:'fitriani.jpg',flyer:FL.fitriani,who:'Dr. Rani Siti Fitriani',role:'Forensic Expert, Researcher and Educator',prog:'International Professional Training Programme',theme:'Forensic Investigation, Intelligence, Counter-Terrorism and Peace',topic:'Forensic Linguistics and Digital Evidence: Analysing Hate Speech, Online Radicalization, and Threats for Crime Investigation'},
    {id:'abdullahi',start:'2026-10-24T20:00:00+01:00',end:'2026-10-25T22:00:00+01:00',date:'24 – 25 October 2026',time:'8:00 – 10:00 PM WAT',platform:'Zoom',img:'abdullahi.jpg',flyer:FL.abdullahi,who:'ACP Bashir Abdullahi',role:'NPF-NCCC',topic:'Digital Forensics and Cybercrime Investigation: From Digital Evidence to Intelligence-Led Security'},
    {id:'zuokumor',start:'2026-09-26T20:00:00+01:00',end:'2026-09-27T22:00:00+01:00',date:'26 – 27 September 2026',time:'8:00pm – 10:00pm WAT',platform:'Zoom / Google Meet',img:'zuokumor.jpg',flyer:FL.temi,who:'CSP Temi Agbede-Zuokumor',role:'National Coordinator, Police Community Safety Advocacy. DPO, Ugborikoko Police Station, Effurun, Delta State',prog:'International Professional Certificate Programme',topic:'Community Policing, Crime Prevention and Security Awareness: Strengthening Police–Community Partnerships for Safer Communities'},
    {id:'coster',start:'2026-09-26T20:00:00+01:00',end:'2026-09-27T22:00:00+01:00',date:'26 – 27 September 2026',time:'8pm – 10pm WAT',platform:'Google Meet',img:'coster.jpg',flyer:FL.coster,who:'John W. Coster',role:'Journalist and Documentarian, S24 Television',prog:'International Professional Training Programme',topic:'Dialogue, Social Cohesion and Peacebuilding: Bridging Communities for a Better Future'}
  ];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function icon(n){return '<svg class="i" style="width:1em;height:1em"><use href="#i-'+n+'"/></svg>'}
  function card(e,past){
    var now=Date.now(),st=new Date(e.start).getTime(),en=new Date(e.end).getTime();
    var label=past?'Completed':(now>=st&&now<=en?'Live now':'Upcoming');
    var cls=past?'past':(label==='Live now'?'live':'');
    var lead,who='';
    if(e.people){
      lead='<div class="trio" aria-hidden="true">'+e.people.map(function(p){return '<img src="'+p.img+'" alt="" width="62" height="62">'}).join('')+'</div>';
      who='<ul class="ppl">'+e.people.map(function(p){return '<li><img src="'+p.img+'" alt="'+esc(p.who)+'" width="44" height="44"><span><b>'+esc(p.who)+'</b><small>'+esc(p.role)+'</small><em>'+esc(p.topic)+'</em></span></li>'}).join('')+'</ul>';
    }else{
      lead='<img src="'+e.img+'" alt="'+esc(e.who)+'" width="104" height="104">';
      who='<div><div class="who">'+esc(e.who)+'</div><div class="role">'+esc(e.role)+'</div></div>';
    }
    var title=e.title||e.topic;
    var theme=e.theme?'<div class="role"><b>Theme:</b> '+esc(e.theme)+'</div>':'';
    var sub=e.people?'<p class="role">'+esc(e.topic)+'</p>':'';
    var flyer=e.flyer?'<button class="btn btn-line btn-sm" type="button" data-flyer="'+e.flyer+'" data-alt="Flyer: '+esc(e.title||e.who)+'">'+icon('file')+' View flyer</button>':'';
    var reg=past?'':'<a class="btn btn-solid btn-sm" href="contact.html?topic=Training%20registration">Register</a>';
    return '<article class="ev rv">'+lead+'<div class="ev-body"><span class="status '+cls+'">'+label+'</span>'+(e.prog?'<div class="role">'+esc(e.prog)+'</div>':'')+'<h3>'+esc(title)+'</h3>'+theme+sub+who+'<div class="meta"><span>'+icon('calendar')+esc(e.date)+'</span><span>'+icon('clock')+esc(e.time)+'</span><span>'+icon('pin')+esc(e.platform)+'</span></div>'+((reg||flyer)?'<div class="row" style="margin-top:6px">'+reg+flyer+'</div>':'')+'</div></article>';
  }
  function renderEvents(){
    var now=Date.now();
    var up=EVENTS.filter(function(e){return new Date(e.end).getTime()>=now}).sort(function(a,b){return new Date(a.start)-new Date(b.start)});
    var pa=EVENTS.filter(function(e){return new Date(e.end).getTime()<now}).sort(function(a,b){return new Date(b.start)-new Date(a.start)});
    var h=$('#home-events'),u=$('#ev-up'),p=$('#ev-past');
    var upHtml=up.length?up.map(function(e){return card(e,false)}).join(''):'<div class="empty"><b>No sessions are scheduled right now</b><span>Subscribe to the newsletter to hear about the next programme.</span></div>';
    if(h)h.innerHTML=up.length?up.map(function(e){return card(e,false)}).join(''):pa.slice(0,2).map(function(e){return card(e,true)}).join('');
    if(u)u.innerHTML=upHtml;
    if(p)p.innerHTML=pa.map(function(e){return card(e,true)}).join('');
    return up;
  }
  var upcoming=renderEvents();

  /* ---------- countdown ---------- */
  var target=upcoming[0];
  function tick(){
    if(!target)return;
    var t=$('#next-title');if(t)t.textContent=(target.title||target.topic).split(':')[0];
    var diff=new Date(target.start).getTime()-Date.now();
    if(diff<0)diff=0;
    var d=Math.floor(diff/864e5),h=Math.floor(diff%864e5/36e5),m=Math.floor(diff%36e5/6e4),s=Math.floor(diff%6e4/1e3);
    var v={d:d,h:h,m:m,s:s};
    $$('#cd [data-u]').forEach(function(n){n.textContent=String(v[n.dataset.u])});
  }
  if(!target){var nc=$('#next-card');if(nc)nc.hidden=true}
  tick();setInterval(tick,1000);

  /* ---------- current page ---------- */
  var currentPage=document.body.getAttribute('data-page')||'home';
  $$('[data-nav]').forEach(function(a){if(a.dataset.nav===currentPage)a.setAttribute('aria-current','page')});

  /* ---------- header, menus ---------- */
  var hdr=$('#hdr');
  window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>8)},{passive:true});
  var sheet=$('#sheet'),burger=$('#burger');
  function closeSheet(){sheet.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu');burger.firstElementChild.firstElementChild.setAttribute('href','#i-menu')}
  burger.addEventListener('click',function(){
    var o=sheet.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(o));burger.setAttribute('aria-label',o?'Close menu':'Open menu');
    burger.firstElementChild.firstElementChild.setAttribute('href',o?'#i-x':'#i-menu');
  });
  var dd=$('#dd');
  function closeDd(){dd.classList.remove('open');dd.firstElementChild.setAttribute('aria-expanded','false')}
  dd.firstElementChild.addEventListener('click',function(e){e.stopPropagation();var o=dd.classList.toggle('open');this.setAttribute('aria-expanded',String(o))});
  document.addEventListener('click',function(e){if(!dd.contains(e.target))closeDd()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeDd();closeSheet()}});

  /* ---------- theme ---------- */
  on('#theme','click',function(){
    var root=document.documentElement,cur=root.getAttribute('data-theme');
    if(!cur)cur='light';
    var nt=cur==='dark'?'light':'dark';root.setAttribute('data-theme',nt);
    try{localStorage.setItem('saaptdi-theme',nt)}catch(e){}
  });

  /* ---------- tabs ---------- */
  var tabs=$$('#prog-tabs .tab');
  function pick(t){
    tabs.forEach(function(x){x.setAttribute('aria-selected',String(x===t));x.tabIndex=x===t?0:-1});
    $$('#prog-tabs .tabpanel').forEach(function(p){p.classList.toggle('on',p.id===t.getAttribute('aria-controls'))});
  }
  tabs.forEach(function(t,i){
    t.tabIndex=i===0?0:-1;
    t.addEventListener('click',function(){pick(t)});
    t.addEventListener('keydown',function(e){
      var n=null;
      if(e.key==='ArrowDown'||e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];
      if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();n.focus();pick(n)}
    });
  });

  /* ---------- gallery ---------- */
  var GAL=[
    {k:'wandt',m:'Nov',t:'Social Media and Mobile Device Forensics',d:'Professor Adam Wandt · 8 November 2026',w:720,h:1080},
    {k:'sanusi',m:'Nov',t:'Forensics Intelligence Analysis and Investigative Techniques',d:'Dr. MS Sanusi · 7 November 2026',w:720,h:1080},
    {k:'keynote',m:'Oct',t:'Professional Security Capacity-Building Programme',d:'Keynote speakers · 24–25 October 2026',w:720,h:1080},
    {k:'fitriani',m:'Oct',t:'Forensic Linguistics and Digital Evidence',d:'Dr. Rani Siti Fitriani · 24–25 October 2026',w:800,h:876},
    {k:'botha',m:'Oct',t:'Forensic Investigation, Intelligence, Counter-Terrorism and Peace',d:'Dr. Anneli Botha · 24–25 October 2026',w:720,h:1080},
    {k:'abdullahi',m:'Oct',t:'Digital Forensics and Cybercrime Investigation',d:'ACP Bashir Abdullahi · 24–25 October 2026',w:720,h:1080},
    {k:'exec',m:'Sep',t:'Professional Executive Certificate Programme',d:'Three resource speakers · 26–27 September 2026',w:800,h:1200},
    {k:'coster',m:'Sep',t:'Dialogue, Social Cohesion and Peacebuilding',d:'John W. Coster · 26–27 September 2026',w:800,h:876},
    {k:'temi',m:'Sep',t:'Community Policing, Crime Prevention and Security Awareness',d:'CSP Temi Agbede-Zuokumor · 26–27 September 2026',w:600,h:900}
  ];
  var FILTERS=[['all','All flyers'],['Nov','November 2026'],['Oct','October 2026'],['Sep','September 2026']];
  var galMonth='all',visible=[];
  function renderGallery(){
    var f=$('#gal-filters'),g=$('#gal');if(!f||!g)return;
    f.innerHTML=FILTERS.map(function(x){return '<button class="fbtn" type="button" data-gf="'+x[0]+'" aria-pressed="'+(x[0]===galMonth)+'">'+x[1]+'</button>'}).join('');
    visible=GAL.filter(function(x){return galMonth==='all'||x.m===galMonth}).map(function(x){return {src:FL[x.k],t:x.t,d:x.d,w:x.w,h:x.h}});
    g.innerHTML=visible.map(function(x,i){return '<figure><button type="button" data-gi="'+i+'" aria-label="View flyer: '+esc(x.t)+'"><img src="'+x.src+'" alt="Flyer: '+esc(x.t)+'" width="'+x.w+'" height="'+x.h+'"></button><figcaption><b>'+esc(x.t)+'</b><span>'+esc(x.d)+'</span></figcaption></figure>'}).join('');
  }
  renderGallery();

  /* ---------- flyer viewer ---------- */
  var lb=$('#lb'),lbi=$('#lb-img'),lbc=$('#lb-cap'),lbp=$('#lb-prev'),lbn=$('#lb-next'),lbFrom=null,lbList=null,lbIdx=0;
  function showLb(){
    var it=lbList&&lbList[lbIdx];
    if(it){lbi.src=it.src;lbi.alt='Flyer: '+it.t;lbc.textContent=it.t+' · '+it.d}
    lbp.hidden=lbn.hidden=!(lbList&&lbList.length>1);
  }
  function openLb(from){lbFrom=from;lb.hidden=false;document.body.style.overflow='hidden';$('#lb-x').focus()}
  function closeLb(){if(lb.hidden)return;lb.hidden=true;lbi.removeAttribute('src');document.body.style.overflow='';lbList=null;if(lbFrom&&document.body.contains(lbFrom))lbFrom.focus()}
  function step(n){if(!lbList)return;lbIdx=(lbIdx+n+lbList.length)%lbList.length;showLb()}
  document.addEventListener('click',function(e){
    var gf=e.target.closest('[data-gf]');
    if(gf){galMonth=gf.getAttribute('data-gf');renderGallery();var again=$('[data-gf="'+galMonth+'"]');if(again)again.focus();return}
    var f=e.target.closest('[data-flyer]');
    if(f){lbList=null;var al=f.getAttribute('data-alt')||'Event flyer';lbi.src=f.getAttribute('data-flyer');lbi.alt=al;lbc.textContent=al.replace(/^Flyer: /,'');lbp.hidden=lbn.hidden=true;openLb(f);return}
    var g=e.target.closest('[data-gi]');
    if(g){lbList=visible;lbIdx=+g.getAttribute('data-gi');showLb();openLb(g);return}
    if(e.target.closest('#lb-prev')){step(-1);return}
    if(e.target.closest('#lb-next')){step(1);return}
    if(e.target===lb||e.target.closest('#lb-x'))closeLb();
  });
  document.addEventListener('keydown',function(e){
    if(lb.hidden)return;
    if(e.key==='Escape')closeLb();
    if(e.key==='ArrowRight')step(1);
    if(e.key==='ArrowLeft')step(-1);
  });

  /* ---------- video: play in the page on a real website, open YouTube otherwise ---------- */
  var ytReady=null;
  function loadYT(cb,fail){
    if(window.YT&&window.YT.Player){cb();return}
    var prev=window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady=function(){if(prev)prev();cb()};
    if(!ytReady){
      ytReady=document.createElement('script');ytReady.src='https://www.youtube.com/iframe_api';
      ytReady.onerror=fail;document.head.appendChild(ytReady);
    }
  }
  function videoFallback(box,id){
    box.className='vid-fail';
    box.innerHTML='<b>The video could not start here.</b><span>Your browser or the place this page is opened from is blocking the player. You can watch the NTA News report on YouTube.</span><a class="btn btn-lime btn-sm" href="https://youtu.be/'+id+'" target="_blank" rel="noopener">Watch on YouTube</a>';
  }
  /* Put the video file(s) in a "video" folder next to index.html. MP4 (H.264) plays everywhere; WebM is optional. */
  var VIDEO_SOURCES=[['launch.mp4','mp4'],['launch.webm','webm']];
  var VIDEO_TITLE='NTA News: the launch of SAAPTDI at the National Mosque, Abuja';
  function startYT(box,id){
    var done=false,timer=setTimeout(function(){if(!done)videoFallback(box,id)},9000);
    loadYT(function(){
      new YT.Player(box.id,{videoId:id,host:'https://www.youtube-nocookie.com',playerVars:{autoplay:1,rel:0,playsinline:1},
        events:{
          onReady:function(ev){done=true;clearTimeout(timer);var f=ev.target.getIframe();f.className='vid-frame';f.setAttribute('title',VIDEO_TITLE);ev.target.playVideo()},
          onError:function(){done=true;clearTimeout(timer);var f=document.getElementById(box.id);videoFallback(f&&f.parentNode?f:box,id)}
        }});
    },function(){done=true;clearTimeout(timer);videoFallback(box,id)});
  }
  document.addEventListener('click',function(e){
    var v=e.target.closest('[data-video]');
    if(!v)return;
    e.preventDefault();
    var id=v.getAttribute('data-video');
    var vid=document.createElement('video');
    vid.className='vid-frame';vid.controls=true;vid.autoplay=true;vid.playsInline=true;
    vid.setAttribute('playsinline','');vid.setAttribute('title',VIDEO_TITLE);vid.preload='auto';
    var failed=false;
    function fail(){
      if(failed)return;failed=true;
      var box=document.createElement('div');box.className='vid-frame';box.id='yt-'+Date.now();
      vid.replaceWith(box);startYT(box,id);
    }
    VIDEO_SOURCES.forEach(function(x,i){
      var src=document.createElement('source');src.src=x[0];src.type=x[1];
      if(i===VIDEO_SOURCES.length-1)src.addEventListener('error',fail);
      vid.appendChild(src);
    });
    vid.addEventListener('error',fail);
    v.replaceWith(vid);
    var pr=vid.play();if(pr&&pr.catch)pr.catch(function(){});
  });

  /* ---------- toast + copy ---------- */
  var toast=$('#toast'),tt;
  function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},2600)}
  function fallbackCopy(text){
    var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
    var ok=false;try{ok=document.execCommand('copy')}catch(e){}
    document.body.removeChild(ta);return ok;
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-copy]');
    if(b){
      var text=b.getAttribute('data-copy');
      var done=function(ok){say(ok?'Copied':'Select the text and copy it manually')};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){done(true)},function(){done(fallbackCopy(text))})}
      else done(fallbackCopy(text));
      return;
    }
  });

  /* ---------- forms (no backend: compose an email draft) ---------- */
  on('#contact-form','submit',function(e){
    e.preventDefault();
    var n=$('#c-name').value.trim(),em=$('#c-email').value.trim(),m=$('#c-msg').value.trim(),t=$('#c-topic').value;
    if(!n||!/^\S+@\S+\.\S+$/.test(em)||!m){say('Add your name, a valid email and a message');return}
    var body=m+'\n\nFrom: '+n+' ('+em+')';
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('SAAPTDI: '+t)+'&body='+encodeURIComponent(body);
    say('Email draft prepared. Send it from your email app.');
  });
  on('#news-form','submit',function(e){
    e.preventDefault();
    var v=$('#n-email').value.trim();
    if(!/^\S+@\S+\.\S+$/.test(v)){say('Enter a valid email address');return}
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Newsletter subscription')+'&body='+encodeURIComponent('Please add '+v+' to the SAAPTDI newsletter.');
    say('Email draft prepared. Send it to complete your request.');
  });
  on('#verify','submit',function(e){
    e.preventDefault();
    var v=$('#cert').value.trim(),o=$('#verify-out');
    o.classList.add('on');
    if(!v){o.textContent='Enter the reference number printed on the certificate.';return}
    o.innerHTML='Online verification is being set up. To confirm certificate <b>'+esc(v)+'</b> now, email '+EMAIL+' and we will reply.';
  });
  /* preselect the topic when arriving from a "Register" or "Contact" button */
  (function(){
    var sel=$('#c-topic');if(!sel)return;
    var t=new URLSearchParams(location.search).get('topic');
    if(t)Array.prototype.forEach.call(sel.options,function(o){if(o.text===t)sel.value=o.text});
  })();
})();
