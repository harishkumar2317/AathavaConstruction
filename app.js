/* =========================================================
   Aathava Constructions — Demo App
   ========================================================= */

/* ---------- PORTFOLIO DATA ----------
   Sample photos live in assets/img/. Replace any `image` path with your
   own project photo (e.g. "assets/img/my-kitchen.jpg"). If `image` is empty,
   a styled gradient placeholder with an emoji is rendered instead.        */
const PROJECTS = [
  {
    id: 1, title: "Modern 3BHK Interior", category: ["interior"],
    desc: "Complete 3BHK flat interiors in Saibaba Colony — false ceiling, LED lighting, TV unit and sliding wardrobes.",
    glyph: "🛋️", color: "linear-gradient(135deg,#2b3f5c,#4a6fa5)",
    meta: ["Saibaba Colony, CBE", "3 BHK", "45 Days"], image: "assets/img/p09-living-sofa.jpg"
  },
  {
    id: 2, title: "L-Shaped Modular Kitchen", category: ["modular", "interior"],
    desc: "Modular kitchen at Race Course with soft-close hardware, chimney, granite counter and tall storage unit.",
    glyph: "🍳", color: "linear-gradient(135deg,#8a5a2b,#c8933f)",
    meta: ["Race Course, CBE", "Modular", "18 Days"], image: "assets/img/p02-modular-kitchen.jpg"
  },
  {
    id: 3, title: "Individual House Construction", category: ["civil"],
    desc: "Ground floor individual house at Vadavalli — built from foundation to handover with branded fittings.",
    glyph: "🏠", color: "linear-gradient(135deg,#1f2a3a,#3d5a80)",
    meta: ["Vadavalli, CBE", "2,400 sqft", "8 Months"], image: "assets/img/p03-house-construction.jpg"
  },
  {
    id: 4, title: "4BHK Home Construction", category: ["home", "civil"],
    desc: "Spacious 4BHK homes in Anna Nagar handed over with landscaped sit-out, concealed wiring and premium fittings.",
    glyph: "🏡", color: "linear-gradient(135deg,#31465f,#c8933f)",
    meta: ["Anna Nagar, Chennai", "4 BHK", "14 Months"], image: "assets/img/tn07-chennai-apartment.jpg"
  },
  {
    id: 5, title: "Master Bedroom Interiors", category: ["interior"],
    desc: "Wardrobe with loft storage, upholstered headboard, study nook and ambient cove lighting in RS Puram.",
    glyph: "🛏️", color: "linear-gradient(135deg,#4a3f6b,#8f7fc4)",
    meta: ["RS Puram, CBE", "Bedroom", "12 Days"], image: "assets/img/p05-bedroom.jpg"
  },
  {
    id: 6, title: "Duplex House Civil Work", category: ["civil"],
    desc: "Duplex house RCC structure, plastering, flooring, plumbing and elevation work at Kinathukadavu.",
    glyph: "🏗️", color: "linear-gradient(135deg,#234032,#3f9d6a)",
    meta: ["Kinathukadavu, CBE", "Duplex", "10 Months"], image: "assets/img/p06-civil-site.jpg"
  },
  {
    id: 7, title: "Island Modular Kitchen", category: ["modular", "interior"],
    desc: "Parallel modular kitchen with island counter, breakfast bar and soft-close drawers in Velachery.",
    glyph: "🍽️", color: "linear-gradient(135deg,#7a4a1f,#e0a94f)",
    meta: ["Velachery, Chennai", "Island", "22 Days"], image: "assets/img/p07-kitchen-island.jpg"
  },
  {
    id: 8, title: "Independent House Project", category: ["home"],
    desc: "Independent house at Tallakulam with verandah, elevation cladding and open living — local material sourcing.",
    glyph: "🏘️", color: "linear-gradient(135deg,#4b6043,#9fb87f)",
    meta: ["Tallakulam, Madurai", "3 BHK", "11 Months"], image: "assets/img/tn02-madurai-house.jpg"
  },
  {
    id: 9, title: "Living Room Makeover", category: ["interior"],
    desc: "Full living room styling at Gandhipuram — sofa set, partition, wallpaper, false ceiling and décor.",
    glyph: "✨", color: "linear-gradient(135deg,#5c3a5e,#b784b9)",
    meta: ["Gandhipuram, CBE", "Living", "20 Days"], image: "assets/img/p11-luxury-interior.jpg"
  },
  {
    id: 10, title: "Row House Construction", category: ["civil"],
    desc: "Compact row houses built with quality concrete, branded fittings and on-site supervision.",
    glyph: "🏠", color: "linear-gradient(135deg,#2a3441,#5b7a99)",
    meta: ["Villapuram, Madurai", "1,450 sqft", "7 Months"], image: "assets/img/p10-row-house.jpg"
  },
  {
    id: 11, title: "Premium Kitchen & Dining", category: ["home", "interior"],
    desc: "Premium kitchen and dining interior in Adyar — chimney, tall units, crockery unit and statement lighting.",
    glyph: "🌟", color: "linear-gradient(135deg,#3b2f52,#c8933f)",
    meta: ["Adyar, Chennai", "Kitchen", "25 Days"], image: "assets/img/tn06-indian-kitchen.jpg"
  },
  {
    id: 12, title: "Pooja Unit & Traditional Décor", category: ["interior", "modular"],
    desc: "Teak pooja unit with traditional carving plus festival-ready décor styling for a home in KK Nagar.",
    glyph: "📿", color: "linear-gradient(135deg,#5b4326,#d1a15c)",
    meta: ["KK Nagar, Madurai", "Pooja Unit", "10 Days"], image: "assets/img/tn04-traditional-home.jpg"
  },
  {
    id: 13, title: "Home Office & Study Room", category: ["interior"],
    desc: "Dedicated work-from-home room with study table, bookshelf, task lighting and cable management in Peelamedu.",
    glyph: "📚", color: "linear-gradient(135deg,#2d3e50,#5b7a99)",
    meta: ["Peelamedu, CBE", "Study", "9 Days"], image: "assets/img/p12-study-room.jpg"
  },
  {
    id: 14, title: "Traditional Home Renovation", category: ["civil", "home"],
    desc: "Renovation of a traditional Tamil home — flooring, door frames, plumbing refresh while keeping the old charm.",
    glyph: "🏡", color: "linear-gradient(135deg,#4b5d3a,#9aa86a)",
    meta: ["Madurai", "Renovation", "60 Days"], image: "assets/img/tn08-south-interior.jpg"
  },
  {
    id: 15, title: "Chennai Residential Homes", category: ["home", "civil"],
    desc: "Homes delivered across Chennai neighbourhoods — compact plots handled with smart space planning.",
    glyph: "🏙️", color: "linear-gradient(135deg,#33415c,#6a86ab)",
    meta: ["Triplicane, Chennai", "Homes", "Ongoing"], image: "assets/img/tn01-chennai-house.jpg"
  },
  {
    id: 16, title: "Coimbatore Homes Elevation", category: ["home", "civil"],
    desc: "Independent houses around Coimbatore with climate-friendly roofing, elevation and compound wall work.",
    glyph: "🌇", color: "linear-gradient(135deg,#5c4a2e,#c8933f)",
    meta: ["Coimbatore", "Elevation", "Ongoing"], image: "assets/img/tn03-coimbatore-home.jpg"
  }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  initCounters();
  if ($('#portfolioGrid') && $('#filterBar')) initPortfolio();
  if ($('#quoteForm')) initForm();
  if ($('#lightbox')) initLightbox();
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
});

