// Define arrays for resource types and environments
const resourceType = ["App", "Doc", "Report", "Video", "Course", "Bookmark"] // 0-5
const environment = ["Production", "Pre-Production", "Training", "Testing", "Development"] // 0-4

// Mock Data
const data = [

    {
        ResourceType: resourceType[0],
        LongName: "  Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "./img/150PH.png" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ACL/",
        Environment: environment[0],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "  Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_ACL/Login.aspx?ReturnUrl=%2fStaging_ACL",
        Environment: environment[2],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ACL/Login.aspx?ReturnUrl=%2fTest_ACL%2f",
        Environment: environment[3],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    },

    {
        ResourceType: resourceType[0],
        LongName: " Web-based Empowerment and Learning System",
        ShortName: "WELS",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/WELS_INDEX/",
        Environment: environment[0],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Web-based Empowerment and Learning System Course List",
        ShortName: " WELS Course List",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/index.html",
        Environment: environment[3],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Web-based Empowerment and Learning System Course Listing",
        ShortName: "WELS Course Listing",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/",
        Environment: environment[3],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Clinical Court Advocacy for Persons In Custody",
        ShortName: "CCAPIC",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/CCAPIC/",
        Environment: environment[0],
        Description: "Central notes for CCA team to assist with tracking cases for advocacy for persons in custody.",
        Tags: ["CCA", "Court", "Advocacy", "Patients", "Advocacy Case", "CCA Intake"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Clinical Court Advocacy for Persons In Custody",
        ShortName: "CCAPIC",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_CCAPIC/",
        Environment: environment[3],
        Description: "Central notes for CCA team to assist with tracking cases for advocacy for persons in custody.",
        Tags:["CCA", "Court", "Advocacy", "Patients", "Advocacy Case", "CCA Intake"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " COVID-19 Electronic Survey Application",
        ShortName: "CESA",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS_CESA/",
        Environment: environment[0],
        Description: "An EPASS module historically used for capturing COVID-19 screenings survey data from arrested individuals. It is now only used to view historical records as the screening survey has been integrated into EPASS Level 1 form.",
        Tags:  ["CESA", "COVID", "Screening", "EPASS", "Nursing Department", "Survey"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " COVID-19 Electronic Survey Application",
        ShortName: "CESA",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS-CESA/",
        Environment: environment[3],
        Description: "An EPASS module historically used for capturing COVID-19 screenings survey data from arrested individuals. It is now only used to view historical records as the screening survey has been integrated into EPASS Level 1 form.",
        Tags: ["CESA", "COVID", "Screening", "EPASS", "Nursing Department", "Survey"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Close Call and Near Miss Reporting ",
        ShortName: "Close Call",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCall/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Close Call and Near Miss Reporting Admin ",
        ShortName: "Close Call Admin",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCallAdmin/Login.aspx?ReturnUrl=%2fCloseCallAdmin%2fdefault.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Discharge Services Dashboard  ",
        ShortName: "DSD",
        ImagePath:"./img/150PH.png",
        URL: "",
        Environment: environment[0],
        Description: "",
        Tags: ["CCS", "IIS", "GCCS", "RCS", "YAS", "SUT", "Discharge", "KEEP", "Court Collateral", "Young Adult", "ARNT", "JISH" ]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Discharge Services Dashboard ",
        ShortName: "DSD",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_DSD/",
        Environment: environment[3],
        Description: "",
        Tags: ["CCS", "IIS", "GCCS", "RCS", "YAS", "SUT", "Discharge", "KEEP", "Court Collateral", "Young Adult", "ARNT", "JISH" ]
    },
    {
        ResourceType: resourceType[0],
        LongName: "  Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/ECT/",
        Environment: environment[0],
        Description:"Provides a mechanism for tracking cases, tests, and vaccines and their associated appointments",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ECT/",
        Environment: environment[3],
        Description: "Provides a mechanism for tracking cases, tests, and vaccines and their associated appointments",
        Tags: []
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "[Test-CORP] eCW Templates",
        ShortName: "CORP eCW Templates",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_eCWTemplater/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Enhanced Pre-Arraignment Screening Service",
        ShortName: "EPASS",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS/",
        Environment: environment[0],
        Description: "Application for Pre-Arraignment screening for medical, mental health, and social work diversion in NYPD arrest facilities.",
        Tags: ["Pre-Screening", "Pre-Arraignment", "Arrest", "Screening", "Level 1", "Level 2", "Diversion", "Nursing Department", "PASU", "PASUT", "EPASS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Enhanced Pre-Arraignment Screening Service ",
        ShortName: "EPASS",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS/",
        Environment: environment[3],
        Description: "Application for Pre-Arraignment screening for medical, mental health, and social work diversion in NYPD arrest facilities.",
        Tags: ["Pre-Screening", "Pre-Arraignment", "Arrest", "Screening", "Level 1", "Level 2", "Diversion", "Nursing Department", "PASU", "PASUT", "EPASS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Locker",
        ShortName: "Locker",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/Locker/",
        Environment: environment[0],
        Description: "Locker system is used to keep track of assigning Lockers to patients.",
        Tags: ["LOCKER", "Request", "Open", "Closed", "Clone", "Assignment"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " CHS-LOCKER",
        ShortName: "CHS-LOCKER",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_LOCKER/Account/Login?ReturnUrl=%2fTest_LOCKER%2fLOCKER",
        Environment: environment[3],
        Description: "Locker system is used to keep track of assigning Lockers to patients.",
        Tags: ["LOCKER", "Request", "Open", "Closed", "Clone", "Assignment"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Medical Evaluation & Treatment for Non-Inmate Incidents ",
        ShortName: "METNII",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/METNII",
        Environment: environment[0],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Medical Evaluation & Treatment for Non-Inmate Incidents ",
        ShortName: "METNII",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_METNII/",
        Environment: environment[3],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Medical Evaluation & Treatment for Non-Inmate Incidents [CHS.DOHMH.NYCNET]",
        ShortName: "METNII",
        ImagePath: "./img/150PH.png",
        URL: "https://chsricbws01.chs.dohmh.nycnet/METNII/",
        Environment: environment[0],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Medical Record Requests (MRR)",
        ShortName: "MRR",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/MRR/",
        Environment: environment[0],
        Description: "MRR is used by medical records team, to keep track of patient’s medical records requests made by clients, details of submitting those requests and receiving them back from a request source.",
        Tags:  ["MRR", "Patients", "BC", "Request"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Medical Record Requests (MRR)",
        ShortName: "MRR",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_MRR/Login.aspx",
        Environment: environment[3],
        Description: "MRR is used by medical records team, to keep track of patient’s medical records requests made by clients, details of submitting those requests and receiving them back from a request source.",
        Tags: ["MRR", "Patients", "BC", "Request"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Occupational Health Service Application ",
        ShortName: "OHSA",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/OHSA/Account/Login?ReturnUrl=%2fOHSA",
        Environment: environment[0],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Occupational Health Service Application ",
        ShortName: "OHSA",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_OHSA/Account/Login?ReturnUrl=%2FTest_OHSA%2F",
        Environment: environment[3],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Occupational Health Service Application ",
        ShortName: "OHSA",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_OHSA/",
        Environment: environment[2],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Paperless Employee Document Tracking System",
        ShortName: "PEDTS",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_PEDTS/",
        Environment: environment[3],
        Description: "This application acts as a broker between Administrative entries to collect electronic documents from Employees across various business processes.",
        Tags: ["PEDTS", "Paperless", "Documents", "Tracking", "Upload", "Employee", "HR", "OHS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Report Request Life Cycle Management",
        ShortName: " RRLM",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_RRLM/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Report Request Life Cycle Management (RRLM)",
        ShortName: " RRLM",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/RRLM/Login.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: " Staff Call-Out Log ",
        ShortName: "SCOL",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/SCOL/Login.aspx?ReturnUrl=%2fSCOL%2fdefault.aspx",
        Environment: environment[0],
        Description: "Tracking system that logs Employee callouts for professionals that are generally under specific scheduling restrictions.",
        Tags: ["Operations", "Tracking", "Callout", "Employee", "Staff", "Log"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Staff Call-Out Log ",
        ShortName: "SCOL",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[3],
        Description: "Tracking system that logs Employee callouts for professionals that are generally under specific scheduling restrictions.",
        Tags: ["Operations", "Tracking", "Callout", "Employee", "Staff", "Log"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Sharp Index Enterprise ",
        ShortName: "SIE",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/SIE/",
        Environment: environment[0],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Sharp Index Enterprise ",
        ShortName: "SIE",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_SIE",
        Environment: environment[3],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Sharp Index Enterprise ",
        ShortName: " SIE",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[2],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Transfer Notification Form Tracking",
        ShortName: "TNFT",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/TNFT/",
        Environment: environment[0],
        Description: "Assists with organizing, tracking, and addressing patient transfers for Operations.",
        Tags: ["TNF", "Operations", "Operations", "Patient Transfer", "Track", "Transfer Mental Health"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Transfer Notification Form Tracking",
        ShortName: "TNFT",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_TNFT",
        Environment: environment[3],
        Description: "Assists with organizing, tracking, and addressing patient transfers for Operations.",
        Tags: ["TNF", "Operations", "Operations", "Patient Transfer", "Track", "Transfer Mental Health"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Visitor Application for Naloxone ",
        ShortName: "VAN",
        ImagePath: "./img/150PH.png",
        URL: "https://crpvms2chsws01.corp.nychhc.org/VAN/",
        Environment: environment[0],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Visitor Application for Naloxone ",
        ShortName: "VAN",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAe0lEQVQ4jWPUKXnAQApgIkn1MNHAAqFEVHgjuH/sZuDUev+dU4NbgIfl46UP75X4bNj/cwgyti169wbNhjd3vompcNtKMu188V9NiIXhF4O0OAsDw79Fm9/vefFPBJuT/h5/xyTz8/c3NkYOBgZhNsYfOJzEOBpxtNAAAFT/JFsnrSgIAAAAAElFTkSuQmCC" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_VAN/",
        Environment: environment[3],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    },
    {
        ResourceType: resourceType[0],
        LongName: " Visitor Application for Naloxone ",
        ShortName: "VAN",
        ImagePath:"./img/150PH.png",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_VAN/",
        Environment: environment[2],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    } 

] 

// Define environment details
const environments = {
DEV_ENV: {
name: 'DEV',
color: '#CA00AF'
},

STG_ENV: {
name: 'TRN',
color: '#2D8A43'
},

PRD_ENV: {
name: 'PRD',
color: '#3E97CB'
}
};

// Local array for accent colors
const accentColors = {
    'Production': '#3E97CB',
    'Training': '#2D8A43',
    'Testing': '#CA00AF', // Add the appropriate color for Testing
    // Add colors for other environments as needed
};

// Function to assign header color based on the current URL
function assignHeaderColor() {
    // Get the lowercase current pathname
    const currPathname = window.location.pathname.toLowerCase();
    let assignedHeaderColor = '';

    // Assign colors based on specific conditions
    if (currPathname.includes('/test_')) {
        assignedHeaderColor = environments.DEV_ENV.color;
    } else if (currPathname.includes('/staging')) {
        assignedHeaderColor = environments.STG_ENV.color;
    } else {
        // Default to Production environment for other cases
        data.forEach(app => {
            if (currPathname.includes('/chle')) {
                assignedHeaderColor = environments.PRD_ENV.color;
            }
        });
    }

    // Adjusted selector to target the specific element in the navbar for background color
    const navbar = document.querySelector('.container-fluid');
    if (navbar) {
        navbar.style.backgroundColor = assignedHeaderColor;
    }
}


// Call the function to assign header color
assignHeaderColor();


let currentView = 'icon'; // Initially set 

// Function to dynamically load CSS file
function loadThemeCSS(theme) {
    const head = document.head;
    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `css/${theme}.css`; // Assuming your CSS files are in a 'css' folder

    head.appendChild(link);
}


// Function to open an app overlay with a message
function openAppOverlay(shortName) {
    // Create an overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create a message element with the app's short name
    const message = document.createElement('div');
    message.textContent = `Opening ${shortName} in a new browser tab`;
    message.style.color = 'white';

    // Append the message to the overlay
    overlay.appendChild(message);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Set a timeout to remove the overlay after 2 seconds (2000 milliseconds)
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 2000);
}


// Function to create the view for a specific environment (list, icon, card)
function createEnvironmentView(environment) {
    const container = document.getElementById(`${environment.toLowerCase()}Content`);

    // Check if the container is not null before proceeding
    if (container) {
        container.innerHTML = '';

        // Loop through the data and create the view based on the current view mode
        data.forEach(app => {
            let element;

            switch (currentView) {
                case 'card':
                    element = createCardView(app);
                    break;
                case 'list':
                    element = createListView(app);
                    break;
                case 'icon':
                    element = createIconView(app);
                    break;
                default:
                    // Handle other cases if needed
                    break;
            }

            // Append the created element to the container
            container.appendChild(element);
        });
    }
}


// Function to save user preferences (theme and view) in localStorage
function saveUserPreferences() {
    localStorage.setItem('selectedTheme', document.querySelector('input[name="theme"]:checked').id);
    localStorage.setItem('selectedView', currentView);
}

// Function to load user preferences from localStorage
function loadUserPreferences() {
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedView = localStorage.getItem('currentView'); // Change sessionStorage to localStorage

    document.addEventListener('DOMContentLoaded', function () {
        if (savedTheme) {
            const themeRadio = document.getElementById(savedTheme);
            if (themeRadio) {
                themeRadio.checked = true;
                document.body.classList.remove('theme-light', 'theme-dark', 'theme-valentine', 'theme-july4', 'theme-halloween', 'theme-thanksgiving', 'theme-christmas', 'theme-darkblue','theme-darkgrey', 'theme-standardblack');
                loadThemeCSS(savedTheme);
                updateActiveThemeDisplayDropdown(savedTheme);
            }
        }

        if (savedView) {
            toggleView(savedView);
        } else {
            toggleView('card'); // Set a default view if none is found
        }
    });
}


// Update the function to toggle views (list, icon, card)
function toggleView(view) {
    const listView = document.getElementById('listView');
    const iconView = document.getElementById('iconView');
    const cardView = document.getElementById('cardView');
    const listViewBtn = document.getElementById('listViewBtn');
    const iconViewBtn = document.getElementById('iconViewBtn');
    const cardViewBtn = document.getElementById('cardViewBtn');

    // Reset styles for all buttons
    listViewBtn.style.borderBottom = 'none';
    iconViewBtn.style.borderBottom = 'none';
    cardViewBtn.style.borderBottom = 'none';

    // Hide tooltips when switching views
    hideTooltips();

    // Apply a different style to the selected button based on the view
    switch (view) {
        case 'list':
            listView.style.display = 'block';
            listViewBtn.style.borderBottom = '2px solid RGB(174, 184, 194)'; // Set the border color as needed
            listViewBtn.style.borderRadius = '0'; // Set border radius to 0 for square corners
            iconView.style.display = 'none';
            cardView.style.display = 'none';
            break;
        case 'icon':
            iconView.style.display = 'block';
            iconViewBtn.style.borderBottom = '2px solid RGB(174, 184, 194)'; // Set the border color as needed
            iconViewBtn.style.borderRadius = '0'; // Set border radius to 0 for square corners
            listView.style.display = 'none';
            cardView.style.display = 'none';
            break;
        case 'card':
            cardView.style.display = 'block';
            cardViewBtn.style.borderBottom = '2px solid RGB(174, 184, 194)'; // Set the border color as needed
            cardViewBtn.style.borderRadius = '0'; // Set border radius to 0 for square corners
            listView.style.display = 'none';
            iconView.style.display = 'none';
            break;
        default:
            // Handle other cases if needed
            break;
    }

    // Save the current view in localStorage
    localStorage.setItem('currentView', view);
       
    // Save the current view
    currentView = view;

 

    // Clear the search bar
    clearSearchBar();
}


// Call the toggleView function with the last selected view from localStorage
document.addEventListener('DOMContentLoaded', function () {
    const lastSelectedView = localStorage.getItem('currentView'); 
    if (lastSelectedView) {
        toggleView(lastSelectedView);
    } else {
        toggleView('icon');
    }
});


// Function to create the list view for a specific environment
function createListView(environment) {
    const listView = document.getElementById('listView');
    listView.innerHTML = '';

    // Filter data based on the selected environment
    const filteredData = data.filter(app => app.Environment === environment);

    // Loop through the filtered data and create list items
    filteredData.forEach(app => {
        const listItem = document.createElement('div');
        listItem.classList.add("list-group-item", "list-group-item-action");

        // Create an image element for the icon
        const iconImg = document.createElement('img');
        iconImg.src = app.ImagePath; // Assuming app.ImagePath contains the path to the icon image
        iconImg.alt = app.ShortName;
        iconImg.classList.add("icon-image");

        // Append the icon image to the listItem
        listItem.appendChild(iconImg);

        // Add data attributes for short name and tags and hide them with CSS
        listItem.setAttribute('data-longname', app.LongName);
        listItem.setAttribute('data-tags', Array.isArray(app.Tags) ? app.Tags.join(',') : '');
        listItem.style.display = 'block';

        // Add short name text to the listItem
        listItem.appendChild(document.createTextNode(app.LongName + " - " + app.ShortName));

        // Add a "Launch" button to the listItem
        const launchButton = document.createElement('a');
        launchButton.href = app.URL;
        launchButton.target = "_blank";
        launchButton.classList.add("btn", "btn-primary", "launch-btn");
        launchButton.textContent = "Launch";

        // Add a click event listener to the launch button
        launchButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of opening the link
            openAppOverlay(app.ShortName);
            // Set a delay before opening the actual link
            setTimeout(() => {
                window.open(app.URL, '_blank');
            }, 2000); // 2000 milliseconds (2 seconds) delay
        });

        // Append the launch button to the listItem
        listItem.appendChild(launchButton);

        // Append the listItem to the listView
        listView.appendChild(listItem);
    });
}

// Function to create the icon view for a specific environment
function createIconView(environment) {
    const iconContainer = document.getElementById('iconContainer');
    iconContainer.innerHTML = '';

    // Filter data based on the selected environment
    const filteredData = data.filter(app => app.Environment === environment);

    // Sort filtered data alphabetically by ShortName
    filteredData.sort((a, b) => a.LongName.localeCompare(b.LongName));

    const row = document.createElement("div");
    row.classList.add("row", "justify-space-evenly");

    // Loop through the filtered data and create icon containers
    filteredData.forEach(app => {
       

        const col = document.createElement("div");
        col.classList.add("col-md-3"); // Use col-md-3 to create 4 columns on medium-sized screens

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("text-center");

        // Convert the array of tags to a comma-separated string
        const tags = Array.isArray(app.Tags) ? app.Tags.join(', ') : '';

        // Create popover content
        const popoverContent = `<strong>${app.LongName}</strong><br><br>${app.Description}<br><br><span><b><em>${tags}</b></em></span>`;

        // Set inner HTML for the imageContainer
        imageContainer.innerHTML = `
            <a href="${app.URL}" target="_blank" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-content="${popoverContent}">
                <img src="${app.ImagePath}" style="width: 150px; height: 150px;" class="img-fluid" alt="${app.ShortName}">
            </a>
            <p class="text-center">${app.ShortName}</p>
        `;

        // Add a click event listener to each imageContainer
        imageContainer.addEventListener('click', () => {
            openAppOverlay(app.ShortName);
            event.preventDefault(); // Prevent the default behavior of opening the link
            // Set a delay before opening the actual link
            setTimeout(() => {
                window.open(app.URL, '_blank');
            }, 2000); // 2000 milliseconds (2 seconds) delay
        });

        // Append the imageContainer to the column
        col.appendChild(imageContainer);
        row.appendChild(col);
    });

    // Append the row to the iconContainer
    iconContainer.appendChild(row);

    // Enable popovers after adding elements to the DOM
    const popovers = new bootstrap.Popover(document.body, {
        container: 'body',
        html: true,
        trigger: 'hover',
        selector: '[data-bs-toggle="popover"]'
    });
}



// Function to create the card view for a specific environment
function createCardView(environment) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    // Filter data based on the selected environment
    const filteredData = data.filter(app => app.Environment === environment);

    // Sort filtered data alphabetically by ShortName
    filteredData.sort((a, b) => a.LongName.localeCompare(b.LongName));

    // Loop through the filtered data and create card elements
    filteredData.forEach(app => {

         // Get the accent color for the environment from the local array
         const accentColor = accentColors[app.Environment] || '#000';

        const cardCol = document.createElement("div")
        cardCol.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        // Convert the array of tags to a comma-separated string
        const tags = Array.isArray(app.Tags) ? app.Tags.join(', ') : '';

        // Set inner HTML for the card
        card.innerHTML = `
            <img src="${app.ImagePath}" class="card-img-top" alt="${app.ShortName}">
           <div class="card-header" style="background-color: ${accentColor};"></div>
            <div class="card-body">
                <h5 class="card-title">  ${app.LongName}</h5>
                <h6 class="card-subtitle">(${app.ShortName})</h6>
                <br>
                <p class="card-text">${app.Description}</p>
                <a href="${app.URL}" target="_blank" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="${app.Environment} - ${app.ShortName}">Launch</a>
                <div><span class="badge badge-light">${tags}</span></div>
            </div>
        `;

        // Add a click event listener to each card
        card.addEventListener('click', () => {
            event.preventDefault(); // Prevent the default behavior of opening the link
            openAppOverlay(app.ShortName);
            // Set a delay before opening the actual link
            setTimeout(() => {
                window.open(app.URL, '_blank');
            }, 2000); // 2000 milliseconds (2 seconds) delay
        });

        // Append the card to the cardCol
        cardCol.appendChild(card);
        // Append the cardCol to the cardContainer
        cardContainer.appendChild(cardCol);
    });
}

// Function to split data by environment and create tabs
function splitDataByEnvironment(data) {
    const productionData = data.filter(app => app.Environment === 'Production');
    const trainingData = data.filter(app => app.Environment === 'Training');
    const testingData = data.filter(app => app.Environment === 'Testing');

    createEnvironmentTab('Production', productionData);
    createEnvironmentTab('Training', trainingData);
    createEnvironmentTab('Testing', testingData);
}

// Function to create an environment tab
function createEnvironmentTab(environment, data) {
    const iconContainer = document.getElementById('iconContainer');

    const row = document.createElement("div");
    row.classList.add("row", "justify-space-evenly");

     // Sort filttered data aplhabetically By ShortName
     data.sort((a,b) => a.ShortName.localeCompare(b.ShortName));


    data.forEach(app => {
        const col = document.createElement("div");
        col.classList.add("col-md-3");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("text-center");

        const popoverContent = `<strong>${app.LongName}</strong><br>${app.Description}<br>${app.Tags.join(', ')}`;

        imageContainer.innerHTML = `
            <a href="${app.URL}" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-bs-content="${popoverContent}">
                <img src="${app.ImagePath}" class="img-fluid" alt="${app.ShortName}">
            </a>
            <p class="text-center">${app.ShortName}</p>
        `;

        col.appendChild(imageContainer);
        row.appendChild(col);
    });

    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-pane", "fade", "show");
    tabContent.appendChild(row);

    iconContainer.appendChild(tabContent);
}

// Function to fetch data (assuming it's loaded asynchronously)
function fetchData() {
    return new Promise(resolve => {
        resolve(data);  
    });
}

// Function to load and split data
function loadAndSplitData() {
    // Assume data is loaded asynchronously
    fetchData().then(data => {
        splitDataByEnvironment(data);
        createIconView('Production'); // Show the default tab
        createListView('Production');
        createCardView('Production');
    });
}

// Function to search items based on user input
function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const listItems = document.querySelectorAll('.list-group .list-group-item');
    const notFoundMessage = document.getElementById('notFoundMessage');
    
    let found = false;

    listItems.forEach(item => {
        const textValue = item.textContent || item.innerTcodinext;
        const longName = item.getAttribute('data-longname').toUpperCase();
        const tags = item.getAttribute('data-tags').toUpperCase();

        if (textValue.toUpperCase().indexOf(filter) > -1 || longName.indexOf(filter) > -1 || tags.indexOf(filter) > -1) {
            item.style.display = 'block';
            found = true; // Set found to true if at least one item is displayed
        } else {
            item.style.display = 'none';
        }
    });

    // Display or hide the "not found" message based on whether items were found and if any items are displayed
    iconContainer.style.display = found ? 'block' : 'none';
    notFoundMessage.style.display = found || document.querySelector('.list-group .list-group-item[style="display: block;"]') ? 'none' : 'block';

   // Toggle the visibility of the "Item not found" message based on whether items were found
   cardContainer.style.display = found ? '' : 'none';
   notFoundMessage.style.display = found ? 'none' : 'block';



    // Clear the search bar if the input is empty
    if (!filter.trim()) {
        notFoundMessage.style.display = 'none';
    }
}

// Update the event listener for the search bar
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => searchItems(currentView));

// Update the event listeners for tab switching
document.getElementById('production-tab').addEventListener('click', () => {
    switchEnvironmentView('Production');
    searchItems('Production');
});
document.getElementById('training-tab').addEventListener('click', () => {
    switchEnvironmentView('Training');
    searchItems('Training');
});
document.getElementById('testing-tab').addEventListener('click', () => {
    switchEnvironmentView('Testing');
    searchItems('Testing');
});

// Load and split data when the script is loaded
loadAndSplitData();

// Function to switch environment view
function switchEnvironmentView(environment) {
    createEnvironmentView(environment);
    createListView(environment);
    createIconView(environment);
    createCardView(environment)
}



// Function to clear the search bar when the user switches views
function clearSearchBar() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchItems(); // Optionally call searchItems to update the view based on the cleared search bar
}


const themeRadios = document.querySelectorAll('input[name="theme"]');

// Add event listeners to radio buttons to apply theme classes
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            // Remove existing theme classes
            document.body.classList.remove('theme-light', 'theme-dark', 'theme-valentine', 'theme-july4', 'theme-halloween', 'theme-thanksgiving', 'theme-christmas', 'theme-darkblue','theme-darkgrey', 'theme-standardblack');

            // Load the appropriate CSS file based on the checked radio button
            loadThemeCSS(radio.id.toLowerCase());

            // Update the active theme display in the dropdown
            updateActiveThemeDisplayDropdown(radio.id);

            // Save user preferences
            saveUserPreferences();
        }
    });
});

// Add this function to update the active theme display within the dropdown
function updateActiveThemeDisplayDropdown(theme) {
    const activeThemeElement = document.getElementById('activeTheme');
    if (activeThemeElement) {
        activeThemeElement.textContent = `Theme: ${getThemeName(theme)} `;
    }
}

// Add this function to get the human-readable theme name
function getThemeName(theme) {
    switch (theme) {
        case 'Light':
            return 'Light';
        case 'Dark':
            return 'Dark';
        case 'Valentine':
            return 'Valentine';
        case 'July4':
            return 'July 4th';
        case 'Halloween':
            return 'Halloween';
        case 'Thanksgiving':
            return 'Thanksgiving';
        case 'Christmas':
            return 'Christmas';
        case 'Darkblue':
            return 'Dark Blue';
        case 'Darkgrey':
            return 'Dark Grey';
        case 'Standardblack':
            return 'Standard Black';
        // Add other cases as needed
        default:
            return 'Unknown';
    }
}

// Preventing view switch on search
document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    toggleView(currentView); // Maintain the current view

    // Save user preferences
    saveUserPreferences();
});

// Call this function to load user preferences when the script is loaded
loadUserPreferences();

  // Enable Bootstrap tooltips
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Function to hide Bootstrap tooltips
function hideTooltips() {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        const bsTooltip = bootstrap.Tooltip.getInstance(tooltip);
        if (bsTooltip) {
            bsTooltip.hide();
        }
    });
}
