/* ════════════════════════════════════════════
   CROYDON BAKE HOUSE — script.js v2
════════════════════════════════════════════ */

/* ── Product Data ────────────────────────── */
const PRODUCTS = {
  pie: {
    label: "Pies",
    price: 800, // $8.00 each — placeholder, update with real pricing
    hero: "images/Google/steak_cheese_pie.jpg",
    items: [
      { name: "Plain Pie", img: "images/Google/plain_pie.jpg", tag: "Pie" },
      {
        name: "Steak Cheese Pie",
        img: "images/Google/steak_cheese_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Steak Pepper Pie",
        img: "images/Google/steak_pepper_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Shepherd's Pie",
        img: "images/Google/shepherds_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Steak Mushroom Pie",
        img: "images/Google/steak_mushroom_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Cheese Bacon Pie",
        img: "images/Google/cheese_bacon_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Steak & Curry Pie",
        img: "images/Google/steak_curry_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Steak Chilli Pie",
        img: "images/Google/steak_chilli_pie.jpg",
        tag: "Pie",
      },
      {
        name: "Butter Chicken Pie",
        img: "images/Google/butter_chicken_pie.jpg",
        tag: "Pie",
      },
    ],
  },
  pastry: {
    label: "Pastries",
    price: 650, // $6.50 each — placeholder
    hero: "images/Google/meat_pastie_beef.webp",
    items: [
      {
        name: "Meat Pastie (Beef)",
        img: "images/Google/meat_pastie_beef.webp",
        tag: "Pastie",
      },
      {
        name: "Vegetable Pastie",
        img: "images/Google/vegetable_pastie.jpg",
        tag: "Pastie",
      },
      {
        name: "Sausage Roll",
        img: "images/Google/sausage_roll.jpg",
        tag: "Roll",
      },
      {
        name: "Spinach Ricotta Rolls",
        img: "images/Google/spinach_ricotta_rolls.webp",
        tag: "Roll",
      },
    ],
  },
  slice: {
    label: "Slices",
    price: 550, // $5.50 each — placeholder
    hero: "images/Google/vanilla_slice.jpg",
    items: [
      {
        name: "Vanilla Slice",
        img: "images/Google/vanilla_slice.jpg",
        tag: "Slice",
      },
      {
        name: "Raspberry Jelly Slice",
        img: "images/Google/raspberry_jelly_slice.jpg",
        tag: "Slice",
      },
      {
        name: "Caramel Slice",
        img: "images/Google/caramel_slice.jpg",
        tag: "Slice",
      },
      {
        name: "Tim Tam Slice",
        img: "images/Google/tim_tam_slice.png",
        tag: "Slice",
      },
      {
        name: "Hedgehog Slice",
        img: "images/Google/hedgehog_slice.jpg",
        tag: "Slice",
      },
      {
        name: "Rocky Road Slice",
        img: "images/Google/rocky_road_slice.jpg",
        tag: "Slice",
      },
      {
        name: "Peppermint Slice",
        img: "images/Google/peppermint_slice.png",
        tag: "Slice",
      },
      {
        name: "Cherry Ripe Slice",
        img: "images/Google/cherry_ripe_slice.png",
        tag: "Slice",
      },
      {
        name: "Chocolate Lamingtons",
        img: "images/Google/lamingtons_chocolate.jpg",
        tag: "Slice",
      },
      {
        name: "Strawberry Lamingtons",
        img: "images/Google/lamingtons_strawberry.jpg",
        tag: "Slice",
      },
    ],
  },
  cake: {
    label: "Cakes",
    price: 2800, // $28.00 per cake — placeholder
    hero: "images/Google/banana_cake.jpg",
    items: [
      {
        name: "Banana Cake",
        img: "images/Google/banana_cake.jpg",
        tag: "Cake",
      },
      {
        name: "Banana Bread",
        img: "images/Google/banana_bread.webp",
        tag: "Cake",
      },
      {
        name: "Carrot Cake",
        img: "images/Google/carrot_cake.webp",
        tag: "Cake",
      },
      { name: "Apple Cake", img: "images/Google/apple_cake.jpg", tag: "Cake" },
    ],
  },
  cookie: {
    label: "Cookies",
    price: 300, // $3.00 each — placeholder
    hero: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&h=700&fit=crop&q=85",
    items: [
      {
        name: "Fresh Cookies",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop&q=80",
        tag: "TBC",
        note: "Varieties coming soon. Enquire for details.",
      },
    ],
  },
};

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();

  if (typeof lucide !== "undefined") lucide.createIcons();

  // Footer year
  const fy = document.getElementById("footerYear");
  if (fy) fy.textContent = new Date().getFullYear();

  initNavbar();
  initScrollBehavior();
  initReveal();
  initCountUp();
  initCustomerTypeToggle();
  initCategoryPage();
  initBentoGallery();
  initReviewsCarousel();
  initEnquiryForm();
  initCartBadge();
});

