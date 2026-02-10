const products = [
  {
    name: "Silence Panel Standard",
    slug: "silence-panel",
    thickness: "10–15 мм",
    effect: "Бытовой шум",
    price: "от 13 000 ₸/м²",
    desc: "Стены, перегородки (квартира, офис)",
    details: "Композитная панель, 3 слоя, бескаркасный монтаж",
    features: [
      "Композитное решение «всё в одном» — шумоизоляция + демпфирование + отделка",
      "Тонкий профиль (10–15 мм) — не «крадёт» пространство",
      "Хорошо снижает бытовой и уличный шум",
      "Быстрый и простой монтаж без каркаса",
      "Универсален для стен и перегородок"
    ]
  },
  {
    name: "SoundGuard GF26",
    slug: "soundguard-gf26",
    thickness: "~42 мм",
    effect: "Громкий воздушный шум",
    price: "от 25 000 ₸/м²",
    desc: "Стены с повышенным уровнем шума",
    details: "Кварцевое наполнение, 4 слоя, бескаркасная система",
    features: [
      "Многослойная система с акцентом на эффективность",
      "Виброизоляционный слой снижает передачу звука через конструкции",
      "Подходит для помещений с повышенным уровнем шума",
      "Увеличенная толщина для лучшей защиты от низких частот",
      "Система готова к финишной отделке"
    ]
  },
  {
    name: "Шумостоп-Техно",
    slug: "shumostop",
    thickness: "~33 мм",
    effect: "Ударный шум",
    price: "от 35 000 ₸/м²",
    desc: "Полы, перекрытия, ударный шум",
    details: "Сэндвич-панель, 3 слоя, под стяжку",
    features: [
      "Специализирован для пола и перекрытий",
      "Сэндвич-панель с упругим вибропоглощающим слоем",
      "Отлично гасит ударный шум (шаги, падения предметов)",
      "Стабильная прочная структура",
      "Может использоваться под стяжку или в «плавающем» полу"
    ]
  }
];

let idx = 0;
const listContainer = document.querySelector(".slide-list");
const left = document.querySelector(".arrow.left");
const right = document.querySelector(".arrow.right");
const visual = document.querySelector(".product-visual");
const heroTitle = document.querySelector(".pv-text .hero-title");
const heroSub = document.querySelector(".pv-text .hero-sub");

function renderList() {
  listContainer.innerHTML = "";
  products.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "slide-item" + (i === idx ? " active" : "");
    
    const bullet = document.createElement("div");
    bullet.className = "bullet";
    
    const text = document.createElement("div");
    text.textContent = p.name;
    
    row.appendChild(bullet);
    row.appendChild(text);
    
    row.addEventListener("click", () => {
      idx = i;
      updateVisual();
      renderList();
    });
    
    listContainer.appendChild(row);
  });
}

function updateVisual() {
  const tone = ["#2b2f3a", "#303543", "#343a4a"];
  const a = tone[idx % tone.length];
  visual.style.background = `linear-gradient(180deg, ${a}, #0f1218)`;
  
  // Update text content
  const product = products[idx];
  heroTitle.textContent = product.name;
  heroSub.textContent = product.desc;
}

function next() {
  idx = (idx + 1) % products.length;
  updateVisual();
  renderList();
}

function prev() {
  idx = (idx - 1 + products.length) % products.length;
  updateVisual();
  renderList();
}

left.addEventListener("click", prev);
right.addEventListener("click", next);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// Initial render
renderList();
updateVisual();

const catalogGrid = document.getElementById("catalogGrid");

function renderCatalog() {
  catalogGrid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = p.name;
    
    const specs = document.createElement("div");
    specs.className = "card-specs";
    specs.innerHTML = `
      <div>${p.thickness} • ${p.effect}</div>
      <div style="margin-top:4px; opacity:0.7">${p.details}</div>
      <div style="margin-top:8px; color:#fff; font-weight:500">${p.price}</div>
    `;
    
    const actions = document.createElement("div");
    actions.className = "card-actions";
    
    const buy = document.createElement("a");
    buy.className = "btn btn-primary";
    buy.href = "#contacts";
    buy.textContent = "Заказать";
    
    const more = document.createElement("a");
    more.className = "btn btn-secondary";
    more.href = "#about";
    more.textContent = "Подробнее";
    
    actions.appendChild(buy);
    actions.appendChild(more);
    
    card.appendChild(title);
    card.appendChild(specs);
    card.appendChild(actions);
    
    catalogGrid.appendChild(card);
  });
}

