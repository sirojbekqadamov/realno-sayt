/* NEXORA MOBILE — frontend demo. Prices and inventory are illustrative only. */
const BRANDS = [
  "Apple", "Samsung", "Xiaomi", "Redmi", "POCO", "Huawei", "Honor", "OPPO", "OnePlus", "Vivo", "iQOO",
  "Realme", "Infinix", "TECNO", "Google Pixel", "Motorola", "Sony Xperia", "ASUS", "Nothing", "ZTE",
  "nubia", "Lenovo", "Nokia", "HMD", "Meizu", "Sharp", "TCL", "Fairphone", "CAT", "OUKITEL", "Ulefone",
  "Doogee", "Blackview", "Vertu", "HTC", "LG", "Alcatel", "Itel", "Lava", "Micromax", "Panasonic",
  "Kyocera", "Hisense", "Unihertz", "BlackBerry", "Ericsson", "Philips", "Gionee", "LeEco", "Essential",
  "Acer", "Casio", "Sagem", "Siemens", "BenQ", "Sharp Aquos", "Wiko", "Yota", "Punkt", "Jolla", "Razer"
];

const PRODUCTS = [
  { id:"ip16pm", brand:"Apple", model:"iPhone 16 Pro Max", price:18499000, oldPrice:19999000, image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"8 GB", screen:'6.9"', battery:"4685 mAh", camera:"48 + 48 + 12 MP", description:"Titanium korpus, ProMotion displey va professional darajadagi kamera tizimiga ega premium smartfon.", colors:["Tabiiy titan","Qora titan","Cho'l titani"], condition:"new", isNew:true, discount:8, popularity:98, category:"premium", configurations:[{storage:"256 GB",price:18499000},{storage:"512 GB",price:20499000},{storage:"1 TB",price:24499000}] },
  { id:"s25u", brand:"Samsung", model:"Galaxy S25 Ultra", price:16999000, oldPrice:17999000, image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"12 GB", screen:'6.9"', battery:"5000 mAh", camera:"200 + 50 + 10 + 50 MP", description:"Galaxy AI imkoniyatlari, katta AMOLED ekran va ko'p qirrali kamera bilan flagman tajribasi.", colors:["Titanium Silverblue","Titanium Black","Titanium Whitesilver"], condition:"new", isNew:true, discount:6, popularity:96, category:"premium", configurations:[{storage:"256 GB",price:16999000},{storage:"512 GB",price:18499000},{storage:"1 TB",price:21999000}] },
  { id:"xia15u", brand:"Xiaomi", model:"Xiaomi 15 Ultra", price:14999000, oldPrice:15999000, image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=85", storage:"512 GB", ram:"16 GB", screen:'6.73"', battery:"5410 mAh", camera:"50 + 50 + 50 + 200 MP", description:"Leica bilan hamkorlikda yaratilgan kamera tizimi va yuqori unumdorlikka ega flagman.", colors:["Qora","Oq","Kumush xrom"], condition:"new", isNew:true, discount:6, popularity:91, category:"premium", configurations:[{storage:"256 GB",price:13999000},{storage:"512 GB",price:14999000}] },
  { id:"pixel9p", brand:"Google Pixel", model:"Pixel 9 Pro", price:12999000, oldPrice:null, image:"https://images.unsplash.com/photo-1598327106026-d9521da673d1?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"16 GB", screen:'6.3"', battery:"4700 mAh", camera:"50 + 48 + 48 MP", description:"Google AI vositalari va sof Android tajribasi birlashgan ixcham Pro smartfon.", colors:["Obsidian","Porcelain","Hazel"], condition:"new", isNew:true, discount:0, popularity:84, category:"premium", configurations:[{storage:"128 GB",price:11999000},{storage:"256 GB",price:12999000}] },
  { id:"one13", brand:"OnePlus", model:"OnePlus 13", price:11999000, oldPrice:12999000, image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=85", storage:"512 GB", ram:"16 GB", screen:'6.82"', battery:"6000 mAh", camera:"50 + 50 + 50 MP", description:"Tezkor ishlash, ravon ekran va Hasselblad rang sozlamalariga ega kuchli flagman.", colors:["Midnight Ocean","Arctic Dawn","Black Eclipse"], condition:"new", isNew:true, discount:8, popularity:88, category:"popular", configurations:[{storage:"256 GB",price:10999000},{storage:"512 GB",price:11999000}] },
  { id:"honormagic7", brand:"Honor", model:"Magic7 Pro", price:13999000, oldPrice:null, image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=85", storage:"512 GB", ram:"12 GB", screen:'6.8"', battery:"5850 mAh", camera:"50 + 200 + 50 MP", description:"Yorqin ekran, kuchli kamera va uzoq ishlaydigan batareya bilan premium tajriba.", colors:["Black","Lunar Shadow Grey","Breeze Blue"], condition:"new", isNew:true, discount:0, popularity:82, category:"premium", configurations:[{storage:"256 GB",price:12999000},{storage:"512 GB",price:13999000}] },
  { id:"iphone15", brand:"Apple", model:"iPhone 15", price:9499000, oldPrice:10499000, image:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=85", storage:"128 GB", ram:"6 GB", screen:'6.1"', battery:"3349 mAh", camera:"48 + 12 MP", description:"Dinamik orol, 48 MP asosiy kamera va kundalik foydalanish uchun muvozanatli imkoniyatlar.", colors:["Qora","Ko'k","Yashil","Pushti"], condition:"new", isNew:false, discount:10, popularity:94, category:"popular", configurations:[{storage:"128 GB",price:9499000},{storage:"256 GB",price:10999000}] },
  { id:"s24fe", brand:"Samsung", model:"Galaxy S24 FE", price:7999000, oldPrice:8999000, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"8 GB", screen:'6.7"', battery:"4700 mAh", camera:"50 + 12 + 8 MP", description:"Galaxy AI, yorqin AMOLED ekran va ko'p vazifali ishlash uchun qulay smartfon.", colors:["Graphite","Blue","Mint"], condition:"new", isNew:false, discount:11, popularity:89, category:"deals", configurations:[{storage:"128 GB",price:6999000},{storage:"256 GB",price:7999000}] },
  { id:"poco-x7", brand:"POCO", model:"POCO X7 Pro", price:5799000, oldPrice:6499000, image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"12 GB", screen:'6.67"', battery:"6000 mAh", camera:"50 + 8 MP", description:"Yuqori yangilanish tezligi, katta batareya va o'yinlar uchun kuchli protsessor.", colors:["Black","Yellow","Green"], condition:"new", isNew:true, discount:11, popularity:87, category:"deals", configurations:[{storage:"256 GB",price:5799000},{storage:"512 GB",price:6499000}] },
  { id:"redmi-note14", brand:"Redmi", model:"Redmi Note 14 Pro+", price:4999000, oldPrice:5499000, image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"12 GB", screen:'6.67"', battery:"5110 mAh", camera:"200 + 8 + 2 MP", description:"Yuqori aniqlikdagi kamera va kundalik foydalanishga mos katta, ravon displey.", colors:["Midnight Black","Aurora Purple","Coral Green"], condition:"new", isNew:true, discount:9, popularity:85, category:"deals", configurations:[{storage:"256 GB",price:4999000},{storage:"512 GB",price:5599000}] },
  { id:"nothing3a", brand:"Nothing", model:"Phone (3a) Pro", price:6499000, oldPrice:null, image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"12 GB", screen:'6.77"', battery:"5000 mAh", camera:"50 + 50 + 8 MP", description:"O'ziga xos shaffof dizayn, Glyph interfeysi va telefoto kamerali yangi avlod modeli.", colors:["Black","Grey"], condition:"new", isNew:true, discount:0, popularity:79, category:"new", configurations:[{storage:"128 GB",price:5799000},{storage:"256 GB",price:6499000}] },
  { id:"motorola-edge50", brand:"Motorola", model:"Edge 50 Pro", price:6999000, oldPrice:7499000, image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=85", storage:"256 GB", ram:"12 GB", screen:'6.7"', battery:"4500 mAh", camera:"50 + 13 + 10 MP", description:"Yupqa dizayn, ranglarga boy pOLED ekran va tez quvvatlash imkoniyatiga ega model.", colors:["Luxe Lavender","Black Beauty","Moonlight Pearl"], condition:"new", isNew:false, discount:7, popularity:77, category:"popular", configurations:[{storage:"256 GB",price:6999000}] },
  { id:"vivo-x200", brand:"Vivo", model:"X200 Pro", price:14499000, oldPrice:15499000, image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=85", storage:"512 GB", ram:"16 GB", screen:'6.78"', battery:"6000 mAh", camera:"50 + 200 + 50 MP", description:"Zeiss optikasi, portret suratga olish va kuchli batareyaga urg'u berilgan flagman.", colors:["Titanium Grey","Midnight Black"], condition:"new", isNew:true, discount:6, popularity:81, category:"premium", configurations:[{storage:"256 GB",price:13499000},{storage:"512 GB",price:14499000}] },
  { id:"iphone13-used", brand:"Apple", model:"iPhone 13 (ishlatilgan demo)", price:4999000, oldPrice:null, image:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=600&q=85", storage:"128 GB", ram:"4 GB", screen:'6.1"', battery:"3227 mAh", camera:"12 + 12 MP", description:"Holat filtrini ko'rsatish uchun qo'shilgan shartli ishlatilgan qurilma namunasi.", colors:["Midnight","Starlight"], condition:"used", isNew:false, discount:0, popularity:61, category:"popular", configurations:[{storage:"128 GB",price:4999000}] },
  { id:"tecno-camon", brand:"TECNO", model:"Camon 30 Premier", price:5999000, oldPrice:6499000, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=85", storage:"512 GB", ram:"12 GB", screen:'6.77"', battery:"5000 mAh", camera:"50 + 50 + 50 MP", description:"Portret va tungi suratga olishga mo'ljallangan kamera tizimi bilan o'rta yuqori segment.", colors:["黑曜石黑","雪域白"], condition:"new", isNew:false, discount:8, popularity:69, category:"deals", configurations:[{storage:"512 GB",price:5999000}] }
];

const STORAGE_KEYS = {
  cart: "nexora_cart_v1",
  favorites: "nexora_favorites_v1",
  users: "nexora_demo_users_v1",
  currentUser: "nexora_demo_current_user_v1",
  orders: "nexora_demo_orders_v1"
};
const money = new Intl.NumberFormat("uz-UZ", { maximumFractionDigits: 0 });
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);
const formatPrice = (price) => `${money.format(price)} so'm`;
const readStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`NEXORA: ${key} ma'lumotlarini o'qib bo'lmadi.`, error);
    return fallback;
  }
};
const saveStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`NEXORA: ${key} ma'lumotlarini saqlab bo'lmadi.`, error);
    showToast("Brauzerda saqlash amalga oshmadi. Xotira sozlamalarini tekshiring.", true);
    return false;
  }
};
const state = {
  cart: readStorage(STORAGE_KEYS.cart, []),
  favorites: readStorage(STORAGE_KEYS.favorites, []),
  user: readStorage(STORAGE_KEYS.currentUser, null),
  filters: { query:"", brand:"", min:"", max:"", ram:"", storage:"", condition:"", discount:false, isNew:false, sort:"popular" }
};
let toastTimer;
const dialog = $("#app-dialog");
const dialogContent = $("#dialog-content");

function phoneFallback(label) {
  const safeLabel = String(label).replace(/[<>&]/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="460" viewBox="0 0 280 460"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#a69aff"/><stop offset=".5" stop-color="#343068"/><stop offset="1" stop-color="#11131a"/></linearGradient></defs><rect x="42" y="10" width="196" height="440" rx="32" fill="#393a45"/><rect x="49" y="18" width="182" height="424" rx="27" fill="url(#g)"/><rect x="111" y="27" width="58" height="13" rx="8" fill="#090a0d"/><circle cx="88" cy="69" r="20" fill="#101219" stroke="#666879" stroke-width="5"/><circle cx="88" cy="69" r="9" fill="#64708c"/><text x="140" y="253" fill="#fff" font-family="Arial" font-size="17" text-anchor="middle">${safeLabel}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = `toast${isError ? " error" : ""}`;
  toast.setAttribute("role", isError ? "alert" : "status");
  toast.textContent = message;
  $("#toast-region").append(toast);
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.remove(), 3400);
}

function renderBrands() {
  $("#brand-list").innerHTML = BRANDS.map((brand) =>
    `<button class="brand-chip" type="button" data-brand="${escapeHTML(brand)}">${escapeHTML(brand)}</button>`
  ).join("");
  $("#brand-filter").insertAdjacentHTML("beforeend", BRANDS.map((brand) =>
    `<option value="${escapeHTML(brand)}">${escapeHTML(brand)}</option>`
  ).join(""));
  const ramValues = [...new Set(PRODUCTS.map((product) => product.ram))].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const storageValues = [...new Set(PRODUCTS.map((product) => product.storage))].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  $("#ram-filter").insertAdjacentHTML("beforeend", ramValues.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join(""));
  $("#storage-filter").insertAdjacentHTML("beforeend", storageValues.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join(""));
}

function productCard(product) {
  const favorite = state.favorites.includes(product.id);
  const discountTag = product.discount > 0 ? `<span class="product-badge discount">−${product.discount}%</span>` : "";
  const badge = product.isNew ? `<span class="product-badge">YANGI</span>` : "";
  return `<article class="product-card" data-product-card="${escapeHTML(product.id)}">
    <div class="product-visual" data-action="detail" data-id="${escapeHTML(product.id)}" role="button" tabindex="0" aria-label="${escapeHTML(product.brand)} ${escapeHTML(product.model)} tafsilotlarini ko'rish" style="--product-glow:${product.isNew ? "rgba(115,100,245,.2)" : "rgba(99,116,150,.16)"}">
      ${badge}${discountTag}
      <button class="heart-button${favorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-id="${escapeHTML(product.id)}" aria-label="${favorite ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
      <img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.brand)} ${escapeHTML(product.model)} telefoni" loading="lazy">
    </div>
    <div class="product-info">
      <span class="product-brand">${escapeHTML(product.brand)} · ${product.condition === "used" ? "Ishlatilgan demo" : "Yangi"}</span>
      <h3>${escapeHTML(product.model)}</h3>
      <div class="product-specs"><span>${escapeHTML(product.storage)}</span><span>${escapeHTML(product.ram)} RAM</span><span>${escapeHTML(product.screen)}</span></div>
      <div class="product-price"><strong>${formatPrice(product.price)}</strong>${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}<span class="sample-price-tag">Namunaviy demo narx</span></div>
      <div class="product-actions"><button class="add-cart" type="button" data-action="add-cart" data-id="${escapeHTML(product.id)}">Savatchaga +</button><button type="button" data-action="detail" data-id="${escapeHTML(product.id)}">Batafsil</button></div>
    </div>
  </article>`;
}

function renderProductGrid(target, products) {
  $(target).innerHTML = products.map(productCard).join("");
  $$(".product-image", $(target)).forEach((image) => {
    image.addEventListener("error", () => { image.src = phoneFallback(image.alt); }, { once:true });
  });
}

function updateCounters() {
  $("#cart-count").textContent = String(state.cart.reduce((sum, item) => sum + item.quantity, 0));
  $("#favorite-count").textContent = String(state.favorites.length);
  const profileButton = $("#profile-button");
  const profileLabel = profileButton.querySelector("span");
  profileLabel.textContent = state.user?.firstName || "Kirish";
  profileButton.setAttribute("aria-label", state.user ? `Profil: ${state.user.firstName}` : "Kirish");
}

function filteredProducts() {
  const filters = state.filters;
  const query = filters.query.trim().toLocaleLowerCase("uz");
  const result = PRODUCTS.filter((product) => {
    const searchable = `${product.brand} ${product.model}`.toLocaleLowerCase("uz");
    return (!query || searchable.includes(query))
      && (!filters.brand || product.brand === filters.brand)
      && (!filters.min || product.price >= Number(filters.min))
      && (!filters.max || product.price <= Number(filters.max))
      && (!filters.ram || product.ram === filters.ram)
      && (!filters.storage || product.storage === filters.storage)
      && (!filters.condition || product.condition === filters.condition)
      && (!filters.discount || product.discount > 0)
      && (!filters.isNew || product.isNew);
  });
  if (filters.sort === "price-asc") return result.sort((a, b) => a.price - b.price);
  if (filters.sort === "price-desc") return result.sort((a, b) => b.price - a.price);
  if (filters.sort === "newest") return result.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.popularity - a.popularity);
  return result.sort((a, b) => b.popularity - a.popularity);
}

function renderCatalog() {
  const products = filteredProducts();
  renderProductGrid("#catalog-grid", products);
  $("#result-count").textContent = `${products.length} ta model`;
  $("#empty-state").hidden = products.length > 0;
}

function refreshProductViews() {
  renderProductGrid("#popular-grid", PRODUCTS.filter((product) => product.category === "popular").sort((a, b) => b.popularity - a.popularity).slice(0, 4));
  renderProductGrid("#premium-grid", PRODUCTS.filter((product) => product.category === "premium").slice(0, 4));
  renderProductGrid("#deals-grid", PRODUCTS.filter((product) => product.discount > 0).sort((a, b) => b.discount - a.discount).slice(0, 4));
  renderCatalog();
  updateCounters();
}

function setFilter(name, value) {
  state.filters[name] = value;
  renderCatalog();
  $$(".brand-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.brand === state.filters.brand));
}

function openDialog(title, content) {
  dialogContent.innerHTML = `<h2 class="dialog-title" id="dialog-title">${escapeHTML(title)}</h2>${content}`;
  document.body.classList.add("dialog-open");
  if (!dialog.open) dialog.showModal();
}
function closeDialog() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function openDetail(id) {
  const product = PRODUCTS.find((entry) => entry.id === id);
  if (!product) return;
  const optionValues = product.configurations || [{ storage:product.storage, price:product.price }];
  const variants = optionValues.map((variant) => `<option value="${escapeHTML(variant.storage)}" data-price="${variant.price}" ${variant.storage === product.storage ? "selected" : ""}>${escapeHTML(variant.storage)} — ${formatPrice(variant.price)}</option>`).join("");
  const specs = [
    ["Xotira", product.storage], ["RAM", product.ram], ["Ekran", product.screen],
    ["Batareya", product.battery], ["Kamera", product.camera], ["Holati", product.condition === "used" ? "Ishlatilgan demo namuna" : "Yangi demo namuna"]
  ];
  const isFavorite = state.favorites.includes(product.id);
  const image = escapeHTML(product.image);
  openDialog(`${product.brand} ${product.model}`, `
    <div class="detail-layout">
      <div class="detail-image-wrap"><img src="${image}" alt="${escapeHTML(product.brand)} ${escapeHTML(product.model)} telefoni"></div>
      <div><span class="detail-meta">${escapeHTML(product.brand)} · NAMUNAVIY KATALOG</span><h3 class="detail-name">${escapeHTML(product.model)}</h3>
        <div class="detail-price" id="detail-price">${formatPrice(product.price)} ${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}</div>
        <p class="detail-description">${escapeHTML(product.description)}</p>
        <div class="detail-options">
          <label>Rang tanlang<select id="detail-color">${product.colors.map((color) => `<option>${escapeHTML(color)}</option>`).join("")}</select></label>
          <label>Xotira konfiguratsiyasi<select id="detail-storage">${variants}</select></label>
        </div>
        <div class="spec-table">${specs.map(([label, value]) => `<div class="spec-row"><span>${label}</span><span>${escapeHTML(value)}</span></div>`).join("")}</div>
        <p class="demo-warning">Narx va konfiguratsiyalar demo namuna. Mahsulot sotuvda borligini yoki haqiqiy narxni bildirmaydi.</p>
        <div class="dialog-actions"><button class="button button-primary" type="button" data-action="detail-add-cart" data-id="${escapeHTML(product.id)}">Savatchaga qo'shish</button><button class="button button-quiet" type="button" data-action="favorite" data-id="${escapeHTML(product.id)}">${isFavorite ? "♥ Sevimlida" : "♡ Sevimlilarga"}</button></div>
      </div>
    </div>
  `);
  const detailImage = $(".detail-image-wrap img");
  detailImage.addEventListener("error", () => { detailImage.src = phoneFallback(detailImage.alt); }, { once:true });
  $("#detail-storage").addEventListener("change", (event) => {
    const price = Number(event.target.selectedOptions[0].dataset.price);
    $("#detail-price").textContent = formatPrice(price);
  });
}

function addToCart(id, storage) {
  const product = PRODUCTS.find((entry) => entry.id === id);
  if (!product) return;
  const configuration = (product.configurations || []).find((item) => item.storage === storage) || { storage:product.storage, price:product.price };
  const key = `${id}:${configuration.storage}`;
  const existing = state.cart.find((item) => item.key === key);
  if (existing) existing.quantity += 1;
  else state.cart.push({ key, id, storage:configuration.storage, price:configuration.price, quantity:1 });
  if (saveStorage(STORAGE_KEYS.cart, state.cart)) {
    updateCounters();
    showToast(`${product.model} savatchaga qo'shildi.`);
  }
}

function renderCart() {
  const entries = state.cart.map((item) => ({ ...item, product:PRODUCTS.find((product) => product.id === item.id) })).filter((item) => item.product);
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const items = entries.length ? `<div class="cart-items">${entries.map(({ key, product, storage, price, quantity }) => `
    <article class="cart-row"><img class="cart-thumb" src="${escapeHTML(product.image)}" alt="">
      <div><h3>${escapeHTML(product.brand)} ${escapeHTML(product.model)}</h3><p>${escapeHTML(storage)} · ${formatPrice(price)}</p><button class="cart-delete" type="button" data-action="remove-cart" data-key="${escapeHTML(key)}">Olib tashlash</button></div>
      <div class="quantity-control"><button type="button" data-action="quantity" data-key="${escapeHTML(key)}" data-delta="-1" aria-label="Soni kamaytirish">−</button><span>${quantity}</span><button type="button" data-action="quantity" data-key="${escapeHTML(key)}" data-delta="1" aria-label="Soni oshirish">+</button></div>
    </article>`).join("")}</div>` : `<div class="empty-modal"><span>◇</span>Savatchangiz hozircha bo'sh.<br>O'zingizga yoqqan telefonni tanlang.</div>`;
  openDialog("Savatcha", `${items}${entries.length ? `<div class="cart-total"><span>Jami summa <small>(namunaviy)</small></span><strong>${formatPrice(total)}</strong></div><p class="demo-warning">Bu demo savatcha. Narxlar haqiqiy taklif emas va to'lov amalga oshirilmaydi.</p><div class="dialog-actions"><button class="button button-quiet" type="button" data-action="continue-shopping">Xaridni davom ettirish</button><button class="button button-primary" type="button" data-action="checkout">Demo buyurtma</button></div>` : `<div class="dialog-actions"><button class="button button-primary" type="button" data-action="continue-shopping">Katalogni ko'rish</button></div>`}`);
  $$(".cart-thumb").forEach((image) => image.addEventListener("error", () => { image.src = phoneFallback("NEXORA"); }, { once:true }));
}

function toggleFavorite(id) {
  if (!PRODUCTS.some((product) => product.id === id)) return;
  state.favorites = state.favorites.includes(id) ? state.favorites.filter((favorite) => favorite !== id) : [...state.favorites, id];
  if (saveStorage(STORAGE_KEYS.favorites, state.favorites)) {
    refreshProductViews();
    showToast(state.favorites.includes(id) ? "Sevimlilarga qo'shildi." : "Sevimlilardan olib tashlandi.");
    if (dialog.open && $("#dialog-title")?.textContent === "Sevimlilar") openFavorites();
    else if (dialog.open && $("#detail-storage")) openDetail(id);
  }
}

function openFavorites() {
  const favorites = state.favorites.map((id) => PRODUCTS.find((product) => product.id === id)).filter(Boolean);
  openDialog("Sevimlilar", favorites.length
    ? `<p class="dialog-subtitle">Saqlab qo'ygan telefonlaringiz shu yerda.</p><div class="product-grid">${favorites.map(productCard).join("")}</div>`
    : `<div class="empty-modal"><span>♡</span>Sevimlilarga hali telefon qo'shilmadi.</div><div class="dialog-actions"><button class="button button-primary" type="button" data-action="continue-shopping">Katalogni ko'rish</button></div>`);
  $$(".product-image", dialogContent).forEach((image) => image.addEventListener("error", () => { image.src = phoneFallback(image.alt); }, { once:true }));
}

function openAuth(mode = "login", errors = {}) {
  const registration = mode === "register";
  const fields = registration ? `
    <label class="form-field">Ism<input name="firstName" autocomplete="given-name" required maxlength="60"></label>
    <label class="form-field">Familiya<input name="lastName" autocomplete="family-name" required maxlength="60"></label>
    <label class="form-field">Telefon raqami<input name="phone" type="tel" autocomplete="tel" placeholder="+998 90 123 45 67" required></label>
    <label class="form-field">Elektron pochta<input name="email" type="email" autocomplete="email" required maxlength="120"></label>
    <label class="form-field full">Parol<div class="password-wrap"><input name="password" type="password" autocomplete="new-password" required minlength="8"><button class="password-toggle" type="button" data-action="toggle-password">Ko'rsatish</button></div></label>
    <label class="form-field full">Parolni tasdiqlang<div class="password-wrap"><input name="confirmPassword" type="password" autocomplete="new-password" required minlength="8"><button class="password-toggle" type="button" data-action="toggle-password">Ko'rsatish</button></div></label>`
    : `<label class="form-field full">Elektron pochta<input name="email" type="email" autocomplete="email" required maxlength="120"></label>
    <label class="form-field full">Parol<div class="password-wrap"><input name="password" type="password" autocomplete="current-password" required><button class="password-toggle" type="button" data-action="toggle-password">Ko'rsatish</button></div></label>`;
  const errorsHTML = Object.entries(errors).map(([field, message]) => `<p class="form-error" data-error-for="${escapeHTML(field)}">${escapeHTML(message)}</p>`).join("");
  openDialog(registration ? "Hisob yaratish" : "Tizimga kirish", `
    <p class="dialog-subtitle">Demo rejim: akkaunt faqat ushbu brauzerda ishlaydi. Bu xavfsiz yoki haqiqiy hisob tizimi emas.</p>
    <div class="demo-warning">Parol ochiq matnda saqlanmaydi. Demo ma'lumotlarni haqiqiy xizmat paroli sifatida ishlatmang.</div>
    ${errorsHTML}<form id="auth-form" data-mode="${registration ? "register" : "login"}" novalidate>
      <div class="form-grid">${fields}</div>
      <p class="form-error" id="form-error" role="alert"></p>
      <button class="button button-primary form-submit" type="submit">${registration ? "Demo hisob yaratish" : "Kirish"}</button>
    </form>
    <p class="dialog-switch">${registration ? "Hisobingiz bormi?" : "Yangi foydalanuvchimisiz?"} <button type="button" data-action="switch-auth" data-mode="${registration ? "login" : "register"}">${registration ? "Kirish" : "Hisob yaratish"}</button></p>`);
  if (errors.email) $(`[name="email"]`, dialogContent)?.setAttribute("aria-invalid", "true");
}

async function passwordDigest(password) {
  if (!globalThis.crypto?.subtle) throw new Error("Brauzeringizda xavfsiz xesh funksiyasi mavjud emas. Sahifani localhost yoki HTTPS orqali oching.");
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function submitAuth(form) {
  const data = new FormData(form);
  const mode = form.dataset.mode;
  const email = String(data.get("email") || "").trim().toLocaleLowerCase("uz");
  const password = String(data.get("password") || "");
  const error = $("#form-error", form);
  error.textContent = "";
  const emailInput = $(`[name="email"]`, form);
  emailInput?.removeAttribute("aria-invalid");
  if (!emailInput?.validity.valid) {
    error.textContent = "Elektron pochtani to'g'ri formatda kiriting.";
    emailInput?.setAttribute("aria-invalid", "true"); emailInput?.focus(); return;
  }
  if (mode === "register") {
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const confirmation = String(data.get("confirmPassword") || "");
    if (!firstName || !lastName || firstName.length > 60 || lastName.length > 60) { error.textContent = "Ism va familiyani to'g'ri kiriting."; return; }
    if (!/^\+?[0-9 ()-]{9,20}$/.test(phone)) { error.textContent = "Telefon raqamini to'g'ri kiriting."; $(`[name="phone"]`, form).focus(); return; }
    if (password.length < 8) { error.textContent = "Parol kamida 8 ta belgidan iborat bo'lishi kerak."; $(`[name="password"]`, form).focus(); return; }
    if (password !== confirmation) { error.textContent = "Parol tasdig'i mos kelmadi."; $(`[name="confirmPassword"]`, form).focus(); return; }
    const users = readStorage(STORAGE_KEYS.users, []);
    if (users.some((user) => user.email === email)) { error.textContent = "Bu elektron pochta bilan demo hisob mavjud."; emailInput.setAttribute("aria-invalid", "true"); return; }
    try {
      const passwordHash = await passwordDigest(password);
      const user = { id:crypto.randomUUID(), firstName, lastName, phone, email };
      if (!saveStorage(STORAGE_KEYS.users, [...users, { ...user, passwordHash }])) return;
      saveStorage(STORAGE_KEYS.currentUser, user);
      state.user = user;
      updateCounters(); closeDialog(); showToast("Demo hisob yaratildi. Haqiqiy hisob tizimi emas.");
    } catch (digestError) {
      console.error("NEXORA: Demo parolini xeshlash amalga oshmadi.", digestError);
      error.textContent = digestError.message || "Demo hisobni yaratib bo'lmadi.";
    }
    return;
  }
  const users = readStorage(STORAGE_KEYS.users, []);
  const storedUser = users.find((user) => user.email === email);
  if (!storedUser) { error.textContent = "Bu elektron pochta bilan demo hisob topilmadi."; emailInput.setAttribute("aria-invalid", "true"); return; }
  try {
    const digest = await passwordDigest(password);
    if (digest !== storedUser.passwordHash) { error.textContent = "Parol noto'g'ri."; $(`[name="password"]`, form).setAttribute("aria-invalid", "true"); return; }
    const { passwordHash: _passwordHash, ...user } = storedUser;
    saveStorage(STORAGE_KEYS.currentUser, user); state.user = user; updateCounters(); closeDialog(); showToast("Demo hisobga kirdingiz.");
  } catch (digestError) {
    console.error("NEXORA: Demo parolini tekshirib bo'lmadi.", digestError);
    error.textContent = digestError.message || "Demo hisobga kirib bo'lmadi.";
  }
}

function openProfile(editing = false, errors = {}) {
  if (!state.user) { openAuth("login"); return; }
  const user = state.user;
  const orders = readStorage(STORAGE_KEYS.orders, []).filter((order) => order.userId === user.id);
  const profile = editing ? `
    <form id="profile-form" novalidate><div class="form-grid">
      <label class="form-field">Ism<input name="firstName" value="${escapeHTML(user.firstName)}" required maxlength="60"></label>
      <label class="form-field">Familiya<input name="lastName" value="${escapeHTML(user.lastName)}" required maxlength="60"></label>
      <label class="form-field">Telefon raqami<input name="phone" type="tel" value="${escapeHTML(user.phone)}" required></label>
      <label class="form-field">Elektron pochta<input value="${escapeHTML(user.email)}" disabled></label>
    </div><p class="form-error" id="form-error" role="alert">${escapeHTML(errors.form || "")}</p>
    <div class="dialog-actions"><button class="button button-quiet" type="button" data-action="profile">Bekor qilish</button><button class="button button-primary" type="submit">Saqlash</button></div></form>` :
    `<div class="profile-card"><div class="profile-detail"><span>Ism-familiya</span><strong>${escapeHTML(user.firstName)} ${escapeHTML(user.lastName)}</strong></div><div class="profile-detail"><span>Telefon</span><strong>${escapeHTML(user.phone)}</strong></div><div class="profile-detail"><span>Elektron pochta</span><strong>${escapeHTML(user.email)}</strong></div><div class="profile-detail"><span>Hisob turi</span><strong>Demo profil</strong></div></div>
    <div class="dialog-actions"><button class="button button-quiet" type="button" data-action="edit-profile">Profilni tahrirlash</button><button class="button button-quiet" type="button" data-action="favorites">Sevimlilar (${state.favorites.length})</button><button class="button button-quiet" type="button" data-action="cart">Savatcha</button></div>
    <h3 style="margin:22px 0 8px;font-size:12px">Demo buyurtmalar tarixi</h3>
    <div class="order-history">${orders.length ? orders.map((order) => `<div class="order-item"><strong>${escapeHTML(order.id)} · ${formatPrice(order.total)}</strong>${escapeHTML(order.date)} · ${order.items.length} ta mahsulot · demo</div>`).join("") : `<div class="empty-modal">Hozircha demo buyurtmalar yo'q.</div>`}</div>
    <div class="dialog-actions"><button class="button button-quiet" type="button" data-action="logout">Chiqish</button></div>`;
  openDialog(editing ? "Profilni tahrirlash" : `Salom, ${user.firstName}`, `<p class="dialog-subtitle">Profil ma'lumotlari faqat ushbu brauzerda saqlanadi. Bu demo profil.</p>${profile}`);
}

function openCheckout() {
  if (!state.cart.length) { renderCart(); return; }
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const items = state.cart.map((item) => {
    const product = PRODUCTS.find((entry) => entry.id === item.id);
    return product ? `<li>${escapeHTML(product.model)} · ${escapeHTML(item.storage)} × ${item.quantity} — ${formatPrice(item.price * item.quantity)}</li>` : "";
  }).join("");
  openDialog("Demo buyurtma", `
    <p class="dialog-subtitle">Shakl faqat namoyish uchun. Hech qanday haqiqiy to'lov, buyurtma yoki yetkazib berish amalga oshirilmaydi.</p>
    <div class="demo-warning">To'lov ma'lumotlarini kiritmang. "Karta orqali" varianti ham demo, tranzaksiya qilmaydi.</div>
    <form id="checkout-form" novalidate><div class="form-grid">
      <label class="form-field">Ism va familiya<input name="fullName" value="${escapeHTML(state.user ? `${state.user.firstName} ${state.user.lastName}` : "")}" autocomplete="name" required maxlength="120"></label>
      <label class="form-field">Telefon raqami<input name="phone" type="tel" value="${escapeHTML(state.user?.phone || "")}" autocomplete="tel" placeholder="+998 90 123 45 67" required></label>
      <label class="form-field">Viloyat<select name="region" required><option value="">Viloyatni tanlang</option>${["Toshkent shahri","Toshkent viloyati","Andijon","Buxoro","Farg'ona","Jizzax","Xorazm","Namangan","Navoiy","Qashqadaryo","Samarqand","Sirdaryo","Surxondaryo","Qoraqalpog'iston Respublikasi"].map((region) => `<option>${escapeHTML(region)}</option>`).join("")}</select></label>
      <label class="form-field">Shahar yoki tuman<input name="city" required maxlength="80"></label>
      <label class="form-field full">Yetkazib berish manzili<textarea name="address" required maxlength="240"></textarea></label>
      <label class="form-field full">To'lov usuli<select name="payment" required><option value="cash">Yetkazib berishda naqd pul (demo)</option><option value="card">Karta orqali to'lov (demo, tranzaksiya yo'q)</option></select></label>
      <div class="form-field full"><span>Buyurtma tarkibi (namuna)</span><ul class="order-items">${items}</ul><strong>Jami: ${formatPrice(total)}</strong></div>
    </div><p class="form-error" id="form-error" role="alert"></p>
    <button class="button button-primary form-submit" type="submit">Demo buyurtmani saqlash</button></form>`);
}

function submitCheckout(form) {
  const data = new FormData(form);
  const error = $("#form-error", form);
  error.textContent = "";
  const fullName = String(data.get("fullName") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const region = String(data.get("region") || "");
  const city = String(data.get("city") || "").trim();
  const address = String(data.get("address") || "").trim();
  if (!fullName || !/^\+?[0-9 ()-]{9,20}$/.test(phone) || !region || !city || !address) {
    error.textContent = "Barcha maydonlarni to'ldiring, telefon raqamini tekshiring.";
    return;
  }
  if (!state.cart.length) { error.textContent = "Savatchada mahsulot yo'q."; return; }
  const orders = readStorage(STORAGE_KEYS.orders, []);
  const order = {
    id:`DEMO-${Date.now().toString().slice(-7)}`, userId:state.user?.id || "guest", date:new Date().toLocaleString("uz-UZ"),
    fullName, phone, region, city, address, payment:String(data.get("payment")),
    items:state.cart.map((item) => ({ id:item.id, storage:item.storage, quantity:item.quantity, price:item.price })),
    total:state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0), isDemo:true
  };
  if (!saveStorage(STORAGE_KEYS.orders, [...orders, order])) return;
  state.cart = [];
  if (!saveStorage(STORAGE_KEYS.cart, state.cart)) return;
  updateCounters();
  openDialog("Demo buyurtma saqlandi", `<div class="empty-modal"><span>✓</span>Demo buyurtma raqami: <strong>${escapeHTML(order.id)}</strong><br><br>Bu faqat brauzerda saqlangan namuna. Hech qanday to'lov yoki yetkazib berish amalga oshmadi.</div><div class="dialog-actions"><button class="button button-primary" type="button" data-action="close-dialog">Tushunarli</button></div>`);
}

function resetFilters() {
  state.filters = { query:"", brand:"", min:"", max:"", ram:"", storage:"", condition:"", discount:false, isNew:false, sort:"popular" };
  $("#search-input").value = ""; $("#mobile-search").value = ""; $("#brand-filter").value = "";
  $("#min-price").value = ""; $("#max-price").value = ""; $("#ram-filter").value = ""; $("#storage-filter").value = "";
  $("#condition-filter").value = ""; $("#discount-filter").checked = false; $("#new-filter").checked = false; $("#sort-select").value = "popular";
  renderCatalog();
  $$(".brand-chip").forEach((chip) => chip.classList.remove("active"));
}

document.addEventListener("click", (event) => {
  const actionNode = event.target.closest("[data-action]");
  if (actionNode) {
    const { action, id } = actionNode.dataset;
    if (action === "close-dialog") closeDialog();
    if (action === "cart") renderCart();
    if (action === "favorites") openFavorites();
    if (action === "auth") state.user ? openProfile() : openAuth();
    if (action === "profile") openProfile();
    if (action === "edit-profile") openProfile(true);
    if (action === "logout") { state.user = null; localStorage.removeItem(STORAGE_KEYS.currentUser); updateCounters(); closeDialog(); showToast("Demo hisobdan chiqdingiz."); }
    if (action === "switch-auth") openAuth(actionNode.dataset.mode);
    if (action === "favorite") toggleFavorite(id);
    if (action === "detail") openDetail(id);
    if (action === "add-cart") addToCart(id);
    if (action === "detail-add-cart") { addToCart(id, $("#detail-storage")?.value); closeDialog(); }
    if (action === "quantity") {
      const item = state.cart.find((entry) => entry.key === actionNode.dataset.key);
      if (item) { item.quantity += Number(actionNode.dataset.delta); if (item.quantity <= 0) state.cart = state.cart.filter((entry) => entry.key !== item.key); saveStorage(STORAGE_KEYS.cart, state.cart); updateCounters(); renderCart(); }
    }
    if (action === "remove-cart") { state.cart = state.cart.filter((item) => item.key !== actionNode.dataset.key); saveStorage(STORAGE_KEYS.cart, state.cart); updateCounters(); renderCart(); }
    if (action === "continue-shopping") closeDialog();
    if (action === "checkout") openCheckout();
    if (action === "toggle-password") {
      const input = actionNode.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
      actionNode.textContent = input.type === "password" ? "Ko'rsatish" : "Yashirish";
    }
  }
  const brandChip = event.target.closest("[data-brand]");
  if (brandChip) {
    const brand = brandChip.dataset.brand;
    $("#brand-filter").value = brand;
    setFilter("brand", brand);
    $("#catalog").scrollIntoView({ behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  const brandLink = event.target.closest("[data-brand-link]");
  if (brandLink) {
    event.preventDefault();
    $("#brand-filter").value = brandLink.dataset.brandLink;
    setFilter("brand", brandLink.dataset.brandLink);
    $("#catalog").scrollIntoView({ behavior:"smooth" });
  }
  if (event.target.closest("[data-filter-new]")) { $("#new-filter").checked = true; setFilter("isNew", true); }
  if (event.target.closest("[data-filter-discount]")) { $("#discount-filter").checked = true; setFilter("discount", true); }
  if (event.target.closest("[data-placeholder-link]")) { event.preventDefault(); showToast("Ushbu demo loyihada ijtimoiy tarmoq havolalari ulanmagan."); }
  const infoLink = event.target.closest("[data-info]");
  if (infoLink) {
    event.preventDefault();
    const isPrivacy = infoLink.dataset.info === "privacy";
    openDialog(isPrivacy ? "Maxfiylik haqida" : "Foydalanish shartlari", `<p class="dialog-subtitle">${isPrivacy
      ? "Bu demo sayt shaxsiy ma'lumotlarni serverga yubormaydi. Savatcha, sevimlilar, demo profil va buyurtmalar faqat ushbu brauzerning localStorage xotirasida saqlanadi. Demo hisob paroli ochiq matnda saqlanmaydi, lekin bu usul haqiqiy xavfsizlik kafolati emas."
      : "NEXORA MOBILE ushbu versiyada faqat frontend demo hisoblanadi. Katalog, narxlar va chegirmalar namunaviy; ular sotuvga oid haqiqiy taklif emas. Demo buyurtma yoki karta tanlovi haqiqiy buyurtma, to'lov yoxud yetkazib berishni boshlamaydi."}</p><div class="dialog-actions"><button class="button button-primary" type="button" data-action="close-dialog">Tushunarli</button></div>`);
  }
  const scrollButton = event.target.closest("[data-scroll]");
  if (scrollButton) $(scrollButton.dataset.scroll)?.scrollIntoView({ behavior:"smooth", block:"nearest" });
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest(".product-visual[role='button']");
  if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openDetail(card.dataset.id); }
  if (event.key === "Escape") { document.body.classList.remove("dialog-open"); }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "auth-form") {
    event.preventDefault();
    submitAuth(event.target);
  }
  if (event.target.id === "checkout-form") {
    event.preventDefault();
    submitCheckout(event.target);
  }
  if (event.target.id === "profile-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!firstName || !lastName || firstName.length > 60 || lastName.length > 60 || !/^\+?[0-9 ()-]{9,20}$/.test(phone)) {
      $("#form-error", event.target).textContent = "Ism, familiya va telefon raqamini to'g'ri kiriting.";
      return;
    }
    state.user = { ...state.user, firstName, lastName, phone };
    const users = readStorage(STORAGE_KEYS.users, []);
    const updatedUsers = users.map((user) => user.email === state.user.email ? { ...user, ...state.user } : user);
    if (!saveStorage(STORAGE_KEYS.users, updatedUsers) || !saveStorage(STORAGE_KEYS.currentUser, state.user)) return;
    updateCounters(); openProfile(); showToast("Demo profilingiz saqlandi.");
  }
});

$("#search-input").addEventListener("input", (event) => {
  $("#mobile-search").value = event.target.value;
  setFilter("query", event.target.value);
});
$("#mobile-search").addEventListener("input", (event) => {
  $("#search-input").value = event.target.value;
  setFilter("query", event.target.value);
});
$("#sort-select").addEventListener("change", (event) => setFilter("sort", event.target.value));
$("#brand-filter").addEventListener("change", (event) => setFilter("brand", event.target.value));
$("#ram-filter").addEventListener("change", (event) => setFilter("ram", event.target.value));
$("#storage-filter").addEventListener("change", (event) => setFilter("storage", event.target.value));
$("#condition-filter").addEventListener("change", (event) => setFilter("condition", event.target.value));
$("#discount-filter").addEventListener("change", (event) => setFilter("discount", event.target.checked));
$("#new-filter").addEventListener("change", (event) => setFilter("isNew", event.target.checked));
$("#min-price").addEventListener("input", (event) => setFilter("min", event.target.value));
$("#max-price").addEventListener("input", (event) => setFilter("max", event.target.value));
$("#clear-filters").addEventListener("click", resetFilters);
$("#filter-toggle").addEventListener("click", () => {
  const panel = $("#filter-panel");
  const open = panel.classList.toggle("is-open");
  $("#filter-toggle").setAttribute("aria-expanded", String(open));
});
$(".menu-toggle").addEventListener("click", (event) => {
  const menu = $("#mobile-nav");
  const open = menu.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
  event.currentTarget.setAttribute("aria-label", open ? "Menyuni yopish" : "Menyuni ochish");
});
$("#mobile-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) { $("#mobile-nav").classList.remove("is-open"); $(".menu-toggle").setAttribute("aria-expanded", "false"); }
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

renderBrands();
refreshProductViews();
$("#copyright-year").textContent = String(new Date().getFullYear());
