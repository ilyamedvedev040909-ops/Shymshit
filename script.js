// --- DATABASE 0.1 START ---
const DATABASE_0_1 = {
  "silence-panel": `Это тонкая композитная шумоизоляционная панель, предназначенная в первую очередь для стен и перегородок в жилых и офисных помещениях. Конструкция состоит из трёх функциональных слоёв: внешний декоративный слой, демпферный слой и основной звукоизоляционный слой. В качестве материалов используются плотные композитные панели, акустический демпфер и звукопоглощающая плита средней плотности. Общая толщина панели варьируется от 10 до 15 миллиметров, что позволяет эффективно снижать бытовой и уличный шум без существенного уменьшения полезной площади помещения. Панель монтируется бескаркасным способом, подходит для быстрого ремонта и относится к базовому ценовому сегменту. Средняя стоимость начинается от 13 000 тенге за квадратный метр. Основное преимущество — универсальность и минимальная толщина при сохранении акустического эффекта.`,

  "soundguard-gf26": `Усиленная многослойная шумоизоляционная система для помещений с повышенным уровнем шума. Данный щит ориентирован на эффективную защиту от воздушного шума, включая разговоры, телевизоры и музыкальные источники. Конструкция состоит из четырёх слоёв: внешний гипсокартонный лист, виброизоляционный слой, кварцевый звукоизоляционный наполнитель повышенной плотности и внутренний гипсокартонный слой. Общая толщина системы составляет около 42 миллиметров. За счёт высокой массы и виброразвязки достигается дополнительная звукоизоляция в пределах 10–13 дБ. Монтаж осуществляется бескаркасным способом с последующей финишной отделкой. Продукт относится к среднему и выше среднего ценовому сегменту, стартовая цена — от 25 000 тенге за квадратный метр. Основная особенность — эффективность против низких и средних частот.`,

  "shumostop": `Специализированная шумоизоляционная панель для полов и межэтажных перекрытий. Основное назначение — защита от ударного шума, такого как шаги, вибрации и падение предметов. Панель выполнена в виде сэндвич-конструкции, состоящей из верхней жёсткой плиты, центрального вибропоглощающего упругого слоя и нижней несущей плиты. В качестве вибропоглощающего материала применяется упругий эластомерный слой типа Sylomer® или его аналог. Общая толщина панели составляет около 33 миллиметров. Щит отличается высокой механической прочностью и стабильностью под нагрузкой, используется под стяжку или в системе «плавающего пола». Продукт относится к премиальному сегменту, средняя цена начинается от 35 000 тенге за квадратный метр. Ключевая особенность — эффективное подавление ударного шума без потери несущих свойств пола.`
};

const KNOWLEDGE_BASE_RULES = `
Система обучена понимать любые описания проблем с шумом, даже если они сформулированы неточно, эмоционально, бытовым языком или в неловкой форме. Пользователь может описывать проблему своими словами, без технических терминов, включая разговорные, субъективные и приблизительные формулировки. К таким описаниям относятся, но не ограничиваются: слышно соседей за стеной, слышны разговоры, будто они в комнате, топот сверху, шаги, бег детей, скрипы пола, удары, вибрации, гул, низкочастотный шум, ощущение дрожи в стенах или полу, звук лифта, шум инженерных систем, телевизор или музыка через стену, шум с улицы, дорога под окнами, машины, стройка, эхо в помещении, ощущение пустоты или «звенящей» комнаты, шум снизу, шум сбоку, шум ночью, мешает спать, мешает работать, раздражает постоянный звук, не могу сосредоточиться, слышно даже шёпот, тонкие стены, плохая шумоизоляция, панельный дом, новостройка, старый дом, офисное помещение, студия, спальня, гостиная, коридор.
Любые подобные описания интерпретируются как входные данные для анализа акустической проблемы и автоматически классифицируются по типу шума: воздушный шум, ударный шум или вибрационный шум, а также по источнику: сверху, снизу, сбоку, через стены, через перекрытия или с улицы.
`;
// --- DATABASE 0.1 END ---

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
  "silence-panel": [
    // Стены, бытовой шум, разговоры
    "стен", "перегород", "сосед", "разговор", "голос", "шепот", "шёпот", "бубнеж", 
    "телевизор", "тонкие", "панельн", "новостройк", "офис", "спальн", "мешает спать", 
    "слышн", "храп", "сбоку", "комнат", "эхо", "пустот", "звенящ", "плохая"
  ],
  "soundguard-gf26": [
    // Громкий шум, низкие частоты, улица
    "громк", "музык", "караоке", "кино", "улиц", "машин", "дорог", "лифт", 
    "инженерн", "гул", "низкочастотн", "бас", "сабвуфер", "крик", "лай", 
    "собак", "стройка", "ночью", "раздражает", "студия"
  ],
  "shumostop": [
    // Пол, потолок, ударный шум, вибрации
    "пол", "потол", "верх", "низ", "топот", "шаг", "бег", "дет", "скрип", 
    "удар", "вибрац", "дрож", "прыг", "стул", "мебел", "пятк", "снизу", "сверху"
  ]
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
      if (query.includes(k)) score += 2; // Exact keyword match weight
    });
    
    // Additional logic for imprecise matching based on rules
    if (p.slug === "shumostop" && (query.includes("сверху") || query.includes("потол") || query.includes("снизу") || query.includes("пол"))) {
      score += 3; // Boost for direction indicators
    }
    if (p.slug === "soundguard-gf26" && (query.includes("очень") || query.includes("сильн") || query.includes("ужас"))) {
      score += 1; // Boost for intensity
    }
    
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
  
  // Inject DATABASE_0_1 content if available
  if (DATABASE_0_1[product.slug]) {
    const desc = document.createElement("p");
    desc.style.color = "#aeb0b6";
    desc.style.lineHeight = "1.6";
    desc.style.marginBottom = "20px";
    desc.textContent = DATABASE_0_1[product.slug];
    modalList.appendChild(desc);
  }
  
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
