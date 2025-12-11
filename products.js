// Lightweight catalog data and rendering for collection page
const catalog = [
  {
    id: 'slim-case',
    title: 'Slim Case',
    price: 649,
    originalPrice: 899,
    badge: 'Lightweight',
    image: 'images/Slimcase.jpg',
    hoverImage: 'images/Slimcase1.jpg',
    category: 'phonecase',
    desc: 'Lightweight protection for minimalists.',
    rating: 4.0,
    reviews: 120
  },
  {
    id: 'rugged-case',
    title: 'Rugged Case',
    price: 999,
    originalPrice: 1299,
    badge: 'Shockproof',
    image: 'images/ruggedcase.jpg',
    hoverImage: 'images/ruggedcase1.jpg',
    category: 'phonecase',
    desc: 'Heavy-duty case for maximum protection.',
    rating: 4.2,
    reviews: 98
  },
  {
    id: 'wallet-case',
    title: 'Wallet Case',
    price: 699,
    originalPrice: 999,
    badge: 'Storage',
    image: 'images/walletcase.jpg',
    hoverImage: 'images/walletcase1.jpg',
    category: 'phonecase',
    desc: 'Case with card pockets and storage.',
    rating: 4.1,
    reviews: 76
  },
  {
    id: 'anker',
    title: 'Anker MagGo Power Bank',
    price: 1299,
    originalPrice: 1999,
    badge: 'Bestseller',
    image: 'images/Magsafe powerbank.png',
    hoverImage: 'images/Magsafe powerbank1.jpg',
    category: 'powerbank',
    desc: '10000mAh Magsafe wireless power bank for iPhone.',
    rating: 4.2,
    reviews: 234
  },
  {
    id: 'spigen',
    title: 'Spigen ArcPack',
    price: 1499,
    originalPrice: 1999,
    badge: 'MagSafe',
    image: 'images/Spigen1.jpg',
    hoverImage: 'images/Spigen2.jpg',
    category: 'powerbank',
    desc: 'Qi2 certified Magsafe fast charging performance.',
    rating: 4.0,
    reviews: 189
  },
  {
    id: 'ankerpower',
    title: 'Anker Power Bank 20000 mAh with 3-Port',
    price: 1399,
    originalPrice: 1799,
    badge: 'Fast Charge',
    image: 'images/ankerpower.jpg',
    hoverImage: 'images/ankerpower1.jpg',
    category: 'powerbank',
    desc: 'Compact 20000mAh fast charge portable bank.',
    rating: 3.9,
    reviews: 312
  },
  {
    id: 'spigenpower2',
    title: 'Spigen ArcPack 30000mAh Power Bank',
    price: 1999,
    originalPrice: 3499,
    badge: 'New',
    image: 'images/spigen30kmah.jpg',
    hoverImage: 'images/spigen30kmah2.jpg',
    category: 'powerbank',
    desc: 'High-capacity wireless magnetic portable charger.',
    rating: 4.5,
    reviews: 98
  },
  {
    id: 'honeywell',
    title: 'Honeywell Dual USB with LED Display Car Charger',
    price: 599,
    originalPrice: 799,
    badge: 'Popular',
    image: 'images/honeywellcar.jpg',
    hoverImage: 'images/honeywellcar1.jpg',
    category: 'charger',
    desc: '24W Dual USB Charger',
    rating: 4.1,
    reviews: 312
  },
  {
    id: 'ambrane',
    title: 'Ambrane 100W GaN Charger',
    price: 1999,
    originalPrice: 2499,
    badge: 'Popular',
    image: 'images/ambrane.jpg',
    hoverImage: 'images/ambrane1.jpg',
    category: 'charger',
    desc: '65W quick charge 3.0 wall adapter.',
    rating: 4.1,
    reviews: 312
  },
  {
    id: 'bestor',
    title: 'BESTOR® 60W USB C Multi Fast Charging Cable',
    price: 299,
    originalPrice: 499,
    badge: 'Popular',
    image: 'images/Bestro.jpg',
    hoverImage: 'images/Bestro1.jpg',
    category: 'charger',
    desc: '65W quick charge 3.0 wall adapter.',
    rating: 4.1,
    reviews: 312
  },
  {
    id: 'firebolt',
    title: 'JBL Wave Buds 2',
    price: 999,
    originalPrice: 1499,
    badge: 'New',
    image: 'images/spigenair.jpg',
    hoverImage: 'images/spigenair1.jpg',
    category: 'earbuds',
    desc: 'Active Noise Cancellation EarBuds.',
    rating: 4.3,
    reviews: 189
  },
   {
    id: 'ptron',
    title: 'pTron Boom Play X4 Dual Driver in-Ear Type C Wired Earphones',
    price: 499,
    originalPrice: 999,
    badge: 'New',
    image: 'images/ptron boom play.jpg',
    hoverImage: 'images/ptron boom play1.jpg',
    category: 'earbuds',
    desc: 'Ear Buds Custom EQ.',
    rating: 4.1,
    reviews: 189
  },
 {
    id: 'truke',
    title: 'truke New Launch [2025]',
    price: 899,
    originalPrice: 1299,
    badge: 'New',
    image: 'images/trukeair.jpg',
    hoverImage: 'images/trukeair1.jpg',
    category: 'earbuds',
    desc: 'in-Ear Earbuds w/ 24-Bit 360 Spatial Audio.',
    rating: 4.1,
    reviews: 189
  },
  {
    id: 'ptronspeaker',
    title: 'Ptron Bluetooth Speaker',
    price: 799,
    originalPrice: 1299,
    badge: 'Bestseller',
    image: 'images/ptronspeaker.jpg',
    hoverImage: 'images/ptronspeaker1.jpg',
    category: 'speaker',
    desc: 'Portable Bluetooth speaker with deep bass.',
    rating: 4.0,
    reviews: 145
  },
  {
    id: 'dubstep',
    title: 'Dubstep Pop 1200',
    price: 699,
    originalPrice: 1199,
    badge: 'Bestseller',
    image: 'images/dubstep.jpg',
    hoverImage: 'images/dubstep1.jpg',
    category: 'speaker',
    desc: 'Portable Bluetooth speaker with deep bass.',
    rating: 4.0,
    reviews: 145
  },
  {
    id: 'fireboltsmart',
    title: 'Firebolt Axiom',
    price: 1499,
    originalPrice: 2499,
    badge: 'Smart',
    image: 'images/firebolt.jpg',
    hoverImage: 'images/firebolt1.jpg',
    category: 'smartwatch',
    desc: 'Advanced smartwatch with health tracking.',
    rating: 4.2,
    reviews: 215
  },
  {
    id: 'boatsmart',
    title: 'boAt Lunar Discovery',
    price: 1299,
    originalPrice: 2499,
    badge: 'Smart',
    image: 'images/boatsmart.jpg',
    hoverImage: 'images/boatsmart1.jpg',
    category: 'smartwatch',
    desc: 'Advanced smartwatch with health tracking.',
    rating: 4.2,
    reviews: 215
  },
  {
    id: 'torras',
    title: 'TORRAS Mil-Grade',
    price: 299,
    originalPrice: 499,
    badge: 'Popular',
    image: 'images/Torrastem.jpg',
    hoverImage: 'images/Torrastem1.jpg',
    category: 'temperedglass',
    desc: 'Premium 9H tempered glass screen protector.',
    rating: 4.1,
    reviews: 445
  },
  {
    id: 'xtrength',
    title: 'XTRENGTH Advanced HD+',
    price: 199,
    originalPrice: 399,
    badge: 'Popular',
    image: 'images/screenpro.jpg',
    hoverImage: 'images/screenpro1.jpg',
    category: 'temperedglass',
    desc: 'Premium 9H tempered glass screen protector.',
    rating: 4.1,
    reviews: 445
  },
   {
    id: 'opentech',
    title: 'OpenTech® Privacy Tempered Glass',
    price: 289,
    originalPrice: 399,
    badge: 'Popular',
    image: 'images/opentechprivacy.jpg',
    hoverImage: 'images/opentechprivacy1.jpg',
    category: 'temperedglass',
    desc: 'Premium 9H tempered glass screen protector.',
    rating: 4.1,
    reviews: 445
  },
];

