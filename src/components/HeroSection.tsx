import { useEffect, useRef } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const brand = '<div class="brandmark"><i>IN</i>INTVAR ERP</div>';
const P: Record<string, string> = {};

P.intro = `<div class="pg chalk">${brand}
  <h2 class="serif">One platform for every classroom</h2>
  <p class="lede">Admissions, attendance, exams and fees share a single record, so a change made once shows up everywhere.</p>
  <div class="facts"><div><b>9</b><span>connected modules</span></div><div><b>1</b><span>login per person</span></div><div><b>0</b><span>spreadsheets to merge</span></div></div></div>`;

// generate campus
(function(){
  let w='';
  for(let r=0;r<3;r++)for(let j=0;j<5;j++){
    const lit=((r*7+j*3)%5)!==0, f=lit?'#FFD37A':'#27336B', o=lit?0.95:0.75;
    w+=`<rect x="${176-24*j}" y="${150+r*30}" width="12" height="18" rx="1.5" fill="${f}" opacity="${o}"/>`;
    const lit2=((r*5+j*2)%4)!==0, f2=lit2?'#FFD37A':'#27336B';
    w+=`<rect x="${212+24*j}" y="${150+r*30}" width="12" height="18" rx="1.5" fill="${f2}" opacity="${lit2?0.95:0.75}"/>`;
  }
  const stars=[[40,30],[90,58],[150,22],[230,40],[300,26],[360,60],[120,90],[330,100]].map(s=>`<circle cx="${s[0]}" cy="${s[1]}" r="1.1" fill="#fff" opacity=".7"/>`).join('');
  P.campus=`<div class="pg art"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1848"/><stop offset=".55" stop-color="#5A4A8C"/><stop offset=".86" stop-color="#F08A6B"/><stop offset="1" stop-color="#FFC48A"/></linearGradient>
    <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101A45"/><stop offset="1" stop-color="#070C22"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#sky)"/>${stars}
    <circle cx="318" cy="196" r="30" fill="#FFD9A0" opacity=".5"/><circle cx="318" cy="196" r="17" fill="#FFE7BE" opacity=".9"/>
    <path d="M0 214 Q90 176 180 208 T400 194 V300 H0Z" fill="#18214F"/>
    <rect x="40" y="172" width="40" height="70" fill="#141D47"/><rect x="320" y="172" width="40" height="70" fill="#141D47"/>
    <rect x="70" y="140" width="260" height="102" fill="#182250"/>
    <rect x="180" y="96" width="40" height="62" fill="#1D2A60"/>
    <path d="M170 98 L200 64 L230 98Z" fill="#0E1640"/>
    <circle cx="200" cy="116" r="9.5" fill="#FFE7B0"/><path d="M200 109v7l4 3" stroke="#3a2b10" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M200 64 V46" stroke="#C9D3FF" stroke-width="1.4"/><path d="M200 46 l16 5 -16 5z" fill="#22E1FF"/>
    ${w}
    <rect x="190" y="206" width="20" height="36" rx="2" fill="#FFD37A"/><path d="M200 206v36" stroke="#8A5A1A" stroke-width="1"/>
    <rect x="0" y="240" width="400" height="60" fill="url(#gnd)"/>
    <path d="M168 300 L190 242 H210 L236 300Z" fill="#2A387A" opacity=".85"/>
    <circle cx="26" cy="232" r="20" fill="#0C2A3B"/><circle cx="376" cy="230" r="22" fill="#0C2A3B"/><circle cx="108" cy="246" r="12" fill="#0E3040"/><circle cx="300" cy="248" r="13" fill="#0E3040"/>
  </svg>
  <div class="chip"><div><b>2,486 students</b>on campus today</div><div style="text-align:right"><b>94.6%</b>present</div></div></div>`;
})();

const bars = (vals: number[], lab: string[]) => vals.map((v,i) => `<div class="col"><i style="height:${v}%"></i>${lab[i]}</div>`).join('');

P.students = `<div class="pg dark"><div class="ph"><h3>Students</h3><span class="pill">Live</span></div>
  <div class="kpis"><div class="kpi"><small>Total students</small><b>2,486</b><em>+126 this term</em></div><div class="kpi"><small>New admissions</small><b>126</b><em>18 waiting for review</em></div></div>
  <div class="rows">
    <div class="row"><span class="av">AS</span><span>Aarav Sharma</span><span class="m">Class 8-A</span><span class="pill">Enrolled</span></div>
    <div class="row"><span class="av">DM</span><span>Diya Mehta</span><span class="m">Class 6-B</span><span class="pill">Enrolled</span></div>
    <div class="row"><span class="av">KS</span><span>Kabir Singh</span><span class="m">Class 9-C</span><span class="pill warm">Pending</span></div>
    <div class="row"><span class="av">IR</span><span>Ishita Rao</span><span class="m">Class 5-A</span><span class="pill">Enrolled</span></div>
  </div></div>`;

