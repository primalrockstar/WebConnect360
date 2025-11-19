const platformData = [
    {
        name: 'ProMedixEMS™ · EMT-B Core',
        description: 'Covers full EMT-B competency: assessment, BLS skills, oxygen therapy, fundamentals of pharmacology, and realistic entry-level scenarios. Anchors the entire EMT/AEMT/Paramedic suite releasing to both stores in 2026.',
        status: 'APP STORE + GOOGLE PLAY · 2026',
        statusClass: 'status-coming',
        tags: ['Adaptive learning paths', 'Instructor & cohort dashboards'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Core'
    },
    {
        name: '⚡ FlashLearn™',
        description: 'A next-generation flashcard system built for EMS mastery with spaced repetition, smart distractors, custom decks, and deep integration with the ProMedixEMS curriculum.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Spaced repetition system', 'Custom decks & sync'],
        logo: 'public/logos/flashlearn.svg',
        logoAlt: 'FlashLearn logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=FlashLearn%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'MedicationsX™',
        description: 'A complete EMS pharmacology companion with level-specific formularies, OTC interaction alerts, contraindication intelligence, and a smart medication-math engine.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Level-specific EMS formularies', 'Interaction & contraindication engine'],
        logo: 'public/logos/medicationsx.svg',
        logoAlt: 'MedicationsX logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=MedicationsX%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: '📈 RhythmLab™',
        description: 'A modern, high-clarity rhythm trainer that teaches recognition, patterns, and clinical significance through clean visuals, adaptive quizzing, and progressive difficulty.',
        status: 'IN DEVELOPMENT · APP STORE + GOOGLE PLAY 2026',
        statusClass: 'status-in-development',
        tags: ['Rhythm recognition engine', 'Adaptive ECG drills'],
        logo: 'public/logos/rhythmlab.svg',
        logoAlt: 'RhythmLab logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=RhythmLab%20Waitlist',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · AEMT',
        description: 'Covers IV/IO access, fluid therapy, intermediate pharmacology, airway adjuncts, and scenario-based decision-making designed for crews advancing into advanced practice.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['Scenario labs', 'Competency matrix tracking'],
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
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Paramedic',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · PCR Practice',
        description: 'Standalone documentation lab for rehearsing ePCR workflows with NFC equipment tagging.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['Tablet-first', 'QA scoring'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=PCR%20Practice',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedix VoiceNotes™',
        description: 'Hands-free capture with AI summaries evolving into a secure, standalone voice platform.',
        status: 'IN DEVELOPMENT · INTERNAL BUILDS',
        statusClass: 'status-in-development',
        tags: ['AI summaries', 'Vault storage'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=VoiceNotes',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'StudyConnect™',
        description: 'Frictionless pre-screening across any clinical, research, or operational workflow. 60-second interest capture without PHI, automatically routing qualified participants or leads into secure pipelines.',
        status: 'PRODUCTION READY · LIVE DEMOS',
        statusClass: 'status-live',
        tags: ['Smart scheduling', 'Roster & lead intelligence'],
        logo: 'public/logos/StudyConnectlogo.png',
        logoAlt: 'StudyConnect logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=StudyConnect'
    },
    {
        name: 'StudyConnectPro™',
        description: 'A HIPAA-compliant backend for research coordinators, clinics, and enterprise programs. Automates eligibility scoring, consent workflows, PHI handling, messaging, and audit logs across medical, dental, and general research operations.',
        status: 'PRODUCTION READY · LIVE DEMOS',
        statusClass: 'status-live',
        tags: ['Workflow routing engine', 'Audit-ready infrastructure'],
        logo: 'public/logos/StudyConnectPrologo.png',
        logoAlt: 'StudyConnectPro logo',
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=StudyConnectPro'
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

        if (platform.logo) {
            const header = document.createElement('div');
            header.className = 'platform-card-header';

            const logo = document.createElement('img');
            logo.src = platform.logo;
            logo.alt = platform.logoAlt || `${platform.name} logo`;
            logo.className = 'platform-card-logo';
            logo.loading = 'lazy';

            const titleWrap = document.createElement('div');
            titleWrap.className = 'platform-card-title';
            titleWrap.appendChild(heading);

            header.append(logo, titleWrap);
            card.appendChild(header);
        } else {
            card.appendChild(heading);
        }

        const desc = document.createElement('p');
        desc.textContent = platform.description;

        const badge = document.createElement('span');
        badge.className = `status-badge ${platform.statusClass}`;
        badge.textContent = platform.status;

        const tagRow = document.createElement('div');
        tagRow.className = 'tag-row';
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
        card.append(heading, desc, badge, tagRow, actions);
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
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlatforms();
    setupSmoothScroll();
    initRevealObserver();
});
