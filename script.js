document.addEventListener('DOMContentLoaded', () => {
    // Select sidebar elements
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const menuToggle = document.getElementById('menuToggle'); // Hamburger
    const closeMenuBtn = document.getElementById('closeMenuBtn'); // X button
    
    // Select all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // --- 1. Off-Canvas Menu Toggle ---
    function toggleSidebar() {
        const willOpen = !mobileMenu.classList.contains('is-open');
        mobileMenu.classList.toggle('is-open');
        document.body.classList.toggle('menu-open', willOpen);
        if (mobileOverlay) mobileOverlay.classList.toggle('active', willOpen);
        console.log('[DEBUG] Sidebar', willOpen ? 'OPEN' : 'CLOSE');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleSidebar);
    }
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleSidebar);
    }

    // --- 2. Accordion Logic (delegated + touch/keyboard support) ---
    const toggleAccordion = (headerEl) => {
        if (!headerEl) return;
        const item = headerEl.closest('.accordion-item');
        if (!item) return;
        const container = headerEl.closest('.mobile-accordion-container');
        // Close other sections to mimic mega dropdown behavior
        if (container) {
          container.querySelectorAll('.accordion-item.is-open').forEach((openItem) => {
            if (openItem !== item) {
              openItem.classList.remove('is-open');
              const openIcon = openItem.querySelector('.icon-toggle');
              if (openIcon) openIcon.textContent = '+';
            }
          });
        }
        const icon = item.querySelector('.icon-toggle');
        const isOpen = item.classList.toggle('is-open');
        if (icon) icon.textContent = isOpen ? '−' : '+';
    };

    // Delegate clicks to handle dynamically loaded elements
    document.addEventListener('click', (e) => {
        const headerEl = e.target.closest('.accordion-header');
        if (headerEl) {
            e.preventDefault();
            console.log('[DEBUG] Click header:', headerEl.textContent.trim());
            toggleAccordion(headerEl);
        }
    }, { passive: false });

    // Keyboard support for accessibility
    document.addEventListener('keydown', (e) => {
        const headerEl = e.target.closest && e.target.closest('.accordion-header');
        if (!headerEl) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion(headerEl);
        }
    });
});

// Cart drawer interactions
document.addEventListener('DOMContentLoaded', () => {
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const cartClose = document.getElementById('cartDrawerClose');
  const cartIcons = document.querySelectorAll('.cart-icon');

  if (!cartDrawer) return;

  function openCartDrawer(e) {
    if (e) e.preventDefault();
    cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('active');
  }

  function closeCartDrawer(e) {
    if (e) e.preventDefault();
    cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('active');
  }

  cartIcons.forEach(icon => {
    icon.addEventListener('click', openCartDrawer);
  });
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Expose globally so other scripts (e.g., Buy Now) can open the drawer
  window.openCartDrawer = openCartDrawer;
});

//--Search bar--//
// Select all icon buttons and search bars
const searchToggles = document.querySelectorAll('.icon-btn');
const searchAreas = document.querySelectorAll('.search-bar-full');
const searchSVG = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 
  75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 
  69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 
  0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
