

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

    currentView = view;
}





function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const listItems = document.querySelectorAll('.list-group .list-group-item');
    const cardTitles = document.querySelectorAll('.card-container .card .card-title');

    
    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}


// Preventing view switch on search
document.querySelector('form[role="search"]').addEventListener('submit',
function(event) {
    event.preventDefault(); // Prevent form submission
    toggleView(currentView); // Maintain the current view });
}); 