renderCatalog();

// Selection Tool Logic
const selectionInput = document.getElementById("userRequest");
const selectionBtn = document.getElementById("findSolutionBtn");
const selectionResult = document.getElementById("selectionResult");

const keywords = {
  "silence-panel": ["стен", "перегородк", "квартир", "офис", "бытов", "разговор", "телевизор"],
  "soundguard-gf26": ["громк", "музык", "караоке", "кинотеатр", "тонкие", "сильн"],
  "shumostop": ["пол", "стяжк", "шаги", "топот", "стук", "вибрац", "ударн", "прыг"]
};

function findSolution() {
  const query = selectionInput.value.toLowerCase();
  if (!query) return;
  
  let bestMatch = null;
  let maxScore = 0;
  
  products.forEach(p => {
    let score = 0;
    const keys = keywords[p.slug] || [];
    keys.forEach(k => {
      if (query.includes(k)) score++;
    });
    
    if (score > maxScore) {
      maxScore = score;
      bestMatch = p;
    }
  });
  
  selectionResult.innerHTML = "";
  
  if (bestMatch && maxScore > 0) {
    const msg = document.createElement("div");
    msg.className = "selection-message";
    msg.textContent = `Мы рекомендуем: ${bestMatch.name}`;
    
    // Create a mini card result
    const card = document.createElement("div");
    card.className = "card";
    card.style.maxWidth = "400px";
    card.innerHTML = `
      <div class="card-title">${bestMatch.name}</div>
      <div class="card-specs">
        <div>${bestMatch.thickness} • ${bestMatch.effect}</div>
        <div style="margin-top:8px; color:#fff">${bestMatch.price}</div>
      </div>
      <div class="card-actions">
        <a href="#contacts" class="btn btn-primary">Заказать</a>
        <a href="#" class="btn btn-secondary details-btn">Подробнее</a>
      </div>
    `;
    
    card.querySelector(".details-btn").addEventListener("click", (e) => {
      e.preventDefault();
      openModal(bestMatch);
    });
    
    selectionResult.appendChild(msg);
    selectionResult.appendChild(card);
  } else {
    selectionResult.innerHTML = `<div style="color:#aeb0b6">Мы не нашли точного совпадения. Пожалуйста, <a href="#contacts" style="color:#2d7cff">свяжитесь с нами</a> для консультации.</div>`;
  }
}

selectionBtn.addEventListener("click", findSolution);
selectionInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") findSolution();
});

// Modal Logic
const modal = document.getElementById("featuresModal");
const modalTitle = modal.querySelector(".modal-title");
const modalList = modal.querySelector(".modal-list");
const modalClose = modal.querySelector(".modal-close");
const sliderMoreBtn = document.querySelector(".pv-actions .btn-action:nth-child(2)");

function openModal(product) {
  modalTitle.textContent = product.name;
  modalList.innerHTML = "";
  
  if (product.features && product.features.length > 0) {
    product.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      modalList.appendChild(li);
    });
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Slider "Details" button
sliderMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal(products[idx]);
});

// Close events
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});

// Update catalog buttons to open modal
function renderCatalog() {
  catalogGrid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = p.name;
    
    const specs = document.createElement("div");
    specs.className = "card-specs";
    specs.innerHTML = `
      <div>${p.thickness} • ${p.effect}</div>
      <div style="margin-top:4px; opacity:0.7">${p.details}</div>
      <div style="margin-top:8px; color:#fff; font-weight:500">${p.price}</div>
    `;
    
    const actions = document.createElement("div");
    actions.className = "card-actions";
    
    const buy = document.createElement("a");
    buy.className = "btn btn-primary";
    buy.href = "#contacts";
    buy.textContent = "Заказать";
    
    const more = document.createElement("a");
    more.className = "btn btn-secondary";
    more.href = "#";
    more.textContent = "Подробнее";
    more.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(p);
    });
    
    actions.appendChild(buy);
    actions.appendChild(more);
    
    card.appendChild(title);
    card.appendChild(specs);
    card.appendChild(actions);
    
    catalogGrid.appendChild(card);
  });
}

renderCatalog();