/* ── Preloader ───────────────────────────── */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // Only show once per session
  if (sessionStorage.getItem("preloaderShown")) {
    preloader.style.display = "none";
    return;
  }

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    preloader.classList.add("is-leaving");
    document.body.style.overflow = "";
    sessionStorage.setItem("preloaderShown", "1");
    preloader.addEventListener(
      "transitionend",
      () => {
        preloader.style.display = "none";
      },
      { once: true },
    );
  }, 2400);
}

/* ── Navbar ──────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        navToggle.focus();
      }
    });
  }
}

/* ── Scroll: active nav + back-to-top ────── */
function initScrollBehavior() {
  const btt = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener(
    "scroll",
    () => {
      // Back to top
      if (btt) btt.classList.toggle("visible", window.scrollY > 400);

      // Active link
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${current}`,
        );
      });
    },
    { passive: true },
  );

  if (btt)
    btt.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  els.forEach((el) => observer.observe(el));
}

/* ── Count-up animation ──────────────────── */
function initCountUp() {
  const counters = document.querySelectorAll(".count-up");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur = 1200;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

/* ── Customer Type Toggle ─────────────────── */
function initCustomerTypeToggle() {
  const radios = document.querySelectorAll('input[name="customerType"]');
  const businessGroup = document.getElementById("businessNameGroup");
  const businessInput = document.getElementById("businessName");
  const abnGroup = document.getElementById("abnGroup");
  const abnInput = document.getElementById("abn");
  const messageField = document.getElementById("message");

  const placeholders = {
    individual:
      "Tell us about your order: quantity, occasion, delivery suburb…",
    business:
      "Tell us about your weekly volume needs, delivery location, and any specific requirements…",
  };

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const isBusiness = radio.value === "business";
      if (businessGroup) {
        businessGroup.style.display = isBusiness ? "" : "none";
        if (businessInput) businessInput.required = isBusiness;
      }
      if (abnGroup) {
        abnGroup.style.display = isBusiness ? "" : "none";
        if (abnInput) abnInput.required = isBusiness;
      }
      if (messageField) messageField.placeholder = placeholders[radio.value];
    });
  });
}

/* ── Category Landing Page ───────────────── */
function initCategoryPage() {
  const grid = document.getElementById("categoryProductGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const data = PRODUCTS[cat];

  if (!data) {
    window.location.href = "index.html#products";
    return;
  }

  document.title = `${data.label} | Croydon Bake House`;

  const hero = document.getElementById("catPageHero");
  if (hero && data.hero) hero.style.backgroundImage = `url('${data.hero}')`;

  const titleEls = document.querySelectorAll(".js-cat-title");
  titleEls.forEach((el) => {
    el.textContent = data.label;
  });
  const countEl = document.getElementById("catPageCount");
  if (countEl)
    countEl.textContent = `${data.items.length} ${data.items.length === 1 ? "variety" : "varieties"}`;

  grid.innerHTML = data.items
    .map(
      (item) => `
    <div class="product-card">
      <div class="product-card__img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy" width="400" height="300" />
      </div>
      <div class="product-card__body">
        <h3>${item.name}</h3>
        <span class="product-tag ${item.tag === "TBC" ? "product-tag--coming" : ""}">${item.tag}</span>
        ${item.note ? `<p class="product-note">${item.note}</p>` : ""}
        <div class="product-card__add-row">
          <div class="product-card__qty-wrap" hidden>
            <button class="qty-btn qty-dec-card" type="button" aria-label="Decrease quantity">−</button>
            <span class="qty-display-card" aria-live="polite">1</span>
            <button class="qty-btn qty-inc-card" type="button" aria-label="Increase quantity">+</button>
            <button class="qty-btn qty-confirm-card" type="button" aria-label="Confirm quantity and add to cart">
              <i data-lucide="check" aria-hidden="true"></i>
            </button>
          </div>
          <button class="product-card__add js-add-btn"
                  data-name="${item.name}" data-img="${item.img}"
                  data-cat="${data.label}" data-price="${data.price || 0}"
                  aria-label="Add ${item.name} to cart">
            <i data-lucide="shopping-cart" aria-hidden="true"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  if (typeof lucide !== "undefined") lucide.createIcons();

  function setCardItemQtyInCart(item, qty) {
    const cart = getCart();
    const existing = cart.find((c) => c.name === item.name);

    if (existing) {
      existing.qty = qty;
      existing.img = item.img;
      existing.category = item.category;
      existing.price = item.price || 0;
    } else {
      cart.push({
        name: item.name,
        img: item.img,
        category: item.category,
        price: item.price || 0,
        qty,
      });
    }

    saveCart(cart);
  }

  grid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".js-add-btn");
    const decBtn = e.target.closest(".qty-dec-card");
    const incBtn = e.target.closest(".qty-inc-card");
    const confirmBtn = e.target.closest(".qty-confirm-card");

    if (addBtn) {
      const row = addBtn.closest(".product-card__add-row");
      const qtyWrap = row.querySelector(".product-card__qty-wrap");
      const qtyDisplay = qtyWrap.querySelector(".qty-display-card");

      const existingQty =
        getCart().find((c) => c.name === addBtn.dataset.name)?.qty || 1;
      qtyDisplay.textContent = String(existingQty);
      qtyWrap.hidden = false;
      addBtn.hidden = true;
      return;
    }

    if (decBtn) {
      const qtyWrap = decBtn.closest(".product-card__qty-wrap");
      const qtyDisplay = qtyWrap.querySelector(".qty-display-card");
      const qty = parseInt(qtyDisplay.textContent) || 1;

      qtyDisplay.textContent = String(Math.max(1, qty - 1));
      return;
    }

    if (incBtn) {
      const qtyWrap = incBtn.closest(".product-card__qty-wrap");
      const qtyDisplay = qtyWrap.querySelector(".qty-display-card");
      const qty = parseInt(qtyDisplay.textContent) || 1;

      qtyDisplay.textContent = String(Math.min(99, qty + 1));
      return;
    }

    if (confirmBtn) {
      const qtyWrap = confirmBtn.closest(".product-card__qty-wrap");
      const qtyDisplay = qtyWrap.querySelector(".qty-display-card");
      const row = qtyWrap.closest(".product-card__add-row");
      const addBtn = row.querySelector(".js-add-btn");
      const qty = Math.max(
        1,
        Math.min(99, parseInt(qtyDisplay.textContent) || 1),
      );

      setCardItemQtyInCart(
        {
          name: addBtn.dataset.name,
          img: addBtn.dataset.img,
          category: addBtn.dataset.cat,
          price: parseInt(addBtn.dataset.price) || 0,
        },
        qty,
      );

      const defaultLabel =
        '<i data-lucide="shopping-cart" aria-hidden="true"></i> Add to Cart';
      addBtn.classList.add("added");
      addBtn.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Added';
      qtyWrap.hidden = true;
      addBtn.hidden = false;

      if (typeof lucide !== "undefined") lucide.createIcons();

      window.setTimeout(() => {
        addBtn.classList.remove("added");
        addBtn.innerHTML = defaultLabel;
        if (typeof lucide !== "undefined") lucide.createIcons();
      }, 900);
      return;
    }
  });
}

