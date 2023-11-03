let currentView = 'card'; // Initially set to 'card'

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
<<<<<<< HEAD

    currentView = view;
}

function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const cardTitles = document.querySelectorAll('.card-container .card .card-title');
    const listItems = document.querySelectorAll('.list-group .list-group-item');

    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'block';
=======
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
>>>>>>> 0859b0509d5b442460eefcc149e2ae46c6fee4f9
        } else {
            item.style.display = 'none';
        }
    });
<<<<<<< HEAD
}

// Preventing view switch on search
document.querySelector('form[role="search"]').addEventListener('submit',
function(event) {
    event.preventDefault(); // Prevent form submission
    toggleView(currentView); // Maintain the current view });
}); 
=======

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
>>>>>>> 0859b0509d5b442460eefcc149e2ae46c6fee4f9
