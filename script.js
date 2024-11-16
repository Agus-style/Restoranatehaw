function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
  activeButton.classList.add('active');
}

// Set default tab to food
document.addEventListener('DOMContentLoaded', () => {
  showTab('food');
});