/* ── Bento Gallery ───────────────────────── */
function initBentoGallery() {
  const items = document.querySelectorAll(".bento-item");
  const modal = document.getElementById("bentoModal");
  const backdrop = document.getElementById("bentoBackdrop");
  const closeBtn = document.getElementById("bentoClose");
  const modalImg = document.getElementById("bentoModalImg");
  const modalTitle = document.getElementById("bentoModalTitle");
  const modalDesc = document.getElementById("bentoModalDesc");
  const dock = document.getElementById("bentoDock");
  const dockInner = document.getElementById("bentoDockInner");
  if (!modal) return;

  let currentIdx = 0;
  let lastFocused = null;
  let dockX = 0,
    dockY = 0;
  let dragging = false,
    dragStartX,
    dragStartY,
    dockStartX,
    dockStartY;

  // Build gallery data from DOM
  const data = Array.from(items).map((el) => ({
    src: el.querySelector("img").src,
    alt: el.querySelector("img").alt,
    title: el.dataset.title || "",
    desc: el.dataset.desc || "",
  }));

  // Build dock thumbnails
  data.forEach((d, i) => {
    const thumb = document.createElement("div");
    thumb.className = "bento-thumb";
    thumb.innerHTML = `<img src="${d.src}" alt="${d.alt}" loading="lazy">`;
    thumb.addEventListener("click", (e) => {
      e.stopPropagation();
      showItem(i);
    });
    dockInner.appendChild(thumb);
  });

  function showItem(idx) {
    currentIdx = idx;
    const d = data[idx];
    modalImg.src = d.src.replace(/w=\d+&h=\d+/, "w=1400&h=900");
    modalImg.alt = d.alt;
    modalTitle.textContent = d.title;
    modalDesc.textContent = d.desc;
    dockInner
      .querySelectorAll(".bento-thumb")
      .forEach((t, i) => t.classList.toggle("is-active", i === idx));
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  function openModal(idx) {
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    // Reset dock position
    dockX = 0;
    dockY = 0;
    dock.style.transform = "translateX(-50%)";
    showItem(idx);
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Open on item click
  items.forEach((item, i) => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.addEventListener("click", () => openModal(i));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(i);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft")
      showItem((currentIdx - 1 + data.length) % data.length);
    if (e.key === "ArrowRight") showItem((currentIdx + 1) % data.length);
  });

  // Draggable dock — mouse
  dock.addEventListener("mousedown", (e) => {
    if (e.target.closest(".bento-thumb")) return;
    dragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dockStartX = dockX;
    dockStartY = dockY;
    dock.classList.add("is-dragging");
    e.preventDefault();
  });
  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    dockX = dockStartX + (e.clientX - dragStartX);
    dockY = dockStartY + (e.clientY - dragStartY);
    dock.style.transform = `translateX(calc(-50% + ${dockX}px)) translateY(${dockY}px)`;
  });
  document.addEventListener("mouseup", () => {
    dragging = false;
    dock.classList.remove("is-dragging");
  });

  // Draggable dock — touch
  dock.addEventListener(
    "touchstart",
    (e) => {
      if (e.target.closest(".bento-thumb")) return;
      const t = e.touches[0];
      dragging = true;
      dragStartX = t.clientX;
      dragStartY = t.clientY;
      dockStartX = dockX;
      dockStartY = dockY;
    },
    { passive: true },
  );
  document.addEventListener(
    "touchmove",
    (e) => {
      if (!dragging) return;
      const t = e.touches[0];
      dockX = dockStartX + (t.clientX - dragStartX);
      dockY = dockStartY + (t.clientY - dragStartY);
      dock.style.transform = `translateX(calc(-50% + ${dockX}px)) translateY(${dockY}px)`;
    },
    { passive: true },
  );
  document.addEventListener("touchend", () => {
    dragging = false;
  });
}

