// ===== MODERN JAVASCRIPT FOR WEBCONNECT360 =====
'use strict';

// ===== UTILITY FUNCTIONS =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// ===== PRODUCT DATA =====
const productData = {
    studyConnect: [
        {
            name: 'StudyConnecttm',
            suite: 'StudyConnecttm',
            brandText: 'StudyConnect',
            brandVariant: 'studyconnect',
            tagline: 'Frictionless pre-screening platform',
            description: 'Frictionless pre-screening across any clinical, research, or operational workflow. 60-second interest capture without PHI, automatically routing qualified participants or leads into secure pipelines.',
            highlights: ['Smart scheduling', 'Roster & lead intelligence'],
            status: 'Production ready · Live demos',
            statusClass: 'live',
            stack: 'Netlify · Secure web app',
            link: 'mailto:tech@webconnect360.com?subject=StudyConnect%20Request&body=Hello%20Shaun%2C%0A%0APlease%20send%20me%20the%20StudyConnect%20preview.%0A%0AThank%20you!',
            cta: 'Request demo'
        },
        {
            name: 'StudyConnectProtm',
            suite: 'StudyConnectProtm',
            brandText: 'StudyConnectPro',
            brandVariant: 'studyconnectpro',
            tagline: 'HIPAA backend for coordinators',
            description: 'A HIPAA-compliant backend for research coordinators, clinics, and enterprise programs. Automates eligibility scoring, consent workflows, PHI handling, messaging, and audit logs across medical, dental, and general research operations.',
            highlights: ['Workflow routing engine', 'Audit-ready infrastructure'],
            status: 'Production ready · Live demos',
            statusClass: 'live',
            stack: 'React · FastAPI · AWS Shield',
            link: 'mailto:tech@webconnect360.com?subject=StudyConnectPro%20Request&body=Hello%20Shaun%2C%0A%0APlease%20send%20me%20the%20StudyConnectPro%20demo.%0A%0AThank%20you!',
            cta: 'Request demo'
        }
    ],
    proMedix: [
        {
            name: 'ProMedixEMS™ · EMT-B Core',
            suite: 'ProMedixEMS™',
            brandText: 'ProMedixEMS',
            brandVariant: 'promedix',
            tagline: 'Foundation of the EMS pathway',
            description: 'Covers full EMT-B competency: assessment, BLS skills, oxygen therapy, fundamentals of pharmacology, and realistic entry-level scenarios. Anchors the entire EMT/AEMT/Paramedic suite releasing to both stores in 2026.',
            highlights: ['Adaptive learning paths', 'Instructor & cohort dashboards'],
            status: 'App Store + Google Play · 2026',
            statusClass: 'coming',
            stack: 'React · GraphQL · AWS',
            link: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20EMT-B%20Request&body=Hello%20Shaun%2C%0A%0ARequesting%20an%20EMT-B%20preview.%0A%0AThank%20you!',
            cta: 'Request demo'
        },
        {
            name: 'FlashLearnEMStm',
            suite: 'ProMedixEMS™',
            brandText: 'FlashLearnEMS',
            brandVariant: 'flashlearn',
            tagline: 'Spaced repetition system',
            description: 'A next-generation flashcard system built for EMS mastery with spaced repetition, smart distractors, custom decks, and deep integration with the ProMedixEMS curriculum.',
            highlights: ['Spaced repetition system', 'Custom decks & sync'],
            status: 'In Development · App Store + Google Play 2026',
            statusClass: 'phase',
            stack: 'React Native · Expo · SQLite',
            link: 'mailto:tech@webconnect360.com?subject=FlashLearn%20Waitlist&body=Hello%20Shaun%2C%0A%0AAdd%20me%20to%20the%20FlashLearn%20waitlist.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'MedicationsX™',
            suite: 'ProMedixEMS™',
            brandText: 'MedicationsX',
            brandVariant: 'medicationsx',
            tagline: 'EMS pharmacology companion',
            description: 'Level-specific formularies, OTC interaction alerts, contraindication intelligence, and a smart medication-math engine designed for EMT through Paramedic providers.',
            highlights: ['Level-specific formularies', 'Interaction engine'],
            status: 'In Development · App Store + Google Play 2026',
            statusClass: 'phase',
            stack: 'Expo · Secure sync · SQLite',
            link: 'mailto:tech@webconnect360.com?subject=MedicationsX%20Waitlist&body=Hello%20Shaun%2C%0A%0APlease%20add%20me%20to%20MedicationsX.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'RhythmLabEMStm',
            suite: 'ProMedixEMS™',
            brandText: 'RhythmLabEMS',
            brandVariant: 'rhythm',
            tagline: 'Adaptive rhythm trainer',
            description: 'High-clarity rhythm training for EMS students and ALS candidates with clean visuals, adaptive quizzing, and progressive difficulty.',
            highlights: ['Rhythm recognition engine', 'Adaptive ECG drills'],
            status: 'In Development · App Store + Google Play 2026',
            statusClass: 'phase',
            stack: 'Next.js · D3 · Serverless APIs',
            link: 'mailto:tech@webconnect360.com?subject=RhythmLab%20Waitlist&body=Hello%20Shaun%2C%0A%0AAdd%20me%20to%20the%20RhythmLab%20waitlist.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'ProMedixEMS™ · AEMT',
            suite: 'ProMedixEMS™',
            brandText: 'ProMedixEMS',
            brandVariant: 'promedix',
            tagline: 'Build on EMT-B with invasive skills',
            description: 'Covers IV/IO access, fluid therapy, intermediate pharmacology, airway adjuncts, and scenario-based decision-making designed for crews advancing into advanced practice.',
            highlights: ['Scenario labs', 'Competency matrix tracking'],
            status: 'In Development · Internal builds',
            statusClass: 'phase',
            stack: 'Next.js · Redux · PostgreSQL',
            link: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20AEMT%20Waitlist&body=Hello%20Shaun%2C%0A%0AAdd%20me%20to%20the%20AEMT%20waitlist.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'ProMedixEMS™ · Paramedic',
            suite: 'ProMedixEMS™',
            brandText: 'ProMedixEMS',
            brandVariant: 'promedix',
            tagline: 'Advanced ALS training suite',
            description: 'Includes 12-lead ECG interpretation, advanced airways, ALS medications, infusion management, and high-stakes scenarios. Designed to support paramedic candidates through capstone and preceptor workflows.',
            highlights: ['Telemetry-ready modules', 'Preceptor tools & ALS algorithms'],
            status: 'In Development · Internal builds',
            statusClass: 'phase',
            stack: 'Remix · Prisma · AWS AppSync',
            link: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20Paramedic%20Waitlist&body=Hello%20Shaun%2C%0A%0AAdd%20me%20to%20the%20Paramedic%20waitlist.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'PCRWriterEMStm',
            suite: 'ProMedixEMS™',
            brandText: 'PCRWriterEMS',
            brandVariant: 'pcrwriter',
            tagline: 'Documentation lab',
            description: 'Standalone documentation lab for rehearsing ePCR workflows with NFC equipment tagging.',
            highlights: ['Tablet-first', 'QA scoring'],
            status: 'In Development · Internal builds',
            statusClass: 'phase',
            stack: 'React Native · Realm · Azure',
            link: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20PCR%20Practice%20Waitlist&body=Hello%20Shaun%2C%0A%0AKeep%20me%20updated%20on%20PCR%20Practice.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        },
        {
            name: 'VoiceNotesEMStm',
            suite: 'ProMedixEMS™',
            brandText: 'VoiceNotesEMS',
            brandVariant: 'voicenotes',
            tagline: 'Hands-free capture',
            description: 'Hands-free capture with AI summaries evolving into a secure, standalone voice platform.',
            highlights: ['AI summaries', 'Vault storage'],
            status: 'In Development · Internal builds',
            statusClass: 'phase',
            stack: 'Next.js · Python · OpenAI',
            link: 'mailto:tech@webconnect360.com?subject=ProMedixEMS%E2%84%A2%20VoiceNotes%20Waitlist&body=Hello%20Shaun%2C%0A%0APlease%20add%20me%20to%20the%20VoiceNotes%20waitlist.%0A%0AThank%20you!',
            cta: 'Join waitlist'
        }
    ]
};