// State
let activeFilter = 'all';
let priceCap = 6000;
let inStockOnly = true; // demonstration toggle

// Read category from URL and set initial filter
const params = new URLSearchParams(window.location.search);
const categoryParam = (params.get('category') || '').toLowerCase();
const collectionNameMap = {
  'power-banks': 'Power Banks',
  'chargers': 'Chargers',
  'audio': 'Audio Accessories',
  'wearables': 'Smart Watches',
  'phone-cases': 'Mobile Cases',
  'screen-protectors': 'Screen Protectors',
};
if (categoryParam === 'power-banks') activeFilter = 'powerbank';
if (categoryParam === 'chargers') activeFilter = 'charger';
if (categoryParam === 'audio') activeFilter = 'earbuds';
if (categoryParam === 'wearables') activeFilter = 'smartwatch';
if (categoryParam === 'phone-cases') activeFilter = 'phonecase';
if (categoryParam === 'screen-protectors') activeFilter = 'temperedglass';

// DOM refs
const collectionNameEl = document.getElementById('collection-name');
const collectionTitleEl = document.getElementById('collection-title');
const grid = document.getElementById('products-grid');
const chipBar = document.getElementById('chip-bar');
const sortSelect = document.getElementById('sort-select');
const priceRange = document.getElementById('price-range');
const priceMaxLabel = document.getElementById('price-max');
const inStockCheckbox = document.getElementById('in-stock');