/* ── Reviews Carousel ────────────────────── */
function initReviewsCarousel() {
  const track = document.getElementById("reviewsTrack");
  if (!track) return;

  // Clone all cards and append for seamless infinite loop
  Array.from(track.querySelectorAll(".review-card")).forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
}

/* ── Cart ────────────────────────────────── */
const CART_KEY = "cbh_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item, qty = 1) {
  const cart = getCart();
  const existing = cart.find((c) => c.name === item.name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      name: item.name,
      img: item.img,
      category: item.category,
      price: item.price || 0,
      qty,
    });
  }
  saveCart(cart);
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const total = getCart().reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = total;
  badge.hidden = total === 0;
  badge.classList.remove("bump");
  void badge.offsetWidth; // reflow to restart animation
  if (total > 0) badge.classList.add("bump");
}

function initCartBadge() {
  updateCartBadge();
}

/* ── Enquiry Form ────────────────────────── */
function initEnquiryForm() {
  const form = document.getElementById("enquireForm");
  if (!form) return;

  const fields = {
    firstName: {
      el: form.querySelector("#firstName"),
      err: form.querySelector("#firstNameError"),
      msg: "Please enter your first name.",
    },
    lastName: {
      el: form.querySelector("#lastName"),
      err: form.querySelector("#lastNameError"),
      msg: "Please enter your last name.",
    },
    email: {
      el: form.querySelector("#email"),
      err: form.querySelector("#emailError"),
      msg: "Please enter a valid email address.",
    },
    phone: {
      el: form.querySelector("#phone"),
      err: form.querySelector("#phoneError"),
      msg: "Please enter your phone number.",
    },
  };

  const businessInput = document.getElementById("businessName");
  const businessErr = document.getElementById("businessNameError");
  const abnInput = document.getElementById("abn");
  const abnErr = document.getElementById("abnError");

  // Auto-format ABN as XX XXX XXX XXX while typing
  if (abnInput) {
    abnInput.addEventListener("input", () => {
      const d = abnInput.value.replace(/\D/g, "").slice(0, 11);
      let f = d;
      if (d.length > 2) f = d.slice(0, 2) + " " + d.slice(2);
      if (d.length > 5)
        f = d.slice(0, 2) + " " + d.slice(2, 5) + " " + d.slice(5);
      if (d.length > 8)
        f =
          d.slice(0, 2) +
          " " +
          d.slice(2, 5) +
          " " +
          d.slice(5, 8) +
          " " +
          d.slice(8);
      abnInput.value = f;
    });
  }

  const validate = (key) => {
    const { el, err, msg } = fields[key];
    const valid =
      key === "email"
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())
        : el.value.trim().length > 0;
    el.classList.toggle("error", !valid);
    err.textContent = valid ? "" : msg;
    return valid;
  };

  Object.keys(fields).forEach((k) =>
    fields[k].el.addEventListener("blur", () => validate(k)),
  );

  const submitBtn = document.getElementById("submitBtn");
  const formSuccess = document.getElementById("formSuccess");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let allValid = Object.keys(fields).every((k) => validate(k));

    const isBusiness =
      document.querySelector('input[name="customerType"]:checked')?.value ===
      "business";
    if (isBusiness) {
      if (businessInput) {
        const bValid = businessInput.value.trim().length > 0;
        businessInput.classList.toggle("error", !bValid);
        if (businessErr)
          businessErr.textContent = bValid
            ? ""
            : "Please enter your business name.";
        if (!bValid) allValid = false;
      }
      if (abnInput) {
        const abnDigits = abnInput.value.replace(/\s/g, "");
        const abnValid = /^\d{11}$/.test(abnDigits);
        abnInput.classList.toggle("error", !abnValid);
        if (abnErr)
          abnErr.textContent = abnValid
            ? ""
            : "Please enter a valid 11-digit ABN.";
        if (!abnValid) allValid = false;
      }
    }

    if (!allValid) {
      const firstErr = form.querySelector("input.error, textarea.error");
      if (firstErr) firstErr.focus();
      return;
    }

    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");
    submitBtn.disabled = true;
    btnText.hidden = true;
    btnLoading.hidden = false;

    await new Promise((r) => setTimeout(r, 1200));

    form.hidden = true;
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (typeof lucide !== "undefined") lucide.createIcons();
  });
}