// ===== LOADING SCREEN =====
class LoadingScreen {
    constructor() {
        this.loadingScreen = $('#loading-screen');
        this.progressBar = $('.loading-progress');
        this.dismissed = false;
        this.failsafeTimer = null;
        this.init();
    }

    init() {
        this.simulateLoading();
        const deferHide = () => setTimeout(() => this.hide(), 300);

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            deferHide();
        } else {
            document.addEventListener('DOMContentLoaded', deferHide, { once: true });
            window.addEventListener('load', deferHide, { once: true });
        }

        // Failsafe: hide loading screen after a max timeout
        this.failsafeTimer = setTimeout(() => this.hide(), 4000);
    }

    simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            if (this.progressBar) {
                this.progressBar.style.width = `${progress}%`;
            }
        }, 100);
    }

    hide() {
        if (!this.loadingScreen || this.dismissed) return;

        this.dismissed = true;
        if (this.failsafeTimer) {
            clearTimeout(this.failsafeTimer);
        }

        this.loadingScreen.classList.add('hidden');
        setTimeout(() => {
            this.loadingScreen?.remove();
            this.revealContent();
        }, 500);
    }

    revealContent() {
        const loadingElements = $$('.loading');
        loadingElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('loaded');
            }, index * 100);
        });
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.navbar = $('#navbar');
        this.navToggle = $('#nav-toggle');
        this.mobileMenu = $('#mobile-menu');
        this.navLinks = $$('.nav-link, .mobile-nav-link');
        this.isMenuOpen = false;
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupSmoothScrolling();
        this.highlightActiveSection();
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking outside
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener('click', (e) => {
                if (e.target === this.mobileMenu) {
                    this.closeMobileMenu();
                }
            });
        }

        // Handle nav link clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.navigateToSection(target);
                this.closeMobileMenu();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    setupScrollEffects() {
        const scrollHandler = throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class to navbar
            if (scrollTop > 100) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll
            if (scrollTop > this.lastScrollTop && scrollTop > 200) {
                this.navbar?.style.setProperty('transform', 'translateY(-100%)');
            } else {
                this.navbar?.style.setProperty('transform', 'translateY(0)');
            }

            this.lastScrollTop = scrollTop;
            this.highlightActiveSection();
        }, 10);

        window.addEventListener('scroll', scrollHandler);
    }

    setupSmoothScrolling() {
        // Enhanced smooth scrolling
        const smoothScroll = (target, duration = 1000) => {
            const targetElement = $(target);
            if (!targetElement) return;

            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.offsetTop - 80; // Account for navbar height
            const distance = targetPosition - startPosition;
            let startTime = null;

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = this.easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            requestAnimationFrame(animation);
        };

        // Add smooth scroll to all internal links
        $$('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScroll(target);
            });
        });
    }

    easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    highlightActiveSection() {
        const sections = $$('section[id]');
        const scrollPos = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                this.navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = $(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        
        if (this.isMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }
    }

    openMobileMenu() {
        this.navToggle?.classList.add('active');
        this.mobileMenu?.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.navToggle?.setAttribute('aria-expanded', 'true');
        
        // Focus management
        const firstLink = this.mobileMenu?.querySelector('.mobile-nav-link');
        setTimeout(() => firstLink?.focus(), 300);
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        this.navToggle?.classList.remove('active');
        this.mobileMenu?.classList.remove('active');
        document.body.style.overflow = '';
        this.navToggle?.setAttribute('aria-expanded', 'false');
    }

    navigateToSection(target) {
        const targetElement = $(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.createParticles();
        this.animate();
        
        // Reduce particles on mobile
        if (window.innerWidth < 768) {
            this.particleCount = 20;
        }
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation delay
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 6;
        const randomDuration = 4 + Math.random() * 4;
        
        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    animate() {
        // Add any additional animation logic here
        this.particles.forEach(particle => {
            particle.addEventListener('animationend', () => {
                // Reset particle position for continuous animation
                const randomX = Math.random() * 100;
                particle.style.left = `${randomX}%`;
            });
        });
    }
}

// ===== COUNTER ANIMATION =====
class CounterAnimation {
    constructor() {
        this.counters = $$('.stat-value');
        this.init();
    }

    init() {
        if (!this.counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        this.counters.forEach(counter => {
            if (!counter.dataset.count) {
                const numericValue = parseInt(counter.textContent.replace(/[^0-9]/g, ''), 10) || 0;
                counter.dataset.count = numericValue;
                counter.dataset.suffix = counter.textContent.replace(/[0-9]/g, '').trim();
            }
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count, 10) || 0;
        const suffix = element.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOutCubic * target);
            
            element.textContent = `${current}${suffix}`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = `${target}${suffix}`;
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.timeline-item, .feature-card, .service-card, .project-card, .contact-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('loaded');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all elements with loading class
        $$('.loading').forEach(el => {
            observer.observe(el);
        });
    }
}

// ===== FORM HANDLING =====
class FormHandler {
    constructor() {
        this.form = $('form[name="contact"]');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.setupFormValidation();
        this.setupFormSubmission();
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearErrors(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearErrors(field);

        // Validation rules
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'text':
                if (field.hasAttribute('required') && !value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                }
                break;
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = 'var(--primary-color)';
        errorDiv.style.fontSize = 'var(--font-size-sm)';
        errorDiv.style.marginTop = 'var(--space-xs)';
        
        field.parentNode.appendChild(errorDiv);
    }

    clearErrors(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            const inputs = this.form.querySelectorAll('input[required], select[required], textarea[required]');
            let isFormValid = true;
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                this.showFormMessage('Please correct the errors above', 'error');
                return;
            }

            // Show loading state
            const submitBtn = this.form.querySelector('button[type="submit"]');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Netlify form submission
                const formData = new FormData(this.form);
                
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                });

                if (response.ok) {
                    this.showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                    this.form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.padding = 'var(--space-md)';
        messageDiv.style.borderRadius = 'var(--radius-lg)';
        messageDiv.style.marginTop = 'var(--space-lg)';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontSize = 'var(--font-size-base)';
        messageDiv.style.fontWeight = '600';
        
        if (type === 'success') {
            messageDiv.style.background = 'rgba(78, 205, 196, 0.1)';
            messageDiv.style.color = 'var(--secondary-color)';
            messageDiv.style.border = '1px solid var(--secondary-color)';
        } else {
            messageDiv.style.background = 'rgba(255, 107, 53, 0.1)';
            messageDiv.style.color = 'var(--primary-color)';
            messageDiv.style.border = '1px solid var(--primary-color)';
        }

        this.form.appendChild(messageDiv);

        // Auto-remove success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
        this.optimizeAnimations();
    }

    lazyLoadImages() {
        const images = $$('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    preloadCriticalResources() {
        // Preload hero video if it exists
        const heroVideo = $('.hero-video');
        if (heroVideo) {
            heroVideo.addEventListener('canplaythrough', () => {
                heroVideo.style.opacity = '0.3';
            });
        }
    }

    optimizeAnimations() {
        // Disable animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '0ms');
            document.documentElement.style.setProperty('--transition-base', '0ms');
            document.documentElement.style.setProperty('--transition-slow', '0ms');
        }
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupAriaLabels();
    }

    setupKeyboardNavigation() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    setupFocusManagement() {
        // Trap focus in mobile menu
        const mobileMenu = $('#mobile-menu');
        if (mobileMenu) {
            const focusableElements = mobileMenu.querySelectorAll(
                'a[href], button, textarea, input, select'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            mobileMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }
    }

    setupAriaLabels() {
        // Add aria-current to active nav links
        const navLinks = $$('.nav-link');
        navLinks.forEach(link => {
            if (link.classList.contains('active')) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}

// ===== THEME SYSTEM (Future Enhancement) =====
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupThemeToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    setupThemeToggle() {
        // This can be implemented in the future for light/dark theme switching
        const themeToggle = $('#theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
                this.currentTheme = newTheme;
                this.applyTheme(newTheme);
            });
        }
    }
}

// ===== MAIN APPLICATION =====
class WebConnect360App {
    constructor() {
        this.components = {};
        this.data = productData;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        try {
            // Initialize all components
            this.components.loadingScreen = new LoadingScreen();
            this.components.navigation = new Navigation();
            this.components.particles = new ParticleSystem($('#particles'));
            this.components.counters = new CounterAnimation();
            this.components.scrollAnimations = new ScrollAnimations();
            this.components.formHandler = new FormHandler();
            this.components.performanceOptimizer = new PerformanceOptimizer();
            this.components.accessibilityEnhancer = new AccessibilityEnhancer();
            this.components.themeManager = new ThemeManager();
            this.renderProductGrids();

            // Setup global event listeners
            this.setupGlobalEvents();
            
            console.log('WebConnect360 App initialized successfully');
        } catch (error) {
            console.error('Error initializing WebConnect360 App:', error);
        }
    }

    setupGlobalEvents() {
        // Handle window resize
        window.addEventListener('resize', debounce(() => {
            this.handleResize();
        }, 250));

        // Handle visibility change (for performance optimization)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause expensive operations when tab is not visible
                this.pauseAnimations();
            } else {
                // Resume animations when tab becomes visible
                this.resumeAnimations();
            }
        });

        // Handle online/offline status
        window.addEventListener('online', () => {
            this.showConnectionStatus('Back online', 'success');
        });

        window.addEventListener('offline', () => {
            this.showConnectionStatus('Connection lost', 'warning');
        });
    }

    handleResize() {
        // Reinitialize particles with new count for screen size
        if (this.components.particles) {
            this.components.particles.particleCount = window.innerWidth < 768 ? 20 : 50;
        }
    }

    pauseAnimations() {
        document.body.classList.add('paused');
    }

    resumeAnimations() {
        document.body.classList.remove('paused');
    }

    showConnectionStatus(message, type) {
        const statusDiv = document.createElement('div');
        statusDiv.className = `connection-status ${type}`;
        statusDiv.textContent = message;
        statusDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--secondary-color)' : 'var(--primary-color)'};
            color: white;
            padding: var(--space-md);
            border-radius: var(--radius-lg);
            z-index: var(--z-toast);
            font-weight: 600;
            transform: translateX(100%);
            transition: transform var(--transition-base);
        `;

        document.body.appendChild(statusDiv);

        // Animate in
        setTimeout(() => {
            statusDiv.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            statusDiv.style.transform = 'translateX(100%)';
            setTimeout(() => statusDiv.remove(), 300);
        }, 3000);
    }

    renderProductGrids() {
        if (typeof CardComponent === 'undefined') {
            console.warn('CardComponent is not available. Skipping product grid render.');
            return;
        }

        if (!this.components.cardComponent) {
            this.components.cardComponent = new CardComponent();
        }

        try {
            this.components.cardComponent.render('#studyconnect-grid', this.data.studyConnect);
            this.components.cardComponent.render('#promedix-grid', this.data.proMedix);
        } catch (error) {
            console.error('Error rendering product grids:', error);
        }
    }
}

// ===== INITIALIZE APPLICATION =====
const app = new WebConnect360App();

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WebConnect360App,
        Navigation,
        LoadingScreen,
        ParticleSystem,
        CounterAnimation,
        ScrollAnimations,
        FormHandler,
        PerformanceOptimizer,
        AccessibilityEnhancer,
        ThemeManager
    };
}