</svg>`;

// Simple search index: labels & URLs for suggestions
const searchItems = [
  { label: 'Power Banks', url: 'products.html?category=power-banks', keywords: ['power bank', 'powerbanks', 'charging'] },
  { label: 'Chargers', url: 'products.html?category=chargers', keywords: ['charger', 'wall charger', 'cable'] },
  { label: 'Screen Protectors', url: 'products.html?category=screen-protectors', keywords: ['tempered glass', 'screen', 'protector'] },
  { label: 'Mobile Cases', url: 'products.html?category=phone-cases', keywords: ['case', 'back cover'] },
  { label: 'Audio Accessories', url: 'products.html?category=audio', keywords: ['earbuds', 'earphones', 'speaker', 'audio'] },
  { label: 'Smart Watches', url: 'products.html?category=wearables', keywords: ['watch', 'wearable'] },
  { label: 'Cart', url: 'cart.html', keywords: ['cart', 'bag'] },
];

const homeBestProducts = [
  {
    title: 'Aerosync Snap',
    detailId: 'powerbank',
    image: 'images/Magsafe powerbank.png',
    hoverImage: 'images/Magsafe powerbank1.jpg',
    badge: 'Bestseller',
    badgeClass: 'popular',
    desc: '10000mAh Magsafe Wireless Power Bank for iPhone',
    rating: '★★★★☆',
    reviews: 234,
    currentPrice: '₹1,599',
    originalPrice: '₹1,999',
    discount: '20% OFF',
  },
  {
    title: 'AerosynQ MagSurge',
    detailId: 'powerbank',
    image: 'images/Spigen1.jpg',
    hoverImage: 'images/Spigen2.jpg',
    badge: 'New',
    badgeClass: 'new',
    desc: '10000mAh Qi2 Certified Magsafe Fast Charging',
    rating: '★★★★☆',
    reviews: 189,
    currentPrice: '₹2,499',
    originalPrice: '₹3,299',
    discount: '24% OFF',
  },
  {
    title: 'PowerMini 20',
    detailId: 'powerbank',
    image: 'images/Powerbank 20,000mah.jpg',
    hoverImage:'images/Powerbank2 20,000mah.jpg',
    badge: '',
    badgeClass: '',
    desc: '20000mAh Fast Charging Power Bank for Mobile & MacBook',
    rating: '★★★★★',
    reviews: 312,
    currentPrice: '₹1,999',
    originalPrice: '₹2,999',
    discount: '33% OFF',
  },
  {
    title: 'Aerosync 65',
    detailId: 'powerbank',
    image: 'images/spigen30kmah.jpg',
    hoverImage: 'images/spigen30kmah2.jpg',
    badge: '',
    badgeClass: '',
    desc: '15000mAh Type C Laptop, Wireless Magnetic Charging',
    rating: '★★★★☆',
    reviews: 145,
    currentPrice: '₹4,999',
    originalPrice: '₹9,999',
    discount: '50% OFF',
  },
  {
    title: 'MiniCharge 20',
    detailId: 'powerbank',
    image:'images/stuffcool.jpg',
    hoverImage: 'images/stuffcool1.jpg',
    badge: 'Trending',
    badgeClass: 'popular',
    desc: '20000mAh Fast Charging Power Bank with In-Built Cable',
    rating: '★★★★☆',
    reviews: 204,
    currentPrice: '₹1,699',
    originalPrice: '₹3,300',
    discount: '48% OFF',
  },
];

const closeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
  <path d="M256-200 200-256l224-224-224-224 56-56 224 
  224 224-224 56 56-224 224 224 224-56 56-224-224-224 
  224Z"/>
</svg>`;

// For each icon button (desktop & mobile)
searchToggles.forEach((toggle) => {
  // Prefer the search bar within the same nav/header; fall back to the first global one
  let searchArea = null;
  const parentNav = toggle.closest('nav');
  if (parentNav) {
    searchArea = parentNav.querySelector('.search-bar-full');
  }
  if (!searchArea) {
    searchArea = document.querySelector('.search-bar-full');
  }
  if (!searchArea) return; // safely skip on pages without a search bar

  const searchInput = searchArea.querySelector('input');
  let open = false;

  toggle.innerHTML = searchSVG; // Initial icon

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    open = !open;
    searchArea.classList.toggle('active', open);
    toggle.innerHTML = open ? closeSVG : searchSVG;
    if (open && searchInput) searchInput.focus();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchArea.contains(e.target) && !toggle.contains(e.target)) {
      open = false;
      searchArea.classList.remove('active');
      toggle.innerHTML = searchSVG;
    }
  });
});