P.teach = `<div class="pg dark"><div class="ph"><h3>Teachers and attendance</h3></div>
  <div class="split"><div class="ring"><svg viewBox="0 0 100 100"><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22E1FF"/><stop offset="1" stop-color="#4C6FFF"/></linearGradient></defs>
    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="9"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#rg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="237.7 251.3"/></svg>
    <div><b>94.6%</b><small>present today</small></div></div>
    <div><div class="stat">Total teachers<b>126</b></div><div class="stat">Active today<b>118</b></div><div class="stat">On leave<b>8</b></div></div></div>
  <div class="cap">Present this week</div><div class="chart">${bars([78,64,56,88,70],['Mon','Tue','Wed','Thu','Fri'])}</div></div>`;

P.exams = `<div class="pg chalk">${brand}
  <h2 class="serif">Report cards that write themselves</h2>
  <p class="lede">Enter marks once. Grades, class ranks and a parent-ready report card follow automatically.</p>
  <div class="facts"><div><b>3 min</b><span>to publish a class</span></div><div><b>100%</b><span>same grading scale</span></div></div></div>`;

P.report = `<div class="pg chalk"><div class="ph"><h3>Report card</h3><span class="pill ink">Term 2</span></div>
  <div class="card"><div class="who"><span class="av">AS</span><div><b>Aarav Sharma</b><small>Class 8-A</small></div><div class="grade">A+</div></div>
    <div class="mark"><span>Mathematics</span><div class="bar"><i style="width:92%"></i></div><span>92</span></div>
    <div class="mark"><span>Science</span><div class="bar"><i style="width:88%"></i></div><span>88</span></div>
    <div class="mark"><span>English</span><div class="bar"><i style="width:90%"></i></div><span>90</span></div>
    <div class="mark"><span>History</span><div class="bar"><i style="width:85%"></i></div><span>85</span></div>
    <div class="mark"><span>Computer</span><div class="bar"><i style="width:94%"></i></div><span>94</span></div>
    <div class="mark" style="border-top:2px solid #0A1230;margin-top:1cqw"><span>Overall</span><span style="grid-column:2/4;text-align:right">89.8% · Rank 2 of 42</span></div></div></div>`;

(function(){
  const g = [['m','s','e','h'],['e','m','a','s'],['s','h','m','p'],['m','e','s','k'],['h','s','e','m']];
  const nm: Record<string, string> = {m:'Math',s:'Science',e:'English',h:'History',a:'Art',p:'PE',k:'Computer'};
  const times = ['9:00','10:00','11:30','12:30'];
  let cells = '<div></div>'+['Mon','Tue','Wed','Thu','Fri'].map(d=>`<div class="h">${d}</div>`).join('');
  for(let r=0;r<4;r++){
    cells+=`<div class="t">${times[r]}</div>`;
    for(let c=0;c<5;c++){
      const k = g[c][r] as string;
      cells+=`<div class="c ${k}">${nm[k]}</div>`;
    }
  }
  P.timetable = `<div class="pg chalk"><div class="ph"><h3>Timetable, Class 8-A</h3><span class="pill ink">No clashes</span></div><div class="tt">${cells}</div></div>`;
})();

P.fees = `<div class="pg dark"><div class="ph"><h3>Fees</h3><span class="pill warm">212 reminders sent</span></div>
  <div class="kpis"><div class="kpi"><small>Collected</small><b>₹48.2L</b><em>88% of term dues</em></div><div class="kpi"><small>Pending</small><b>₹6.4L</b><em>Auto reminders on</em></div></div>
  <div class="cap">Collected and pending by month</div><div class="chart" style="height:21cqw">${[[62,18],[71,12],[58,20],[80,9],[76,11],[88,6]].map((v,i)=>`<div class="col"><i class="p" style="height:${v[1]*1.05}%"></i><i style="height:${v[0]*0.95}%"></i>${['Apr','May','Jun','Jul','Aug','Sep'][i]}</div>`).join('')}</div></div>`;

P.comms = `<div class="pg dark"><div class="ph"><h3>Communication</h3><span class="pill">Delivered to 212 parents</span></div>
  <div class="chat"><div class="bub in">Has Aarav’s report card been shared yet?</div>
  <div class="bub out">Yes, it is in your inbox with the Term 2 results attached.</div>
  <div class="bub in">Great. Can we meet the class teacher this week?</div></div>
  <div class="note"><div><b>Meeting booked with Ms. Kapoor</b>Friday, 10:00 am · Class 8-A</div></div></div>`;

