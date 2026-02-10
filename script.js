const products=[{name:"ULTRA SILENT",slug:"ultra-silent",thickness:"8 мм",stc:"38 дБ",size:"1200×800 мм",desc:"Для стен и потолков"},{name:"SUPER QUIET",slug:"super-quiet",thickness:"12 мм",stc:"42 дБ",size:"1200×800 мм",desc:"Для студий и офисов"},{name:"FLOOR SHIELD",slug:"floor-shield",thickness:"10 мм",stc:"36 дБ",size:"1200×600 мм",desc:"Для полов и перегородок"}]
let idx=0
const listContainer=document.querySelector(".slide-list")
const left=document.querySelector(".arrow.left")
const right=document.querySelector(".arrow.right")
const visual=document.querySelector(".product-visual")
function renderList(){listContainer.innerHTML="";products.forEach((p,i)=>{const row=document.createElement("div");row.className="slide-item"+(i===idx?" active":"");const bullet=document.createElement("div");bullet.className="bullet";const text=document.createElement("div");text.textContent=p.name;row.appendChild(bullet);row.appendChild(text);row.addEventListener("click",()=>{idx=i;updateVisual();renderList()});listContainer.appendChild(row)})}
function updateVisual(){const tone=["#2b2f3a","#303543","#343a4a"];const a=tone[idx%tone.length];visual.style.background=`linear-gradient(180deg,${a},#0f1218)`}
function next(){idx=(idx+1)%products.length;updateVisual();renderList()}
function prev(){idx=(idx-1+products.length)%products.length;updateVisual();renderList()}
left.addEventListener("click",prev)
right.addEventListener("click",next)
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")next();if(e.key==="ArrowLeft")prev()})
renderList();updateVisual()
const catalogGrid=document.getElementById("catalogGrid")
function renderCatalog(){catalogGrid.innerHTML="";products.forEach(p=>{const card=document.createElement("div");card.className="card";const title=document.createElement("div");title.className="card-title";title.textContent=p.name;const specs=document.createElement("div");specs.className="card-specs";specs.textContent=`Толщина ${p.thickness} • Индекс ${p.stc} • Формат ${p.size}`;const actions=document.createElement("div");actions.className="card-actions";const buy=document.createElement("a");buy.className="btn btn-primary";buy.href="#contacts";buy.textContent="Заказать";const more=document.createElement("a");more.className="btn btn-secondary";more.href="#about";more.textContent="Подробнее";actions.appendChild(buy);actions.appendChild(more);card.appendChild(title);card.appendChild(specs);card.appendChild(actions);catalogGrid.appendChild(card)})}
renderCatalog()
