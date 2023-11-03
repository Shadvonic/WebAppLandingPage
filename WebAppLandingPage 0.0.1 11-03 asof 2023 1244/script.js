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
  