/* ---------- NAVBAR ---------- */
function initNavbar() {
  const nav = $('#navbar');
  const toggle = $('#navToggle');
  const links = $('#navLinks');
  if (!nav || !toggle || !links) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    $('.fab')?.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => io.observe(el));
}

/* ---------- ANIMATED COUNTERS ---------- */
function initCounters() {
  const run = el => {
    const target = +el.dataset.count;
    const dur = 1600;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.textContent = Math.round(target * eased).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.5 });

  $$('[data-count]').forEach(el => io.observe(el));
}

/* ---------- PORTFOLIO ---------- */
let activeFilter = 'all';
let lightboxIndex = 0;

const CAT_LABEL = {
  interior: 'Interior',
  civil: 'Civil',
  modular: 'Modular',
  home: 'Homes'
};

function cardHTML(p) {
  const bg = p.image
    ? `background-color:#0f1b2d;background-image:url('${p.image}');background-size:cover;background-position:center;`
    : `background:${p.color};`;
  const glyph = p.image ? '' : `<span class="p-glyph">${p.glyph}</span>`;
  const label = CAT_LABEL[p.category[0]] || 'Project';
  return `
    <article class="portfolio-card reveal" data-id="${p.id}" data-cats="${p.category.join(' ')}">
      <div class="p-visual" style="${bg}">
        <span class="tag tag-all">${label}</span>
        ${glyph}
        <div class="p-view">View Project →</div>
      </div>
      <div class="p-body">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="p-meta">${p.meta.map(m => `<span>${m}</span>`).join('')}</div>
      </div>
    </article>`;
}

