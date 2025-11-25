document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-ready');

const moodboardShots = [
    {
        tag: 'ProMedixEMS™',
        category: 'Ops kit',
        title: 'Crew readiness boards',
        caption: 'Readiness streaks, remediation queues, and board-ready exports help coordinators keep every EMT cohort inspection-ready.',
        accent: '#4ecdc4'
    },
    {
        tag: 'MedicationsX™',
        category: 'Pharma companion',
        title: 'Formulary copilots',
        caption: 'Level-specific dosing rails surface contraindications, math helpers, and search so med checks take seconds instead of minutes.',
        accent: '#48c6ef'
    },
    {
        tag: 'RhythmLabEMS™',
        category: 'Learning lab',
        title: 'Waveform mechanics',
        caption: 'Adaptive ECG drills, annotations, and streak lines coach pattern recognition faster than static textbooks.',
        accent: '#ffd200'
    },
    {
        tag: 'VoiceNotesEMS™',
        category: 'Voice ops',
        title: 'Voice capture rails',
        caption: 'Hands-free capture turns chaotic on-scene dictation into auditable summaries, vault storage, and instructor-ready transcripts.',
        accent: '#a78bfa'
    },
    {
        tag: 'PCRWriterEMS™',
        category: 'Documentation studio',
        title: 'Scenario documentation',
        caption: 'Scenario-based ePCR rehearsals use NFC tags, QA scoring, and annotated checklists to harden documentation habits.',
        accent: '#f472b6'
    }
];

const productSpotlights = [
    {
        id: 'chapterflash',
        brand: 'ChapterFlashEMT™',
        suite: 'ProMedixEMS™',
        tagline: 'Spaced repetition OS for EMT cohorts.',
        description: 'Spacing AI personalizes deck order, heatmaps distractors, and syncs progress across crews in seconds.',
        highlights: ['Spacing AI + mastery meters', 'Mobile + tablet deck stacks', 'Instructor analytics + alerts'],
        status: 'In development · 2026',
        accent: '#f64f59',
        ctaLabel: 'Learn more',
        ctaHref: 'learn-more.html'
    },
    {
        id: 'medicationsx',
        brand: 'MedicationsX™',
        suite: 'ProMedixEMS™',
        tagline: 'Pharmacology companion with interaction intelligence.',
        description: 'Level-specific formularies, contraindication callouts, and medication math rails collapse frantic reference checks into one swipe.',
        highlights: ['Contraindication engine', 'Offline-ready dosing cards', 'Rapid formulary search'],
        status: 'In development · 2026',
        accent: '#48c6ef',
        ctaLabel: 'Join waitlist',
        ctaHref: 'mailto:tech@webconnect360.com?subject=MedicationsX%20Waitlist&body=Hello%20Shaun%2C%0A%0APlease%20add%20me%20to%20MedicationsX.%0A%0AThank%20you!'
    },
    {
        id: 'rhythmlab',
        brand: 'RhythmLabEMS™',
        suite: 'ProMedixEMS™',
        tagline: 'Adaptive rhythm trainer with mastery tracks.',
        description: 'Clean waveform canvases, adaptive quizzing, and annotations teach recognition faster than static textbooks.',
        highlights: ['Adaptive ECG quizzes', 'Waveform annotation tools', 'Instructor progression tracking'],
        status: 'In development · 2026',
        accent: '#ffd200',
        ctaLabel: 'Join waitlist',
        ctaHref: 'mailto:tech@webconnect360.com?subject=RhythmLab%20Waitlist&body=Hello%20Shaun%2C%0A%0AAdd%20me%20to%20the%20RhythmLab%20waitlist.%0A%0AThank%20you!'
    },
    {
        id: 'promedix-emtb',
        brand: 'ProMedixEMS™ · EMT-B Core',
        suite: 'ProMedixEMS™',
        tagline: 'Crew readiness dashboard + immersive skills labs.',
        description: 'Readiness streaks, remediation queues, and high-fidelity labs keep EMT-B cohorts on track for certification.',
        highlights: ['Readiness + remediation dashboards', 'Scenario lab library', 'Instructor + cohort messaging'],
        status: 'App Store + Google Play · 2026',
        accent: '#4ecdc4',
        ctaLabel: 'Request demo',
        ctaHref: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20EMT-B%20Request&body=Hello%20Shaun%2C%0A%0ARequesting%20an%20EMT-B%20preview.%0A%0AThank%20you!'
    }
];

