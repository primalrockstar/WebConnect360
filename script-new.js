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
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ===== LOADING SCREEN =====
class LoadingScreen {
    constructor() {
        this.loadingScreen = $('#loading-screen');
        this.progressBar = $('.loading-progress');
        this.init();
    }

    init() {
        this.simulateLoading();
        window.addEventListener('load', () => {
            setTimeout(() => this.hide(), 500);
        });
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
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            setTimeout(() => {
                this.loadingScreen.remove();
                this.revealContent();
            }, 500);
        }
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
        this.counters = $$('.stat-number[data-count]');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOutCubic * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target;
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