function renderPortfolio() {
  const grid = $('#portfolioGrid');
  grid.innerHTML = PROJECTS.map(cardHTML).join('');
  $$('.portfolio-card', grid).forEach(card => {
    card.classList.add('visible');
    card.addEventListener('click', () => openLightbox(+card.dataset.id));
  });
  applyFilter(activeFilter);
}

function applyFilter(filter) {
  activeFilter = filter;
  let visible = 0;
  $$('.portfolio-card').forEach(card => {
    const match = filter === 'all' || card.dataset.cats.split(' ').includes(filter);
    card.classList.toggle('hide', !match);
    if (match) visible++;
  });
  $('#portfolioEmpty').hidden = visible > 0;
}

function initPortfolio() {
  renderPortfolio();
  $('#filterBar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
}

/* ---------- LIGHTBOX ---------- */
function visibleProjects() {
  return PROJECTS.filter(p => activeFilter === 'all' || p.category.includes(activeFilter));
}

function openLightbox(id) {
  const list = visibleProjects();
  lightboxIndex = Math.max(0, list.findIndex(p => p.id === id));
  paintLightbox(list);
  $('#lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
}

function paintLightbox(list) {
  const p = list[lightboxIndex];
  if (!p) return;
  const visual = $('#lbVisual');
  visual.style.backgroundColor = p.image ? '#0f1b2d' : 'transparent';
  visual.style.background = p.image ? `#0f1b2d url('${p.image}') center/cover no-repeat` : p.color;
  visual.innerHTML = p.image ? '' : `<span class="glyph">${p.glyph}</span>`;
  $('#lbTag').textContent = p.category.map(c => CAT_LABEL[c] || c.toUpperCase()).join(' · ');
  $('#lbTitle').textContent = p.title;
  $('#lbDesc').textContent = p.desc;
  $('#lbMeta').innerHTML = p.meta.map(m => `<span>${m}</span>`).join('') +
    `<span>${lightboxIndex + 1} / ${list.length}</span>`;
}

function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
}

function stepLightbox(dir) {
  const list = visibleProjects();
  lightboxIndex = (lightboxIndex + dir + list.length) % list.length;
  paintLightbox(list);
}

function initLightbox() {
  if (!$('#lightbox')) return;
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', e => { e.stopPropagation(); stepLightbox(-1); });
  $('#lbNext').addEventListener('click', e => { e.stopPropagation(); stepLightbox(1); });
  $('#lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if ($('#lightbox').hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

/* ---------- QUOTE FORM ---------- */
function initForm() {
  const form = $('#quoteForm');
  const success = $('#formSuccess');

  const validators = {
    name: v => v.trim().length >= 2 || 'Please enter your name',
    phone: v => /^[+\d][\d\s-]{7,15}$/.test(v.trim()) || 'Enter a valid phone number',
    email: v => (!v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) || 'Enter a valid email',
    service: v => v !== '' || 'Please select a service',
    city: v => v.trim().length >= 2 || 'Please enter your city / locality'
  };

  const validateField = input => {
    const rule = validators[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    const errEl = form.querySelector(`.error[data-for="${input.name}"]`);
    const ok = result === true;
    input.classList.toggle('invalid', !ok);
    if (errEl) errEl.textContent = ok ? '' : result;
    return ok;
  };

  Object.keys(validators).forEach(n => {
    const el = form.elements[n];
    if (!el) return;
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      if (el.classList.contains('invalid')) validateField(el);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = Object.keys(validators).map(n => form.elements[n]).filter(Boolean);
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
      form.querySelector('.invalid')?.focus();
      return;
    }

    const btn = $('#submitBtn');
    btn.classList.add('loading');
    btn.textContent = 'Sending...';

    // DEMO: simulates an API call. Replace with fetch() to your backend.
    setTimeout(() => {
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Quote request (demo):', data);

      btn.classList.remove('loading');
      btn.textContent = 'Send Quote Request';
      success.hidden = false;
      form.reset();

      setTimeout(() => { success.hidden = true; }, 6000);
    }, 1200);
  });
}
