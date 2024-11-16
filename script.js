function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.style.display = 'none');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
}

// Default tab
document.getElementById('food').style.display = 'block';