const platformData = [
    {
        name: 'ProMedixEMS™ · EMT-B Core',
        description: 'Covers full EMT-B competency: assessment, BLS skills, oxygen therapy, fundamentals of pharmacology, and realistic entry-level scenarios. Anchors the entire EMT/AEMT/Paramedic suite releasing to both stores in 2026.',
        status: 'APP STORE + GOOGLE PLAY · 2026',
        statusClass: 'status-coming',
        tags: ['Adaptive learning paths', 'Instructor & cohort dashboards'],
        brandText: 'ProMedixEMS',
        brandVariant: 'promedix',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Core'
    },
    {
        name: 'ProMedixEMS™ · AEMT',
        description: 'Covers IV/IO access, fluid therapy, intermediate pharmacology, airway adjuncts, and scenario-based decision-making designed for crews advancing into advanced practice.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['Scenario labs', 'Competency matrix tracking'],
        brandText: 'ProMedixEMS',
        brandVariant: 'promedix',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20AEMT',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · Paramedic',
        description: 'Includes 12-lead ECG interpretation, advanced airways, ALS medications, infusion management, and high-stakes scenarios that support paramedic candidates through capstone and preceptor workflows.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['Telemetry-ready modules', 'Preceptor tools & ALS algorithms'],
        brandText: 'ProMedixEMS',
        brandVariant: 'promedix',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Paramedic',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ChapterFlashEMT™',
        description: 'A next-generation flashcard system built for EMS mastery with spaced repetition, smart distractors, custom decks, and deep integration with the ProMedixEMS curriculum.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Spaced repetition system', 'Custom decks & sync'],
        brandText: 'ChapterFlashEMT™',
        brandVariant: 'chapterflash',
        learn: 'learn-more.html',
        demo: 'mailto:tech@webconnect360.com?subject=ChapterFlash%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'PCRWriterEMS™',
        description: 'Scenario-based ePCR rehearsals let EMTs and AEMTs document mock calls with NFC equipment tagging, QA scoring, and annotated feedback so paperwork stays sharp between shifts.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['Tablet-first ePCR studio', 'QA scoring & feedback'],
        brandText: 'PCRWriterEMS™',
        brandVariant: 'pcrwriter',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=PCRWriterEMS',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'VoiceNotesEMS™',
        description: 'Hands-free capture with AI summaries evolving into a secure, standalone voice platform that syncs to PCRWriterEMS and crew ops dashboards.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['AI summaries', 'Vault storage'],
        brandText: 'VoiceNotesEMS™',
        brandVariant: 'voicenotes',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=VoiceNotesEMS',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'MedicationsX™',
        description: 'A complete EMS pharmacology companion with level-specific formularies, OTC interaction alerts, contraindication intelligence, and a smart medication-math engine.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Level-specific EMS formularies', 'Interaction & contraindication engine'],
        brandText: 'MedicationsX™',
        brandVariant: 'medicationsx',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=MedicationsX%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'RhythmLabEMS™',
        description: 'A modern, high-clarity rhythm trainer that teaches recognition, patterns, and clinical significance through clean visuals, adaptive quizzing, and progressive difficulty.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Rhythm recognition engine', 'Adaptive ECG drills'],
        brandText: 'RhythmLabEMS™',
        brandVariant: 'rhythm',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=RhythmLabEMS%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ScenarioLabEMS™',
        description: 'EMT-B-only scenario lab with dispatch-to-handoff case files, two-minute drills, full call sims, and study/exam modes that stay 100% BLS compliant.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Branching EMT-B cases', 'Scoring + debrief engine'],
        brandText: 'ScenarioLabEMS™',
        brandVariant: 'scenariolab',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ScenarioLabEMS',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'Guardian Clinical Research Management (GCRM)',
        description: 'Guardian Clinical Research Management (GCRM) is a HIPAA-ready research management and study operations platform. WebConnect360 designs and demos GCRM alongside the ProMedixEMS suite.',
        status: 'PRODUCTION READY · LIVE DEMOS',
        statusClass: 'status-live',
        tags: ['Workflow routing engine', 'Audit-ready infrastructure', 'Eligibility & consent'],
        brandText: 'Guardian Clinical Research Management',
        brandVariant: 'gcrm',
        logo: 'public/images/GCRM.png',
        logoAlt: 'GCRM logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=GCRM%20Request'
    }
];

function createTagElements(tags = []) {
    const fragment = document.createDocumentFragment();
    tags.forEach((tag) => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        fragment.appendChild(span);
    });
    return fragment;
}

