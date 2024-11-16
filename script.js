function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  contents.forEach((content) => {
    content.style.display = content.id === tabId ? "block" : "none";
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.textContent.toLowerCase() === tabId);
  });
}
