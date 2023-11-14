const data = [

    {
        AppName:  "Github",
        AppImagePath: "./img/GitHubLogo.jpg" ,
        Urls: "https://github.com/"
    }, 
    {
        AppName:  "Stackoverflow",
        AppImagePath: "./img/stack-overflow-icon.png" ,
        Urls: "https://stackoverflow.com/"
    },
    {
        AppName:  "Google",
        AppImagePath: "./img/GoogleLogo.jpg" ,
        Urls: "https://www.google.com/"
    },
    {
        AppName:  "MDN",
        AppImagePath: "./img/MDNlogo.jfif" ,
        Urls: "https://developer.mozilla.org/en-US/docs/Learn"
    },
    {
        AppName:  "Bootstrap",
        AppImagePath: "./img/BootstrapLogo.jfif",
        Urls: "https://getbootstrap.com/"
    },
    {
        AppName:  "W3Schools",
        AppImagePath: "./img/w3Logo.jfif" ,
        Urls: "https://www.w3schools.com/"
    },
    

]


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

function createListView() {
    const listView = document.getElementById('listView');
    listView.innerHTML = '';
    data.forEach(app => {
      const listItem = document.createElement('a');
      listItem.href = app.Urls;
      listItem.target = "_blank";
      listItem.classList.add("list-group-item", "list-group-item-action");
      listItem.textContent = app.AppName;
      listView.appendChild(listItem);
    });
  }

function createCardView() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.forEach(app => {
      const cardCol = document.createElement("div");
      cardCol.classList.add("col");
  
      const card = document.createElement("div");
      card.classList.add("card", "h-100");
  
      card.innerHTML = `
        <img src="${app.AppImagePath}" class="card-img-top" alt="${app.AppName}">
        <div class="card-body">
          <h5 class="card-title">${app.AppName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="${app.Urls}" target="_blank" class="btn btn-primary">${app.AppName}</a>
        </div>
      `;
  
      cardCol.appendChild(card);
      cardContainer.appendChild(cardCol);
    });
  }

createListView();
createCardView();



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

