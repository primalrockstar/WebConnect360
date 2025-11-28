document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-ready');

// Registry-driven card system: add back cards one-by-one with registerPlatformCard/registerSpotlightCard.
const cardRegistry = { platforms: [], spotlights: [] };

const registerPlatformCard = (cfg) => { cardRegistry.platforms.push(cfg); return cfg; };
const registerSpotlightCard = (cfg) => { cardRegistry.spotlights.push(cfg); return cfg; };

function renderEmptyState(container, { title, description }) {
  const state = document.createElement('article'); state.className = 'empty-state-card reveal';
  const h = document.createElement('h3'); h.textContent = title;
  const p = document.createElement('p'); p.textContent = description;
  state.append(h, p); container.appendChild(state);
}

function createTagElements(tags = []) {
  const frag = document.createDocumentFragment();
  tags.forEach(t => { const s = document.createElement('span'); s.className = 'tag'; s.textContent = t; frag.appendChild(s); });
  return frag;
}

function renderPlatforms() {
  const grid = document.querySelector('#platform-grid'); if (!grid) return;
  grid.innerHTML = '';
  if (!cardRegistry.platforms.length) {
    renderEmptyState(grid, { title: 'Platform cards coming soon', description: 'Use registerPlatformCard(config) to add cards.' });
    return;
  }
  cardRegistry.platforms.forEach(platform => {
    const card = document.createElement('article'); card.className = 'platform-card reveal';
    const heading = document.createElement('h3'); heading.textContent = platform.name;

    if (platform.brandText || platform.logo) {
      const header = document.createElement('div'); header.className = 'platform-card-header';
      if (platform.logo) { const img = document.createElement('img'); img.src = platform.logo; img.alt = platform.logoAlt || `${platform.name} logo`; img.className = 'platform-card-logo'; img.loading = 'lazy'; header.appendChild(img); }
      if (platform.brandText) { const b = document.createElement('span'); b.className = `platform-brand${platform.brandVariant ? ` platform-brand--${platform.brandVariant}` : ''}`.trim(); b.textContent = platform.brandText; header.appendChild(b); }
      const titleWrap = document.createElement('div'); titleWrap.className = 'platform-card-title'; titleWrap.appendChild(heading); header.appendChild(titleWrap); card.appendChild(header);
    } else { card.appendChild(heading); }

    if (platform.media && platform.media.src) { const m = document.createElement('img'); m.src = platform.media.src; m.alt = platform.media.alt || `${platform.name} showcase`; m.className = 'platform-card-media'; m.loading = 'lazy'; card.appendChild(m); }

    const desc = document.createElement('p'); desc.textContent = platform.description;
    const badge = document.createElement('span'); badge.className = `status-badge ${platform.statusClass}`; badge.textContent = platform.status;
    const tagRow = document.createElement('div'); tagRow.className = 'platform-card-tags'; tagRow.appendChild(createTagElements(platform.tags || []));

    const actions = document.createElement('div'); actions.className = 'card-actions';
    const learn = document.createElement('a'); learn.href = platform.learn || '#contact'; learn.className = 'btn ghost'; learn.textContent = 'Learn more'; learn.setAttribute('aria-label', `Learn more about ${platform.name}`);
    const demo = document.createElement('a'); demo.href = platform.demo || 'mailto:tech@webconnect360.com'; demo.className = 'btn primary'; demo.textContent = platform.ctaLabel || 'Request demo'; demo.setAttribute('aria-label', `${demo.textContent} for ${platform.name}`);
    actions.append(learn, demo);

    card.append(desc, badge, tagRow, actions);
    grid.appendChild(card);
  });
}

function renderSpotlights() {
  const grid = document.querySelector('#spotlight-grid'); if (!grid) return; grid.innerHTML = '';
  if (!cardRegistry.spotlights.length) { renderEmptyState(grid, { title: 'Spotlights coming soon', description: 'Use registerSpotlightCard(config) to add cards.' }); return; }
  cardRegistry.spotlights.forEach((spotlight, idx) => {
    const card = document.createElement('article'); card.className = 'spotlight-card reveal'; if (spotlight.accent) card.style.setProperty('--spotlight-accent', spotlight.accent); card.style.setProperty('--spotlight-index', idx);
    const content = document.createElement('div'); content.className = 'spotlight-content';
    const emblem = document.createElement('div'); emblem.className = 'spotlight-emblem'; emblem.textContent = spotlight.brand; content.appendChild(emblem);
    const badges = document.createElement('div'); badges.className = 'spotlight-badges'; const suite = document.createElement('span'); suite.className = 'spotlight-badge'; suite.textContent = spotlight.suite || 'WebConnect360'; badges.appendChild(suite);
    if (spotlight.status) { const s = document.createElement('span'); s.className = 'spotlight-status'; s.textContent = spotlight.status; badges.appendChild(s); }
    const brand = document.createElement('h3'); brand.textContent = spotlight.brand; const tagline = document.createElement('p'); tagline.className = 'spotlight-tagline'; tagline.textContent = spotlight.tagline; const desc = document.createElement('p'); desc.className = 'spotlight-description'; desc.textContent = spotlight.description;
    const hl = document.createElement('ul'); hl.className = 'spotlight-highlights'; (spotlight.highlights || []).forEach(p => { const li = document.createElement('li'); li.textContent = p; hl.appendChild(li); });
    const cta = document.createElement('a'); cta.href = spotlight.ctaHref || '#contact'; cta.className = 'btn primary'; cta.textContent = spotlight.ctaLabel || 'Request access'; cta.setAttribute('aria-label', `${cta.textContent} for ${spotlight.brand}`);
    content.append(badges, brand, tagline, desc, hl, cta); card.append(content); grid.appendChild(card);
  });
}

