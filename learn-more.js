document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-ready');

const flashlearnShots = [
    {
        src: 'public/images/1000036904.png',
        alt: 'FlashLearnEMS Choose Your Study Mode interface',
        tag: 'STUDY PLANNER',
        title: 'Choose your study mode',
        caption: 'Select a study mode that matches your learning goals and available time. Each mode is optimized for different practice styles and retention windows.',
        sections: [
            {
                heading: 'Custom Drill',
                summary: 'Select specific chapters to focus your study session.',
                points: [
                    'Flexible',
                    'Custom',
                    'Target specific chapters',
                    'Focus on weak areas',
                    'Unlimited duration',
                    'Configure Drill'
                ]
            },
            {
                heading: 'Quick Drill',
                summary: 'Fast-paced review session for rapid retention checks.',
                points: [
                    '5–10 minutes',
                    '10 cards',
                    'Rapid fire questions',
                    'Perfect for breaks',
                    'Basic concepts focus',
                    'Start Quick Drill'
                ]
            },
            {
                heading: 'Deep Session',
                summary: 'Comprehensive study block driven by spaced repetition.',
                points: [
                    '20–30 minutes',
                    '25 cards',
                    'Spaced repetition',
                    'Weak area targeting',
                    'All difficulty levels',
                    'Start Deep Session'
                ]
            },
            {
                heading: 'Exam Mimic',
                summary: 'Full practice test simulation with realistic timing.',
                points: [
                    '45–60 minutes',
                    '50 cards',
                    'Exam conditions',
                    'Comprehensive coverage',
                    'Performance analytics',
                    'Start Exam Mimic'
                ]
            },
            {
                heading: 'Test Mode',
                summary: 'Intensive 250-card session drawn randomly from all chapters.',
                points: [
                    '120+ minutes',
                    '250 cards',
                    'Massive review',
                    'Random selection',
                    'Endurance training',
                    'Start Test Mode'
                ]
            }
        ]
    },
    {
        src: 'public/images/1000036918.png',
        alt: 'FlashLearnEMS EMT-B chapter library interface',
        tag: 'EMT-B CONTENT',
        title: 'EMT-B study content',
    caption: 'Explore the full set of EMT-B study materials organized by chapter, complexity, and track so you can drop directly into the content you need.',
    chapterSummary: 'Showing 56 of 56 chapters',
        chapters: [
            {
                level: 'Basic',
                title: 'Chapter 1: EMS System Fundamentals',
                description: 'Essential EMS systems, professional responsibilities, and communication principles.',
                cards: '15 cards',
                time: '10 min',
                track: 'Foundations of EMS Practice'
            },
            {
                level: 'Basic',
                title: 'Chapter 2: Responder Safety & Resilience',
                description: 'Personal protection, wellness strategies, stress management, and scene safety.',
                cards: '15 cards',
                time: '10 min',
                track: 'Foundations of EMS Practice'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 3: EMS Law & Ethical Practice',
                description: 'Scope of practice, consent, confidentiality, and legal considerations.',
                cards: '15 cards',
                time: '12 min',
                track: 'Foundations of EMS Practice'
            },
            {
                level: 'Basic',
                title: 'Chapter 4: Emergency Communication Protocols',
                description: 'Radio communications, verbal reports, and patient care documentation.',
                cards: '15 cards',
                time: '10 min',
                track: 'Foundations of EMS Practice'
            },
            {
                level: 'Basic',
                title: 'Chapter 5: Medical Language for Responders',
                description: 'Medical terminology, anatomy, patient movement, and interdisciplinary teamwork.',
                cards: '15 cards',
                time: '12 min',
                track: 'Clinical Foundations'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 6: Anatomy for Emergency Care',
                description: 'Body structure, function, and organ systems overview.',
                cards: '15 cards',
                time: '15 min',
                track: 'Clinical Foundations'
            },
            {
                level: 'Basic',
                title: 'Chapter 7: Developmental Considerations in EMS',
                description: 'Physical and psychological development considerations across lifespans.',
                cards: '15 cards',
                time: '10 min',
                track: 'Clinical Foundations'
            },
            {
                level: 'Basic',
                title: 'Chapter 8: Patient Movement & Handling',
                description: 'Safe lifting techniques and patient transfer protocols.',
                cards: '15 cards',
                time: '10 min',
                track: 'Clinical Foundations'
            },
            {
                level: 'Basic',
                title: 'Chapter 9: Interprofessional EMS Teams',
                description: 'Team dynamics and interdisciplinary collaboration.',
                cards: '15 cards',
                time: '8 min',
                track: 'Clinical Foundations'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 10: Comprehensive Patient Evaluation',
                description: 'Full-spectrum primary, secondary, and ongoing assessments.',
                cards: '15 cards',
                time: '15 min',
                track: 'Patient Assessment Mastery'
            },
            {
                level: 'Advanced',
                title: 'Chapter 11: Advanced Airway Interventions',
                description: 'Airway interventions, oxygenation strategies, and ventilation support.',
                cards: '15 cards',
                time: '15 min',
                track: 'Airway & Ventilatory Management'
            },
            {
                level: 'Advanced',
                title: 'Chapter 12: Medication Administration Standards',
                description: 'Medication profiles, administration safety, and dosage considerations.',
                cards: '15 cards',
                time: '15 min',
                track: 'Pharmacology for EMT-B'
            },
            {
                level: 'Advanced',
                title: 'Chapter 13: Shock Recognition & Management',
                description: 'Recognising and managing perfusion emergencies.',
                cards: '15 cards',
                time: '15 min',
                track: 'Shock & Circulatory Management'
            },
            {
                level: 'Basic',
                title: 'Chapter 14: BLS Life Support Protocols',
                description: 'Life support integration and resuscitation protocols.',
                cards: '15 cards',
                time: '12 min',
                track: 'Shock & Circulatory Management'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 15: Medical Crisis Assessment',
                description: 'Assessment and management of general medical emergencies.',
                cards: '15 cards',
                time: '15 min',
                track: 'Medical Emergency Response'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 16: Respiratory Emergency Protocols',
                description: 'Management of respiratory distress and failure.',
                cards: '15 cards',
                time: '15 min',
                track: 'Medical Emergency Response'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 17: Cardiovascular Emergency Management',
                description: 'Management of cardiac conditions and emergencies.',
                cards: '15 cards',
                time: '18 min',
                track: 'Medical Emergency Response'
            },
            {
                level: 'Advanced',
                title: 'Chapter 18: Neurological Crisis Intervention',
                description: 'Critical neurology assessment and management.',
                cards: '15 cards',
                time: '16 min',
                track: 'Neurologic & Systemic Emergencies'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 19: Abdominal Emergency Protocols',
                description: 'Assessment and care for abdominal emergencies.',
                cards: '15 cards',
                time: '14 min',
                track: 'Neurologic & Systemic Emergencies'
            },
            {
                level: 'Advanced',
                title: 'Chapter 20: Metabolic & Hematologic Emergencies',
                description: 'Diabetic, metabolic, and blood-related emergencies.',
                cards: '15 cards',
                time: '15 min',
                track: 'Neurologic & Systemic Emergencies'
            },
            {
                level: 'Advanced',
                title: 'Chapter 21: Allergic & Anaphylactic Response',
                description: 'Recognition and treatment of allergic reactions.',
                cards: '15 cards',
                time: '14 min',
                track: 'Specialized Emergency Care'
            },
            {
                level: 'Advanced',
                title: 'Chapter 22: Toxicological Emergencies',
                description: 'Management of poisoning and overdose.',
                cards: '15 cards',
                time: '15 min',
                track: 'Specialized Emergency Care'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 23: Behavioral Crisis Protocols',
                description: 'Management of behavioral and psychiatric emergencies.',
                cards: '15 cards',
                time: '14 min',
                track: 'Specialized Emergency Care'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 24: Gynecological Emergency Care',
                description: 'Assessment and management of gynecological emergencies.',
                cards: '15 cards',
                time: '12 min',
                track: 'Specialized Emergency Care'
            },
            {
                level: 'Basic',
                title: 'Chapter 25: Trauma System Fundamentals',
                description: 'Trauma systems and mechanism of injury analysis.',
                cards: '15 cards',
                time: '12 min',
                track: 'Trauma Response Principles'
            },
            {
                level: 'Advanced',
                title: 'Chapter 26: Hemorrhage Control Techniques',
                description: 'Management of external and internal bleeding.',
                cards: '15 cards',
                time: '14 min',
                track: 'Trauma Response Principles'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 27: Soft Tissue Trauma Management',
                description: 'Care for soft tissue injuries and burns.',
                cards: '15 cards',
                time: '14 min',
                track: 'Trauma Response Principles'
            },
            {
                level: 'Advanced',
                title: 'Chapter 28: Craniofacial Trauma Response',
                description: 'Management of head and face injuries.',
                cards: '15 cards',
                time: '16 min',
                track: 'Traumatic Injury Management'
            },
            {
                level: 'Advanced',
                title: 'Chapter 29: Spinal Trauma Protocols',
                description: 'Spinal immobilization and injury management.',
                cards: '15 cards',
                time: '18 min',
                track: 'Traumatic Injury Management'
            },
            {
                level: 'Advanced',
                title: 'Chapter 30: Thoracic Injury Interventions',
                description: 'Management of chest trauma.',
                cards: '15 cards',
                time: '18 min',
                track: 'Traumatic Injury Management'
            },
            {
                level: 'Advanced',
                title: 'Chapter 31: Abdominal & GU Trauma Essentials',
                description: 'Management of abdominal and genitourinary trauma.',
                cards: '15 cards',
                time: '16 min',
                track: 'Environmental & Musculoskeletal Emergencies'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 32: Orthopedic Injury Management',
                description: 'Care for fractures, dislocations, and musculoskeletal injuries.',
                cards: '15 cards',
                time: '14 min',
                track: 'Environmental & Musculoskeletal Emergencies'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 33: Environmental Exposure Protocols',
                description: 'Management of heat, cold, and other environmental emergencies.',
                cards: '15 cards',
                time: '12 min',
                track: 'Environmental & Musculoskeletal Emergencies'
            },
            {
                level: 'Advanced',
                title: 'Chapter 34: Obstetric & Neonatal Emergencies',
                description: 'Emergency childbirth and newborn care.',
                cards: '15 cards',
                time: '18 min',
                track: 'Special Patient Populations'
            },
            {
                level: 'Advanced',
                title: 'Chapter 35: Pediatric Emergency Response',
                description: 'Assessment and management of pediatric emergencies.',
                cards: '15 cards',
                time: '16 min',
                track: 'Special Patient Populations'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 36: Geriatric Emergency Care',
                description: 'Special considerations for elderly patients.',
                cards: '15 cards',
                time: '14 min',
                track: 'Special Patient Populations'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 37: Patients with Unique Needs',
                description: 'Care for patients with special healthcare needs.',
                cards: '15 cards',
                time: '12 min',
                track: 'Special Patient Populations'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 38: Medical Transport Operations',
                description: 'Ambulance operations and air medical transport.',
                cards: '15 cards',
                time: '14 min',
                track: 'EMS Operations & Disaster Response'
            },
            {
                level: 'Advanced',
                title: 'Chapter 39: Technical Rescue Protocols',
                description: 'Vehicle extrication and special rescue situations.',
                cards: '15 cards',
                time: '16 min',
                track: 'EMS Operations & Disaster Response'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 40: Incident Command Systems',
                description: 'ICS structure and major incident management.',
                cards: '15 cards',
                time: '14 min',
                track: 'EMS Operations & Disaster Response'
            },
            {
                level: 'Advanced',
                title: 'Chapter 41: Mass Casualty Incident Response',
                description: 'Triage and management of mass casualty incidents.',
                cards: '15 cards',
                time: '18 min',
                track: 'EMS Operations & Disaster Response'
            },
            {
                level: 'Advanced',
                title: 'Chapter 42: Advanced Cardiovascular Anatomy',
                description: 'In-depth study of the cardiovascular system.',
                cards: '15 cards',
                time: '20 min',
                track: 'Advanced Clinical Deep Dives'
            },
            {
                level: 'Advanced',
                title: 'Chapter 43: Advanced Respiratory Physiology',
                description: 'In-depth study of respiratory physiology.',
                cards: '15 cards',
                time: '20 min',
                track: 'Advanced Clinical Deep Dives'
            },
            {
                level: 'Advanced',
                title: 'Chapter 44: Nervous System in Depth',
                description: 'Detailed anatomy and physiology of the nervous system.',
                cards: '15 cards',
                time: '20 min',
                track: 'Advanced Clinical Deep Dives'
            },
            {
                level: 'Advanced',
                title: 'Chapter 45: Endocrine & Metabolic Systems',
                description: 'Advanced concepts in endocrine and metabolic systems.',
                cards: '15 cards',
                time: '20 min',
                track: 'Advanced Clinical Deep Dives'
            },
            {
                level: 'Basic',
                title: 'Chapter 46: Cellular Structure & Function',
                description: 'Basics of cell biology.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 47: Tissues & Organs',
                description: 'Overview of body tissues and organs.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 48: Skeletal System',
                description: 'Anatomy of the skeletal system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 49: Muscular System',
                description: 'Anatomy of the muscular system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 50: Cardiovascular System',
                description: 'Basics of the cardiovascular system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 51: Respiratory System',
                description: 'Basics of the respiratory system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 52: Nervous System',
                description: 'Basics of the nervous system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 53: Endocrine System',
                description: 'Basics of the endocrine system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 54: Digestive System',
                description: 'Basics of the digestive system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Basic',
                title: 'Chapter 55: Urinary System',
                description: 'Basics of the urinary system.',
                cards: '10 cards',
                time: '10 min',
                track: 'Body Systems Primer'
            },
            {
                level: 'Intermediate',
                title: 'Chapter 56: ALS Integration & Team Dynamics',
                description: 'Working with Advanced Life Support providers.',
                cards: '10 cards',
                time: '12 min',
                track: 'Body Systems Primer'
            }
        ]
    },
    {
        src: 'public/images/1000036914.png',
        alt: 'FlashLearnEMS stats dashboard',
        tag: 'FLASHLEARN SCALE',
        title: 'FlashLearn by the numbers',
        caption: 'The EMT-B catalog presents every topic, card, and difficulty tier you need for true mastery.',
        stats: [
            { value: '760', label: 'Total cards available' },
            { value: '104', label: 'Study topics' },
            { value: '56', label: 'EMT-B chapters' },
            { value: '3', label: 'Difficulty levels' }
        ]
    }
];