P.analytics = `<div class="pg accent"><div class="ph"><h3>Analytics</h3><span class="pill" style="background:rgba(255,255,255,.2);color:#fff">Term 2 vs Term 1</span></div>
  <svg class="ln" viewBox="0 0 300 100" preserveAspectRatio="none"><defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
    <path d="M0 80 L50 70 L100 74 L150 52 L200 46 L250 28 L300 14 V100 H0Z" fill="url(#ar)"/>
    <path d="M0 80 L50 70 L100 74 L150 52 L200 46 L250 28 L300 14" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>
  <p class="big">+18%</p><p class="lede">Fee collection compared with last term, with attendance and results in the same view.</p></div>`;

P.cta = `<div class="pg dark">${brand}
  <h2 class="serif" style="color:#fff">Ready to modernize your school?</h2>
  <p class="lede">See INTVAR ERP with your own classes, fees and timetable in a 30 minute walkthrough.</p>
  <div class="btns"><a class="b w" href="/contact">Request a demo</a><a class="b g" href="/contact">Talk to our team</a></div></div>`;

P.modules = `<div class="pg chalk">${brand}
  <h2 class="serif" style="font-size:7.6cqw">Nine modules, one login</h2>
  <div class="mods"><span>Students</span><span>Teachers</span><span>Attendance</span><span>Exams</span><span>Report cards</span><span>Timetable</span><span>Fees</span><span>Communication</span><span>Analytics</span></div></div>`;

