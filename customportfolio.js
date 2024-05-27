document.querySelectorAll('.navbar-item').forEach(item => {
  item.addEventListener('mouseover', function() {
      const dropdown = document.getElementById(item.textContent.trim().toLowerCase() + '-dropdown');
      if (dropdown) {
          dropdown.style.display = 'block';
      }
  });
  item.addEventListener('mouseout', function() {
      const dropdown = document.getElementById(item.textContent.trim().toLowerCase() + '-dropdown');
      if (dropdown) {
          dropdown.style.display = 'none';
      }
  });
});