function renderFlashlearnGallery() {
    const gallery = document.querySelector('#flashlearn-gallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    flashlearnShots.forEach((shot, index) => {
        const card = document.createElement('article');
        card.className = 'glass-card reveal';
        card.style.setProperty('--card-index', index);

        const img = document.createElement('img');
        img.src = shot.src;
        img.alt = shot.alt || shot.title;
        img.loading = 'lazy';

        const body = document.createElement('div');
        body.className = 'glass-card-body';

        if (shot.tag) {
            const tag = document.createElement('span');
            tag.className = 'mood-tag';
            tag.textContent = shot.tag;
            body.appendChild(tag);
        }

        const title = document.createElement('h3');
        title.textContent = shot.title;
        body.appendChild(title);

        if (shot.caption) {
            const caption = document.createElement('p');
            caption.textContent = shot.caption;
            body.appendChild(caption);
        }

        if (Array.isArray(shot.sections) && shot.sections.length) {
            const detailsWrapper = document.createElement('div');
            detailsWrapper.className = 'card-details';

            shot.sections.forEach((section) => {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'card-detail';

                if (section.heading) {
                    const sectionHeading = document.createElement('h4');
                    sectionHeading.textContent = section.heading;
                    sectionEl.appendChild(sectionHeading);
                }

                if (section.summary) {
                    const summary = document.createElement('p');
                    summary.textContent = section.summary;
                    sectionEl.appendChild(summary);
                }

                if (Array.isArray(section.points) && section.points.length) {
                    const list = document.createElement('ul');
                    section.points.forEach((point) => {
                        const li = document.createElement('li');
                        li.textContent = point;
                        list.appendChild(li);
                    });
                    sectionEl.appendChild(list);
                }

                detailsWrapper.appendChild(sectionEl);
            });

            body.appendChild(detailsWrapper);
        }

        if (shot.chapterSummary) {
            const summary = document.createElement('p');
            summary.className = 'chapter-summary';
            summary.textContent = shot.chapterSummary;
            body.appendChild(summary);
        }

        if (Array.isArray(shot.chapters) && shot.chapters.length) {
            const chapterList = document.createElement('div');
            chapterList.className = 'chapter-list';

            shot.chapters.forEach((chapter) => {
                const chapterCard = document.createElement('article');
                chapterCard.className = 'chapter-card';

                if (chapter.level) {
                    const badge = document.createElement('span');
                    badge.className = `chapter-badge level-${chapter.level.toLowerCase()}`;
                    badge.textContent = chapter.level;
                    chapterCard.appendChild(badge);
                }

                const chapterTitle = document.createElement('h4');
                chapterTitle.textContent = chapter.title;
                chapterCard.appendChild(chapterTitle);

                if (chapter.description) {
                    const desc = document.createElement('p');
                    desc.textContent = chapter.description;
                    chapterCard.appendChild(desc);
                }

                const meta = document.createElement('div');
                meta.className = 'chapter-meta';

                [chapter.cards, chapter.time, chapter.track].forEach((item) => {
                    if (!item) return;
                    const pill = document.createElement('span');
                    pill.className = 'meta-pill';
                    pill.textContent = item;
                    meta.appendChild(pill);
                });

                chapterCard.appendChild(meta);

                const actionLabel = chapter.action || 'Study';
                if (actionLabel) {
                    const action = document.createElement('button');
                    action.className = 'chapter-action';
                    action.type = 'button';
                    action.textContent = actionLabel;
                    chapterCard.appendChild(action);
                }

                chapterList.appendChild(chapterCard);
            });

            body.appendChild(chapterList);
        }

        if (Array.isArray(shot.stats) && shot.stats.length) {
            const statsGrid = document.createElement('div');
            statsGrid.className = 'stats-grid';

            shot.stats.forEach((stat) => {
                const statCard = document.createElement('div');
                statCard.className = 'stat-card';

                const value = document.createElement('span');
                value.className = 'stat-value';
                value.textContent = stat.value;
                statCard.appendChild(value);

                if (stat.label) {
                    const label = document.createElement('span');
                    label.className = 'stat-label';
                    label.textContent = stat.label;
                    statCard.appendChild(label);
                }

                statsGrid.appendChild(statCard);
            });

            body.appendChild(statsGrid);
        }

        card.append(img, body);
        gallery.appendChild(card);
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
    renderFlashlearnGallery();
    initRevealObserver();
});
