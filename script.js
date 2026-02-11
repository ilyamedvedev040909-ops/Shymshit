// Selection Tool Logic
const selectionInput = document.getElementById("userRequest");
const selectionBtn = document.getElementById("findSolutionBtn");
const selectionResult = document.getElementById("selectionResult");

function findSolution() {
  const query = selectionInput.value.trim();
  if (!query) return;
  
  // Generic response since database is removed
  selectionResult.innerHTML = `
    <div class="selection-message" style="color:#aeb0b6; text-align:center; margin-bottom: 20px;">
      Спасибо за обращение! <br>
      Ваш запрос: "<b>${query}</b>" принят. <br>
      Наши специалисты свяжутся с вами для индивидуального подбора решения.
    </div>
    <div style="text-align:center;">
       <a href="#contacts" class="btn btn-action">Связаться с менеджером</a>
    </div>
  `;
}

if (selectionBtn) {
  selectionBtn.addEventListener("click", findSolution);
}

if (selectionInput) {
  selectionInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") findSolution();
  });
}

// Generic Modal Logic
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

const closeAllModals = () => {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.classList.remove("active");
  });
  document.body.style.overflow = "";
};

// Close buttons
document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", closeAllModals);
});

// Click outside
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeAllModals();
  });
});

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});

// Assistant Link
const assistantLink = document.querySelector('a[href="#assistant"]');
if (assistantLink) {
  assistantLink.addEventListener("click", (e) => {
    e.preventDefault();
    openModal("assistantModal");
  });
}
