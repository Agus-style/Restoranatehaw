function showTab(tab) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  contents.forEach((content) => (content.style.display = 'none'));
  buttons.forEach((button) => button.classList.remove('active'));

  document.getElementById(tab).style.display = 'block';
  document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`).classList.add('active');
}