// Map chip filters to human-friendly names for header/breadcrumb
const chipLabelMap = {
  all: 'Products',
  phonecase: 'Mobile Cases',
  powerbank: 'Power Banks',
  charger: 'Chargers',
  earbuds: 'Wireless Earbuds',
  speaker: 'Speakers',
  smartwatch: 'Smart Watches',
  temperedglass: 'Screen Protectors',
};

// Initialize labels
const label = collectionNameMap[categoryParam] || 'Products';
collectionNameEl.textContent = label;
collectionTitleEl.textContent = label;

document.querySelectorAll('.chip').forEach(c => {
  c.classList.toggle('active', c.dataset.filter === activeFilter);
});

// Event listeners
chipBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  // Ripple effect on chip
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size/2}px`;
  ripple.style.top = `${e.clientY - rect.top - size/2}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  const chipLabel = chipLabelMap[activeFilter] || 'Products';
  collectionNameEl.textContent = chipLabel;
  collectionTitleEl.textContent = chipLabel;
  render();
});

sortSelect.addEventListener('change', render);

priceRange.addEventListener('input', () => {
  priceCap = Number(priceRange.value);
  priceMaxLabel.textContent = `₹${priceCap}`;
  render();
});

inStockCheckbox.addEventListener('change', () => {
  inStockOnly = inStockCheckbox.checked;
  render();
});

function applySort(items) {
  const value = sortSelect.value;
  if (value === 'price-asc') return items.sort((a,b) => a.price - b.price);
  if (value === 'price-desc') return items.sort((a,b) => b.price - a.price);
  return items; // featured default
}

function applyFilter(items) {
  return items.filter(p => {
    const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
    const matchesPrice = p.price <= priceCap;
    const matchesStock = inStockOnly ? true : true; // Placeholder; all items considered in stock
    return matchesCategory && matchesPrice && matchesStock;
  });
}

function render() {
  showSkeleton(8);
  const filtered = applyFilter([...catalog]);
  const sorted = applySort(filtered);
  setTimeout(() => {
    grid.innerHTML = '';
    sorted.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      const discountPct = Math.max(0, Math.round((1 - p.price / p.originalPrice) * 100));
      const stars = '★★★★★'.slice(0, Math.round(p.rating || 4));
      card.innerHTML = `
        <div class="product-image">
          <img class="product-img-default" src="${p.image}" alt="${p.title}">
          <img class="product-img-hover" src="${p.hoverImage || p.image}" alt="${p.title}">
        </div>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-info">
          <h3>${p.title}</h3>
          <p class="product-desc">${p.desc || ''}</p>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-count">(${p.reviews || 100})</span>
          </div>
          <div class="product-price">
            <span class="current-price">₹${p.price}</span>
            <span class="original-price">₹${p.originalPrice}</span>
            <span class="discount">${discountPct}% OFF</span>
          </div>
          <button class="add-to-cart-btn" onclick="window.location.href='product-detail.html?id=${p.id}'">ADD TO CART</button>
        </div>
      `;
      grid.appendChild(card);
    });
    initReveal();
  }, 250);
}

render();

// Show simple skeleton cards
function showSkeleton(count) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'skeleton-card';
    s.innerHTML = `
      <div class="skeleton-image"></div>
      <div class="skeleton-lines">
        <div class="skeleton-line" style="width:70%"></div>
        <div class="skeleton-line" style="width:50%"></div>
        <div class="skeleton-line" style="width:60%"></div>
      </div>
    `;
    grid.appendChild(s);
  }
}

// IntersectionObserver reveal
function initReveal() {
  const cards = document.querySelectorAll('.product-card.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach((c) => observer.observe(c));
}
