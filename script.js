const platformData = [
    {
        name: 'ProMedixEMS™ · EMT-B Core',
        description: 'Live EMT-B curriculum anchoring the EMT/AEMT/Paramedic suite shipping to both app stores in 2026.',
        status: 'App Store + Google Play prep · 2026',
        statusClass: 'status-in-development',
        tags: ['Adaptive learning', 'Instructor dashboards'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Core'
    },
    {
        name: 'ProMedixEMS™ · Flashcards',
        description: 'Adaptive flashcards with spaced repetition and AI-authored distractors for on-shift drilling.',
        status: 'In Development · Internal builds',
        statusClass: 'status-in-development',
        tags: ['Spaced repetition', 'Offline-ready'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Flashcards',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · AEMT',
        description: 'Bridge program with scenario engines and competency tracking for crews leveling up to AEMT.',
        status: 'In Development · Internal builds',
        statusClass: 'status-in-development',
        tags: ['Scenario labs', 'Competency matrix'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20AEMT',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · Paramedic',
        description: 'Capstone coursework with telemetry integrations and preceptor workflows for paramedic candidates.',
        status: 'In Development · Internal builds',
        statusClass: 'status-in-development',
        tags: ['Telemetry-ready', 'Preceptor view'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%20Paramedic',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedixEMS™ · PCR Practice',
        description: 'Standalone documentation lab for rehearsing ePCR workflows with NFC equipment tagging.',
        status: 'In Development · Internal builds',
        statusClass: 'status-in-development',
        tags: ['Tablet-first', 'QA scoring'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=PCR%20Practice',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'ProMedix VoiceNotes™',
        description: 'Hands-free capture with AI summaries evolving into a secure, standalone voice platform.',
        status: 'In Development · Internal builds',
        statusClass: 'status-in-development',
        tags: ['AI summaries', 'Vault storage'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=VoiceNotes',
        ctaLabel: 'Join waitlist'
    },
    {
        name: 'StudyConnect™',
        description: 'Crew coordination and staffing intelligence that pairs EMT availability with dispatch-ready rosters.',
        status: 'In Development',
        statusClass: 'status-in-development',
        tags: ['Scheduling', 'Roster AI'],
        learn: '#',
        demo: 'mailto:tech@webconnect360.com?subject=StudyConnect'
    },
    {
        name: 'StudyConnectPro™',
        description: 'HIPAA-compliant recruiting OS for dental + medical trials with sponsor messaging and coordinator tools.',
        status: 'In Development',
        statusClass: 'status-in-development',
        tags: ['Workflow routing', 'Audit-ready'],
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