function renderHomeBest(track) {
  if (!track) return;
  track.innerHTML = '';
  homeBestProducts.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('aria-label', p.title);
    card.innerHTML = `
      <div class="product-image">
        <img class="product-img-default" src="${p.image}" alt="${p.title}">
        <img class="product-img-hover" src="${p.hoverImage}" alt="${p.title}">
      </div>
      ${
        p.badge
          ? `<div class="product-badge ${p.badgeClass || ''}">${p.badge}</div>`
          : ''
      }
      <div class="product-info">
        <h3>${p.title}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-rating"><span class="stars">${p.rating}</span><span class="rating-count">(${p.reviews})</span></div>
        <div class="product-price"><span class="current-price">${p.currentPrice}</span><span class="original-price">${p.originalPrice}</span><span class="discount">${p.discount}</span></div>
        <button class="add-to-cart-btn" onclick="window.location.href='product-detail.html?id=${p.detailId}'">ADD TO CART</button>
      </div>
    `;
    track.appendChild(card);
  });
}

// Lightweight Product Carousel (Best Selling Powerbanks)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.product-track');
    const prev = carousel.querySelector('.pc-prev');
    const next = carousel.querySelector('.pc-next');
    if (!track || !prev || !next) return;

    if (carousel.id === 'home-best-carousel') {
      renderHomeBest(track);
    }

    let index = 0;
    let cardsPerView = 4;
    let step = 0; // pixel distance per card including gap

    const cards = Array.from(track.querySelectorAll('.product-card'));
    const updateMetrics = () => {
      if (cards.length === 0) return;
      const cardRect = cards[0].getBoundingClientRect();
      // Compute gap by measuring distance between first two cards if possible
      let gap = 20;
      if (cards.length > 1) {
        const rect1 = cards[0].getBoundingClientRect();
        const rect2 = cards[1].getBoundingClientRect();
        gap = Math.max(0, Math.round(rect2.left - rect1.right));
      }
      step = Math.round(cardRect.width + gap);

      const trackRect = track.getBoundingClientRect();
      cardsPerView = Math.max(1, Math.round(trackRect.width / (step || 1)));

      // Clamp index after resize
      const maxIndex = Math.max(0, cards.length - cardsPerView);
      index = Math.min(index, maxIndex);
      applyTransform();
    };

    const applyTransform = () => {
      const x = index * step;
      track.scrollTo({ left: x, behavior: 'smooth' });
      updateNavState();
    };

    const updateNavState = () => {
      const maxIndex = Math.max(0, cards.length - cardsPerView);
      prev.disabled = index <= 0;
      next.disabled = index >= maxIndex;
      prev.style.opacity = prev.disabled ? '0.5' : '1';
      next.style.opacity = next.disabled ? '0.5' : '1';
    };

    prev.addEventListener('click', () => {
      const stepCount = Math.max(1, cardsPerView);
      index = Math.max(0, index - stepCount);
      applyTransform();
    });
    next.addEventListener('click', () => {
      const stepCount = Math.max(1, cardsPerView);
      const maxIndex = Math.max(0, cards.length - cardsPerView);
      index = Math.min(maxIndex, index + stepCount);
      applyTransform();
    });

    // Update on resize
    let resizeTO;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTO);
      resizeTO = setTimeout(updateMetrics, 150);
    });

    // Initialize
    updateMetrics();
  });
});

