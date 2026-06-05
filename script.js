const inquiryList = document.querySelector("#inquiry-list");
const sendInquiry = document.querySelector("#send-inquiry");
const clearInquiry = document.querySelector("#clear-inquiry");
const addButtons = Array.from(document.querySelectorAll("[data-add-product]"));

const selectedProducts = new Set();
const salesEmail = "sales@macogear.com";

function buildMailtoHref() {
  const products = Array.from(selectedProducts);
  const subject = "MACOGEAR Product Inquiry";
  const body = products.length
    ? [
        "Hello MACOGEAR,",
        "",
        "I would like to ask about these products:",
        ...products.map((product) => `- ${product}`),
        "",
        "Please send product details, pricing, MOQ, and availability.",
      ].join("\n")
    : "Hello MACOGEAR,\n\nI would like to ask about your outdoor headwear products.";

  return `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function updateButtons() {
  addButtons.forEach((button) => {
    const product = button.dataset.addProduct;
    const isSelected = selectedProducts.has(product);

    button.classList.toggle("is-selected", isSelected);
    button.textContent = isSelected ? "Added to inquiry" : "Add to inquiry";
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderInquiryList() {
  inquiryList.replaceChildren();

  if (selectedProducts.size === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "No products selected yet.";
    inquiryList.append(emptyItem);
    sendInquiry.classList.add("disabled");
    sendInquiry.setAttribute("aria-disabled", "true");
  } else {
    Array.from(selectedProducts).forEach((product) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      const removeButton = document.createElement("button");

      label.textContent = product;
      removeButton.className = "remove-product";
      removeButton.type = "button";
      removeButton.textContent = "x";
      removeButton.setAttribute("aria-label", `Remove ${product}`);
      removeButton.addEventListener("click", () => {
        selectedProducts.delete(product);
        syncInquiry();
      });

      item.append(label, removeButton);
      inquiryList.append(item);
    });

    sendInquiry.classList.remove("disabled");
    sendInquiry.removeAttribute("aria-disabled");
  }

  sendInquiry.href = buildMailtoHref();
}

function syncInquiry() {
  updateButtons();
  renderInquiryList();
}

addButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    const product = button.dataset.addProduct;

    if (selectedProducts.has(product)) {
      selectedProducts.delete(product);
    } else {
      selectedProducts.add(product);
    }

    syncInquiry();
  });
});

clearInquiry.addEventListener("click", () => {
  selectedProducts.clear();
  syncInquiry();
});

syncInquiry();