function renderPlatforms() {
    const grid = document.querySelector('#platform-grid');
    if (!grid) return;

    grid.innerHTML = '';

    platformData.forEach((platform) => {
        const card = document.createElement('article');
        card.className = 'platform-card reveal';

    const heading = document.createElement('h3');
    heading.textContent = platform.name;

        let headerRendered = false;
        if (platform.brandText || platform.logo) {
            const header = document.createElement('div');
            header.className = 'platform-card-header';

            if (platform.logo) {
                const logo = document.createElement('img');
                logo.src = platform.logo;
                logo.alt = platform.logoAlt || `${platform.name} logo`;
                logo.className = 'platform-card-logo';
                logo.loading = 'lazy';
                header.appendChild(logo);
            }

            if (platform.brandText) {
                const brand = document.createElement('span');
                const variant = platform.brandVariant ? ` platform-brand--${platform.brandVariant}` : '';
                brand.className = `platform-brand${variant}`.trim();
                brand.textContent = platform.brandText;
                header.appendChild(brand);
            }

            const titleWrap = document.createElement('div');
            titleWrap.className = 'platform-card-title';
            titleWrap.appendChild(heading);

            header.appendChild(titleWrap);
            card.appendChild(header);
            headerRendered = true;
        }

        if (!headerRendered) {
            card.appendChild(heading);
        }

        if (platform.media && platform.media.src) {
            const media = document.createElement('img');
            media.src = platform.media.src;
            media.alt = platform.media.alt || `${platform.name} showcase`;
            media.className = 'platform-card-media';
            media.loading = 'lazy';
            card.appendChild(media);
        }

        const desc = document.createElement('p');
        desc.textContent = platform.description;

        const badge = document.createElement('span');
        badge.className = `status-badge ${platform.statusClass}`;
        badge.textContent = platform.status;

        const tagRow = document.createElement('div');
        tagRow.className = 'platform-card-tags';
        tagRow.appendChild(createTagElements(platform.tags));

        const actions = document.createElement('div');
        actions.className = 'card-actions';

        const learnMore = document.createElement('a');
        learnMore.href = platform.learn;
        learnMore.className = 'btn ghost';
        learnMore.textContent = 'Learn more';
        learnMore.setAttribute('aria-label', `Learn more about ${platform.name}`);

        const requestDemo = document.createElement('a');
        requestDemo.href = platform.demo;
        requestDemo.className = 'btn primary';
        requestDemo.textContent = platform.ctaLabel || 'Request demo';
        requestDemo.setAttribute('aria-label', `${requestDemo.textContent} for ${platform.name}`);

        actions.append(learnMore, requestDemo);

        card.append(desc, badge, tagRow, actions);
        grid.appendChild(card);
    });
}

function renderMoodboard() {
    const grid = document.querySelector('#moodboard-grid');
    if (!grid) return;

    grid.innerHTML = '';

    moodboardShots.forEach((shot, index) => {
        const card = document.createElement('article');
        card.className = 'mood-card reveal';
        if (shot.accent) {
            card.style.setProperty('--mood-accent', shot.accent);
        }

        const body = document.createElement('div');
        body.className = 'mood-card-body';

        const tag = document.createElement('span');
        tag.className = 'mood-tag';
        tag.textContent = shot.tag || 'Prototype';

        const category = document.createElement('span');
        category.className = 'mood-category';
        category.textContent = shot.category || 'Concept';

        const title = document.createElement('h3');
        title.textContent = shot.title;

        const caption = document.createElement('p');
        caption.textContent = shot.caption;

        const sparkline = document.createElement('span');
        sparkline.className = 'mood-card-sparkline';
        sparkline.style.setProperty('--spark-seed', index);

        body.append(tag, category, title, caption);
        card.append(body, sparkline);
        grid.appendChild(card);
    });
}

function renderSpotlights() {
    const grid = document.querySelector('#spotlight-grid');
    if (!grid) return;

    grid.innerHTML = '';

    productSpotlights.forEach((spotlight, index) => {
        const card = document.createElement('article');
        card.className = 'spotlight-card reveal';
        if (spotlight.accent) {
            card.style.setProperty('--spotlight-accent', spotlight.accent);
        }
        card.style.setProperty('--spotlight-index', index);

        const content = document.createElement('div');
        content.className = 'spotlight-content';

    const emblem = document.createElement('div');
    emblem.className = 'spotlight-emblem';
    emblem.textContent = spotlight.brand;
    content.appendChild(emblem);

        const badges = document.createElement('div');
        badges.className = 'spotlight-badges';

        const suite = document.createElement('span');
        suite.className = 'spotlight-badge';
        suite.textContent = spotlight.suite || 'WebConnect360';
        badges.appendChild(suite);

        if (spotlight.status) {
            const status = document.createElement('span');
            status.className = 'spotlight-status';
            status.textContent = spotlight.status;
            badges.appendChild(status);
        }

        const brand = document.createElement('h3');
        brand.textContent = spotlight.brand;

        const tagline = document.createElement('p');
        tagline.className = 'spotlight-tagline';
        tagline.textContent = spotlight.tagline;

        const description = document.createElement('p');
        description.className = 'spotlight-description';
        description.textContent = spotlight.description;

        const highlightList = document.createElement('ul');
        highlightList.className = 'spotlight-highlights';
        (spotlight.highlights || []).forEach((point) => {
            const li = document.createElement('li');
            li.textContent = point;
            highlightList.appendChild(li);
        });

        const cta = document.createElement('a');
        cta.href = spotlight.ctaHref || '#contact';
        cta.className = 'btn primary';
        cta.textContent = spotlight.ctaLabel || 'Request access';
        cta.setAttribute('aria-label', `${cta.textContent} for ${spotlight.brand}`);

        content.append(badges, brand, tagline, description, highlightList, cta);
        card.append(content);
        grid.appendChild(card);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('[data-scroll]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

function initRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    revealElements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlatforms();
    renderSpotlights();
    renderMoodboard();
    setupSmoothScroll();
    initRevealObserver();
});