// Advanced Image Slider Functionality (simple fade carousel)
class AdvancedImageSlider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.slider-track');
        this.slides = Array.from(container.querySelectorAll('.slide'));
        this.prevBtn = container.querySelector('.prev-btn');
        this.nextBtn = container.querySelector('.next-btn');
        this.pagination = container.querySelector('.slider-pagination');
        this.playPauseBtn = container.querySelector('.play-pause-btn');

        this.config = {
            transitionSpeed: 600,
            autoplaySpeed: 5000,
            transitionEffect: 'fade',
            autoplay: true,
            touchThreshold: 50
        };

        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        if (!this.slides.length) return;

        this.createPagination();
        this.setupEventListeners();
        this.updateTransitionEffect();
        this.goToSlide(0, false);

        if (this.config.autoplay) {
            this.startAutoplay();
        }
    }

    createPagination() {
        if (!this.pagination) return;
        this.pagination.innerHTML = '';

        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'pagination-dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.setAttribute('aria-selected', index === 0);
            dot.addEventListener('click', () => this.goToSlide(index));
            this.pagination.appendChild(dot);
        });
    }

    setupEventListeners() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            else if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Touch swipe
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        // Autoplay controls
        if (this.playPauseBtn) {
            this.playPauseBtn.addEventListener('click', () => this.toggleAutoplay());
        }

        this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.container.addEventListener('mouseleave', () => {
            if (this.config.autoplay) this.startAutoplay();
        });
    }

    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) < this.config.touchThreshold) return;
        if (diff > 0) this.nextSlide();
        else this.prevSlide();
    }

    goToSlide(index, animate = true) {
        if (!this.slides.length) return;
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        this.currentIndex = index;

        if (this.config.transitionEffect === 'fade') {
            this.applyFadeTransition();
        } else {
            this.applySlideTransition(animate);
        }

        this.updatePagination();
        this.updateARIA();
    }

    applySlideTransition(animate = true) {
        if (!this.track) return;
        this.track.style.transition = animate ? `transform ${this.config.transitionSpeed}ms ease-in-out` : 'none';
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    applyFadeTransition() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });
        if (this.track) this.track.classList.add('fade-transition');
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    updatePagination() {
        if (!this.pagination) return;
        const dots = this.pagination.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            const isActive = index === this.currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive);
        });
    }

    updateARIA() {
        this.slides.forEach((slide, index) => {
            slide.setAttribute('aria-label', `${index + 1} of ${this.slides.length}`);
            slide.setAttribute('aria-hidden', index !== this.currentIndex);
        });
    }

    startAutoplay() {
        this.pauseAutoplay();
        if (!this.config.autoplay) return;
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.config.autoplaySpeed);
        if (this.playPauseBtn) this.playPauseBtn.classList.remove('paused');
    }

    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
            if (this.playPauseBtn) this.playPauseBtn.classList.add('paused');
        }
    }

    toggleAutoplay() {
        if (this.autoplayInterval) {
            this.pauseAutoplay();
            this.config.autoplay = false;
        } else {
            this.config.autoplay = true;
            this.startAutoplay();
        }
    }

    updateTransitionEffect() {
        if (!this.track) return;
        if (this.config.transitionEffect === 'fade') {
            this.track.classList.add('fade-transition');
            this.applyFadeTransition();
        } else {
            this.track.classList.remove('fade-transition');
            this.applySlideTransition();
        }
        this.track.style.transition = `transform ${this.config.transitionSpeed}ms ease-in-out`;
    }
}