const FRONT = [null,'campus','teach','report','fees','analytics','modules'];
const BACK = ['intro','students','exams','timetable','comms','cta',null];
const N = FRONT.length;
const LABELS = [
  ['Overview','One record for every classroom'],
  ['Students and teachers','Admissions, attendance and staff in one place'],
  ['Exams and report cards','Marks in, parent-ready results out'],
  ['Timetable and fees','Clash-free schedules and automatic reminders'],
  ['Communication and analytics','Reach parents and read the trends'],
  ['Get started','Book a walkthrough for your school']
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

const HeroSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  
  const capTRef = useRef<HTMLElement>(null);
  const capSRef = useRef<HTMLElement>(null);
  const leavesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    const book = bookRef.current;
    const copy = copyRef.current;
    const hint = hintRef.current;
    const caption = captionRef.current;
    const capT = capTRef.current;
    const capS = capSRef.current;
    const dotsEl = dotsRef.current;
    const leaves = leavesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!track || !book || !copy || !hint || !caption || !dotsEl || !capT || !capS || leaves.length !== N) return;

    const INTRO = 0.09;
    const END = 0.94;
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    let W = 0, A = 24, introScale = 0.58, introShiftVh = 0.25, vw = window.innerWidth, vh = window.innerHeight;
    let isMobile = false;
    
    function measure(){
      vw = window.innerWidth;
      vh = window.innerHeight;
      W = leaves[0].offsetWidth;
      isMobile = vw < 760;
      A = isMobile ? 14 : 24;
      introScale = isMobile ? 0.8 : 0.58;
      introShiftVh = isMobile ? 0.3 : 0.25;
    }

    function targets(){
      const total = track!.offsetHeight - vh;
      const p = clamp(-track!.getBoundingClientRect().top / total);
      const intro = clamp(p / INTRO);
      const sp = clamp((p - INTRO) / (END - INTRO)) * (N - 2);
      const k = Math.floor(sp);
      const f = sp - k;
      return { intro, t: 1 + k + smooth(f), p };
    }

    let tCur = 1, iCur = 0, mx = 0, my = 0, cx = 0, cy = 0, lastIdx = -1, ready = false;
    
    const handlePointerMove = (e: PointerEvent) => {
      mx = (e.clientX / vw - 0.5) * 2;
      my = (e.clientY / vh - 0.5) * 2;
    };
    
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    function render(t: number, intro: number){
      const e = smooth(intro);
      const s = lerp(introScale, 1, e);
      const ty = lerp(introShiftVh * vh, 0, e);
      
      book!.style.transform = `translate3d(0,${ty}px,0) scale(${s}) rotateX(${(-cy * 3).toFixed(2)}deg) rotateY(${(cx * 4).toFixed(2)}deg)`;

      for (let i = 0; i < N; i++) {
        const f_val = clamp(t - i);
        const sR = clamp(i - t, 0, 4);
        const sL = clamp(t - i - 1, 0, 4);
        const depth = sR + sL;
        const lift = Math.sin(Math.PI * f_val);
        const phi = -A - f_val * (180 - 2 * A);
        const dx = (sR - sL) * W * (isMobile ? 0.01 : 0.15);
        const dz = -depth * W * 0.2 + lift * W * 0.16;
        
        const leaf = leaves[i];
        leaf.style.transform = `translate3d(${dx.toFixed(1)}px,0,${dz.toFixed(1)}px) rotateY(${phi.toFixed(2)}deg)`;
        leaf.style.setProperty('--s', clamp(depth * 0.30 + lift * 0.28, 0, 0.9).toFixed(3));
        leaf.style.setProperty('--o', clamp(3 - depth).toFixed(3));
        leaf.style.zIndex = String(1000 - Math.round(depth * 10));
      }

      copy!.style.opacity = (1 - clamp(intro * 1.5)).toFixed(3);
      copy!.style.transform = `translate3d(0,${(-intro * 7).toFixed(2)}vh,0)`;
      copy!.style.visibility = intro > 0.7 ? 'hidden' : 'visible';
      
      hint!.style.opacity = (1 - clamp(intro * 3)).toFixed(3);
      caption!.style.opacity = clamp((intro - 0.6) * 2.5).toFixed(3);
      dotsEl!.style.opacity = clamp((intro - 0.6) * 2.5).toFixed(3);
      dotsEl!.style.pointerEvents = intro > 0.8 ? 'auto' : 'none';

      const idx = clamp(Math.round(t) - 1, 0, 5);
      if (idx !== lastIdx) {
        lastIdx = idx;
        capT!.textContent = LABELS[idx][0];
        capS!.textContent = LABELS[idx][1];
        
        const dotBtns = Array.from(dotsEl!.children);
        dotBtns.forEach((d, i) => d.classList.toggle('on', i === idx));
      }
    }

    let last = performance.now();
    let animFrameId: number;
    
    function frame(now: number){
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const tg = targets();
      
      if (!ready || reduce) {
        tCur = tg.t;
        iCur = tg.intro;
        ready = true;
      } else {
        tCur += (tg.t - tCur) * (1 - Math.exp(-dt * 7));
        iCur += (tg.intro - iCur) * (1 - Math.exp(-dt * 10));
      }
      
      cx += (mx - cx) * (1 - Math.exp(-dt * 4));
      cy += (my - cy) * (1 - Math.exp(-dt * 4));
      
      render(tCur, iCur);
      animFrameId = requestAnimationFrame(frame);
    }
    
    measure();
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    
    animFrameId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', measure);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const scrollToSpread = (k: number) => {
    if (!trackRef.current) return;
    const vh = window.innerHeight;
    const total = trackRef.current.offsetHeight - vh;
    const INTRO = 0.09;
    const END = 0.94;
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const p = INTRO + (k / (N - 2)) * (END - INTRO);
    window.scrollTo({
      top: trackRef.current.offsetTop + p * total + 1,
      behavior: reduce ? 'auto' : 'smooth'
    });
  };

  return (
    <div className="hero-track bg-brand-primary">
      <section ref={trackRef} className="track" aria-label="INTVAR ERP overview">
        <div className="stage" id="stage">
          <div ref={copyRef} className="copy" id="copy">
            <p className="tag">Complete school management platform</p>
            <h1>Run your entire school from one smart ERP</h1>
            <p className="sub">Students, teachers, attendance, exams, report cards, timetable, fees and analytics — connected on one platform, so nothing is typed twice.</p>
            <div className="cta">
              <Link to="/contact" className="hero-btn white">Request a demo</Link>
              <Link to="/features" className="hero-btn glass">Explore features</Link>
            </div>
          </div>

          <div className="scene" aria-hidden="true">
            <div ref={bookRef} className="book" id="book">
              {Array.from({ length: N }).map((_, i) => (
                <div 
                  key={i} 
                  className="leaf" 
                  ref={(el) => { leavesRef.current[i] = el; }}
                >
                  <div 
                    className="face front" 
                    dangerouslySetInnerHTML={{ __html: FRONT[i] ? P[FRONT[i]!] : '<div class="pg dark"></div>' }} 
                  />
                  <div 
                    className="face back" 
                    dangerouslySetInnerHTML={{ __html: BACK[i] ? P[BACK[i]!] : '<div class="pg dark"></div>' }} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div ref={hintRef} className="hint" id="hint">Scroll to open the modules</div>
          <div ref={captionRef} className="caption" id="caption" style={{ opacity: 0 }}>
            <b ref={capTRef} id="capT"></b>
            <span ref={capSRef} id="capS"></span>
          </div>
          <nav ref={dotsRef} className="dots" id="dots" aria-label="Jump to module">
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <button 
                key={k} 
                type="button" 
                aria-label={LABELS[k][0]} 
                onClick={() => scrollToSpread(k)}
              />
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
