const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.querySelector("#overlay-black");
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-custom.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