// Best Selling Products Slider
class BestSellingSlider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.slider-track');
        this.slides = Array.from(container.querySelectorAll('.slide'));
        this.prevBtn = container.querySelector('.prev-arrow');
        this.nextBtn = container.querySelector('.next-arrow');
        this.dotsContainer = container.parentElement.querySelector('.slider-dots');
        
        // Configuration
        this.config = {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.slidesToShow = this.getSlidesToShow();
        this.slidesToScroll = this.config.slidesToScroll;
        this.autoplayInterval = null;
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createDots();
        this.updateSlider();
        this.startAutoplay();
        this.setupResponsive();
    }
    
    setupEventListeners() {
        // Navigation buttons
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Touch events
        this.track.addEventListener('mousedown', this.dragStart.bind(this));
        this.track.addEventListener('touchstart', this.dragStart.bind(this));
        
        this.track.addEventListener('mousemove', this.drag.bind(this));
        this.track.addEventListener('touchmove', this.drag.bind(this), { passive: false });
        
        this.track.addEventListener('mouseup', this.dragEnd.bind(this));
        this.track.addEventListener('mouseleave', this.dragEnd.bind(this));
        this.track.addEventListener('touchend', this.dragEnd.bind(this));
        
        // Prevent image drag
        this.track.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
        
        // Window resize
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    
    handleResize() {
        const prevSlidesToShow = this.slidesToShow;
        this.slidesToShow = this.getSlidesToShow();
        
        // Only update if slidesToShow changed or if we need to recalculate sizes
        if (prevSlidesToShow !== this.slidesToShow || 
            !this.slides[0]?.style.minWidth || 
            this.slides[0]?.style.minWidth === '0px') {
            this.updateSlider();
        }
    }
    
    getSlidesToShow() {
        const width = window.innerWidth;
        let slidesToShow = this.config.slidesToShow;
        
        this.config.responsive.forEach(breakpoint => {
            if (width <= breakpoint.breakpoint) {
                slidesToShow = breakpoint.settings.slidesToShow;
            }
        });
        
        return Math.min(slidesToShow, this.slideCount);
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        const dotCount = Math.ceil(this.slideCount / this.slidesToShow);
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i * this.slidesToShow));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        if (!this.dotsContainer) return;
        
        const dots = this.dotsContainer.querySelectorAll('.dot');
        const activeDotIndex = Math.floor(this.currentIndex / this.slidesToShow);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }
    
    dragStart(e) {
        e.preventDefault();
        this.isDragging = true;
        this.startPos = this.getPositionX(e);
        this.animationID = requestAnimationFrame(this.animation.bind(this));
        this.pauseAutoplay();
    }
    
    drag(e) {
        if (!this.isDragging) return;
        
        const currentPosition = this.getPositionX(e);
        const diff = currentPosition - this.startPos;
        
        // Only prevent default for touch events when actually dragging
        if (e.cancelable) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        this.currentTranslate = this.prevTranslate + diff;
    }
    
    dragEnd() {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        
        const movedBy = this.currentTranslate - this.prevTranslate;
        
        if (Math.abs(movedBy) > 50) {
            if (movedBy > 0 && this.currentIndex > 0) {
                this.prevSlide();
            } else if (movedBy < 0 && this.currentIndex < this.slideCount - this.slidesToShow) {
                this.nextSlide();
            } else {
                this.updateSlider();
            }
        } else {
            this.updateSlider();
        }
        
        this.startAutoplay();
    }
    
    getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
    
    animation() {
        this.setSliderPosition();
        if (this.isDragging) {
            this.animationID = requestAnimationFrame(this.animation.bind(this));
        }
    }
    
    setSliderPosition() {
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }
    
    goToSlide(index) {
        if (index < 0) {
            index = 0;
        } else if (index > this.slideCount - this.slidesToShow) {
            index = this.slideCount - this.slidesToShow;
        }
        
        this.currentIndex = index;
        this.updateSlider();
    }
    
    prevSlide() {
        if (this.currentIndex <= 0) {
            this.goToSlide(this.slideCount - this.slidesToShow);
        } else {
            this.goToSlide(this.currentIndex - this.slidesToScroll);
        }
    }
    
    nextSlide() {
        if (this.currentIndex >= this.slideCount - this.slidesToShow) {
            this.goToSlide(0);
        } else {
            this.goToSlide(this.currentIndex + this.slidesToScroll);
        }
    }
    
    updateSlider() {
        if (!this.slides.length) return;
        
        // Calculate slide width based on container and number of slides to show
        const containerWidth = this.container.offsetWidth;
        let slideWidth = containerWidth / this.slidesToShow;
        
        // For partial slides (like 1.5 slides on mobile)
        if (this.slidesToShow % 1 !== 0) {
            slideWidth = (containerWidth * 0.9) / this.slidesToShow;
        }
        
        // Set width for each slide
        this.slides.forEach(slide => {
            slide.style.minWidth = `${slideWidth}px`;
            slide.style.maxWidth = `${slideWidth}px`;
            slide.style.padding = '0 10px'; // Add some spacing between slides
        });
        
        // Update track width
        const totalWidth = this.slides.length * slideWidth;
        this.track.style.width = `${totalWidth}px`;
        
        // Update transform
        this.currentTranslate = -this.currentIndex * slideWidth;
        this.prevTranslate = this.currentTranslate;
        this.setSliderPosition();
        this.updateDots();
    }
    
    startAutoplay() {
        if (!this.config.autoplay) return;
        
        this.pauseAutoplay();
        
        this.autoplayInterval = setInterval(() => {
            if (this.currentIndex >= this.slideCount - this.slidesToShow) {
                this.goToSlide(0);
            } else {
                this.nextSlide();
            }
        }, this.config.autoplaySpeed);
    }
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    setupResponsive() {
        // Initial setup
        this.handleResize();
        
        // Throttle the resize event
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newSlidesToShow = this.getSlidesToShow();
                if (newSlidesToShow !== this.slidesToShow) {
                    this.slidesToShow = newSlidesToShow;
                    this.createDots();
                    this.updateSlider();
                }
            }, 250);
        });
    }
}

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Best Selling Powerbanks slider
    const bestSellingContainer = document.querySelector('.best-selling-slider .slider-container');
    if (bestSellingContainer) {
        new BestSellingSlider(bestSellingContainer);
    }

    // Hero image slider at the top of the page
    const heroSliderContainer = document.querySelector('.slider-section .slider-container');
    if (heroSliderContainer) {
        new AdvancedImageSlider(heroSliderContainer);
    }

    // Add no-js class removal for fallback support
    document.body.classList.remove('no-js');
});

