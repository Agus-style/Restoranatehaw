function showTab(tabId) {
  // Get all tab contents and buttons
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  // Hide all contents and deactivate buttons
  contents.forEach((content) => {
    content.style.display = content.id === tabId ? "block" : "none";
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.textContent.toLowerCase() === tabId);
  });
}