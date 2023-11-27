const resourceType = ["Application", "Document", "Report", "Video", "Course", "Bookmark"]
const environment = ["Production", "Pre-Production", "Staging", "Test", "Development"]

const data = [

    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "ACL [CORP]",
        ImagePath: "" ,
        URL: ["https://crpvms2chsws01.corp.nychhc.org/ACL/", "https://crpvms2chspdws1.corp.nychhc.org/Staging_ACL/Login.aspx?ReturnUrl=%2fStaging_ACL", "https://crpvms2chspdws1.corp.nychhc.org/Test_ACL/Login.aspx?ReturnUrl=%2fTest_ACL%2f"],
        Environment: "",
        Description: "",
        Tags: ""
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
     {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },
    {
        ResourceType: resourceType[0],
        LongName: "",
        ShortName: "",
        ImagePath: "" ,
        URL: [],
        Environment: "",
        Description: "",
        Tags: ""
    },

    

]


let currentView = 'card'; // Initially set to 'card'

// Function to dynamically load CSS file
function loadThemeCSS(theme) {
    const head = document.head;
    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `css/${theme}.css`; // Assuming your CSS files are in a 'css' folder

    head.appendChild(link);
}


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


const themeRadios = document.querySelectorAll('input[name="theme"]');

// Add event listeners to radio buttons to apply theme classes
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            // Remove existing theme classes
            document.body.classList.remove('theme-light', 'theme-dark', 'theme-valentine', 'theme-july4', 'theme-halloween', 'theme-thanksgiving', 'theme-christmas');

            // Load the appropriate CSS file based on the checked radio button
            loadThemeCSS(radio.id.toLowerCase());
        }
    });
});
// Preventing view switch on search
document.querySelector('form[role="search"]').addEventListener('submit',
function(event) {
    event.preventDefault(); // Prevent form submission
    toggleView(currentView); // Maintain the current view });
}); 

