function toggleView(view) {
    const listView = document.getElementById('listView');
    const cardView = document.getElementById('cardView');
    const listViewBtn = document.getElementById('listViewBtn');
    const cardViewBtn = document.getElementById('cardViewBtn');
  
    if (view === 'list') {
      listView.style.display = 'block';
      cardView.style.display = 'none';
      listViewBtn.disabled = true;
      cardViewBtn.disabled = false;
    } else if (view === 'card') {
      listView.style.display = 'none';
      cardView.style.display = 'block';
      listViewBtn.disabled = false;
      cardViewBtn.disabled = true;
    }
  }

  function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const listItems = document.querySelectorAll('.list-group-item');
    const cardItems = document.querySelectorAll('.card-container .card');

    // For list items
    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    // For card items
    cardItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}