function setupSmoothScroll() { document.querySelectorAll('[data-scroll]').forEach(link => { link.addEventListener('click', (e) => { const target = link.getAttribute('href'); if (target && target.startsWith('#')) { e.preventDefault(); const el = document.querySelector(target); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); }); }

function initRevealObserver() {
  const elems = document.querySelectorAll('.reveal'); if (!elems.length) return; if (!('IntersectionObserver' in window)) { elems.forEach(el => el.classList.add('visible')); return; }
  const obs = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); } }); }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }); elems.forEach(el => obs.observe(el));
}

// Default platform lineup focused on app-store releases; add/remove with registerPlatformCard for rebuild workflow.
const platformLineup = [
  {
    name: 'ProMedixEMS™ · EMT-B Core',
    description: 'Flagship EMS readiness OS packaged for App Store & Google Play with TestFlight + Play Console builds and HIPAA runbooks.',
    status: 'PACKAGING · APP STORE + GOOGLE PLAY',
    statusClass: 'status-coming',
    tags: ['TestFlight', 'HIPAA-ready'],
    brandText: 'ProMedixEMS', brandVariant: 'promedix', learn: '#contact', demo: 'mailto:tech@webconnect360.com?subject=EMT-B%20Core%20Preview', ctaLabel: 'Request TestFlight'
  },
  {
    name: 'ChapterFlashEMT™',
    description: 'Spaced repetition OS for EMT cohorts — adaptive decks, sync, and analytics. Beta builds in QA.',
    status: 'BETA · DUAL-STORE', statusClass: 'status-in-development', tags: ['Spacing AI','Beta'], brandText: 'ChapterFlashEMT™', brandVariant: 'chapterflash', learn: 'learn-more.html', demo: 'mailto:tech@webconnect360.com?subject=ChapterFlash%20Beta', ctaLabel: 'Join beta'
  },
  {
    name: 'ProMedixEMS™ · PCR Trainer',
    description: 'High-fidelity patient care reporting simulation. Master NEMSIS-compliant documentation workflows before clinical rotations.',
    status: 'IN DEVELOPMENT', statusClass: 'status-prototype', tags: ['NEMSIS-ready', 'Documentation'], brandText: 'ProMedixEMS', brandVariant: 'promedix', learn: '#contact', demo: 'mailto:tech@webconnect360.com?subject=PCR%20Trainer%20Preview', ctaLabel: 'Request preview'
  },
  {
    name: 'Guardian Clinical Research Management (GCRM)',
    description: 'Browser-based control plane for eligibility automation and sponsor dashboards — pilot ready (not a mobile app).', status: 'BROWSER · PILOT READY', statusClass: 'status-live', tags: ['Eligibility','Consent'], brandText: 'GCRM', brandVariant: 'gcrm', logo: 'public/images/GCRM2.jpeg', logoAlt: 'GCRM', learn: 'gcrm-learn-more.html', demo: 'mailto:tech@webconnect360.com?subject=GCRM%20Request', ctaLabel: 'Request walkthrough'
  }
];

// Rebuilding complete lineup:
platformLineup.forEach(registerPlatformCard);

const productSpotlights = [
  { id: 'chapterflash', brand: 'ChapterFlashEMT™', suite: 'ProMedixEMS™', tagline: 'Spaced repetition OS for EMT cohorts.', description: 'Spacing AI personalizes deck order and syncs progress across crews.', highlights: ['Spacing AI','Mobile stacks'], status: 'Beta', accent: '#f64f59', ctaLabel: 'Learn more', ctaHref: 'learn-more.html' },
  { id: 'promedix-emtb', brand: 'ProMedixEMS™ · EMT-B Core', suite: 'ProMedixEMS™', tagline: 'Crew readiness dashboard', description: 'Readiness streaks, remediation queues, and instructor workflows.', highlights: ['Readiness dashboards'], status: 'Packaging', accent: '#4ecdc4', ctaLabel: 'Request demo', ctaHref: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20EMT-B%20Request' }
];

// Rebuilding complete spotlight lineup:
productSpotlights.forEach(registerSpotlightCard);

document.addEventListener('DOMContentLoaded', () => {
  renderPlatforms();
  renderSpotlights();
  setupSmoothScroll();
  initRevealObserver();
});

