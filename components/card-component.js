'use strict';

(function initCardComponent(global) {
    class CardComponent {
        constructor(options = {}) {
            this.layout = options.layout || 'default';
        }

        createCardElement(card) {
            const article = document.createElement('article');
            article.className = 'product-card glass';
            article.setAttribute('data-suite', card.suite || 'ProMedixEMS');

            const statusClass = card.statusClass || (card.status ? card.status.toLowerCase().replace(/\s+/g, '-') : 'live');

            article.innerHTML = `
                <div class="card-head">
                    <div>
                        <p class="eyebrow">${card.suite || 'ProMedixEMS™'}</p>
                        <h3>${card.name}</h3>
                        <p class="card-tagline">${card.tagline}</p>
                    </div>
                    <span class="status ${statusClass}">${card.status || 'Live'}</span>
                </div>
                <p class="card-description">${card.description}</p>
                <ul class="card-highlights">
                    ${(card.highlights || []).map(point => `<li>${point}</li>`).join('')}
                </ul>
                <div class="card-meta">
                    <span>${card.stack || 'Glass UI · Secure API'}</span>
                    ${card.link ? `<a href="${card.link}" target="_blank" rel="noopener">${card.cta || 'View module'}</a>` : ''}
                </div>
            `;

            return article;
        }

        render(gridSelector, cards = []) {
            const grid = typeof gridSelector === 'string' ? document.querySelector(gridSelector) : gridSelector;
            if (!grid) return;

            grid.innerHTML = '';
            cards.forEach(card => {
                const cardElement = this.createCardElement(card);
                grid.appendChild(cardElement);
            });
        }
    }

    global.CardComponent = CardComponent;
})(window);