// Fallback for browsers that don't support modern JavaScript features
if (!('classList' in document.documentElement)) {
    document.body.className += ' no-js';
}

// Categories and Products Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Add animation to category cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize all category cards with fade-in effect
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Initialize product cards with fade-in effect (exclude carousel cards)
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.closest('.product-carousel')) return; // skip carousel items
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent card click when button is clicked
            const productCard = this.closest('.product-card');
            const productName = productCard ? productCard.querySelector('h3').textContent : 'Product';
            
            // Add visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added! ';
            this.style.background = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '#01003f';
            }, 2000);
            
            // In a real implementation, this would add to cart
            console.log(`Added ${productName} to cart`);
        });
    });

    // Make product cards clickable (if not already handled by onclick)
    document.querySelectorAll('.product-card[data-product]').forEach(card => {
        if (!card.onclick) {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    const productId = this.dataset.product;
                    window.location.href = `product-detail.html?id=${productId}`;
                }
            });
        }
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Visual feedback
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribed! ';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#01003f';
                this.reset();
            }, 2000);
            
            console.log(`Newsletter subscription: ${email}`);
        });
    }

    // Customer Support page accordion (support-accordion-item)
    const supportItems = document.querySelectorAll('.support-accordion-item');
    if (supportItems.length) {
        const closeAllSupportPanels = () => {
            supportItems.forEach((btn) => {
                btn.classList.remove('is-open');
                const panel = btn.nextElementSibling;
                if (panel && panel.classList.contains('support-accordion-panel')) {
                    panel.style.display = 'none';
                }
                const icon = btn.querySelector('.support-accordion-icon');
                if (icon) icon.textContent = '+';
            });
        };

        supportItems.forEach((btn) => {
            btn.addEventListener('click', () => {
                const isAlreadyOpen = btn.classList.contains('is-open');
                const panel = btn.nextElementSibling;

                // Close all panels first
                closeAllSupportPanels();

                // If it was not open, open this one
                if (!isAlreadyOpen) {
                    btn.classList.add('is-open');
                    if (panel && panel.classList.contains('support-accordion-panel')) {
                        panel.style.display = 'block';
                    }
                    const icon = btn.querySelector('.support-accordion-icon');
                    if (icon) icon.textContent = '−';
                }
            });
        });

        // Initialize default open item (use .is-open if present, otherwise first)
        const presetOpen = document.querySelector('.support-accordion-item.is-open') || supportItems[0];
        if (presetOpen) {
            presetOpen.click();
        }
    }

    // Autocomplete search suggestions for search bars
    document.querySelectorAll('.search-bar-full input').forEach(input => {
        // Create suggestion container under this input
        let suggestBox = input.parentElement.querySelector('.search-suggestions');
        if (!suggestBox) {
            suggestBox = document.createElement('div');
            suggestBox.className = 'search-suggestions';
            input.parentElement.appendChild(suggestBox);
        }

        let activeIndex = -1;

        const closeSuggestions = () => {
            suggestBox.innerHTML = '';
            suggestBox.style.display = 'none';
            activeIndex = -1;
        };

        const openSuggestions = (items) => {
            suggestBox.innerHTML = '';
            if (!items.length) {
                closeSuggestions();
                return;
            }
            items.forEach((item, idx) => {
                const option = document.createElement('div');
                option.className = 'search-suggestion-item';
                option.textContent = item.label;
                option.dataset.url = item.url;
                option.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    window.location.href = item.url;
                });
                suggestBox.appendChild(option);
            });
            suggestBox.style.display = 'block';
            activeIndex = -1;
        };

        const getFilteredItems = (term) => {
            const q = term.toLowerCase();
            if (!q) return [];
            return searchItems.filter(it => {
                if (it.label.toLowerCase().includes(q)) return true;
                return it.keywords && it.keywords.some(k => k.toLowerCase().includes(q));
            });
        };

        input.addEventListener('input', () => {
            const term = input.value.trim();
            const items = getFilteredItems(term);
            openSuggestions(items);
        });

        input.addEventListener('keydown', (e) => {
            const items = Array.from(suggestBox.querySelectorAll('.search-suggestion-item'));
            if (!items.length) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = (activeIndex + 1) % items.length;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = (activeIndex - 1 + items.length) % items.length;
            } else if (e.key === 'Enter') {
                if (activeIndex >= 0 && activeIndex < items.length) {
                    e.preventDefault();
                    const url = items[activeIndex].dataset.url;
                    if (url) window.location.href = url;
                }
                return;
            } else if (e.key === 'Escape') {
                closeSuggestions();
                return;
            } else {
                return; // let input handler manage filtering
            }

            items.forEach((el, idx) => {
                el.classList.toggle('active', idx === activeIndex);
            });
        });

        document.addEventListener('click', (evt) => {
            if (!input.parentElement.contains(evt.target)) {
                closeSuggestions();
            }
        });
    });

    // Mega Dropdown Hover Fix - Keep menu open when moving from trigger to menu
    const megaTriggers = document.querySelectorAll('.mega-dropdown-trigger');
    const megaMenus = document.querySelectorAll('.mega-dropdown-menu');
    
    megaTriggers.forEach(trigger => {
        const menu = trigger.querySelector('.mega-dropdown-menu');
        let hoverTimeout;
        
        trigger.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            if (menu) menu.style.display = 'block';
        });
        
        trigger.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                if (menu && !menu.matches(':hover')) {
                    menu.style.display = 'none';
                }
            }, 100); // Small delay to allow moving to menu
        });
        
        if (menu) {
            menu.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                menu.style.display = 'block';
            });
            
            menu.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(() => {
                    menu.style.display = 'none';
                }, 100);
            });
        }
    });
});
// Floating "back to top" button behavior
document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById('scrollToTopBtn');
  if (!topBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      topBtn.classList.remove('hidden');
    } else {
      topBtn.classList.add('hidden');
    }
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility);

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});