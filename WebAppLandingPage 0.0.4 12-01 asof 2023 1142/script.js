const resourceType = ["App", "Doc", "Report", "Video", "Course", "Bookmark"] // 0-5
const environment = ["Production", "Pre-Production", "Staging", "Test", "Development"] // 0-4
const data = [

    {
        ResourceType: resourceType[0],
        LongName: " [Prod] Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ACL/",
        Environment: environment[0],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    }, 
    {
        ResourceType: resourceType[0],
        LongName: " [Staging] Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_ACL/Login.aspx?ReturnUrl=%2fStaging_ACL",
        Environment: environment[2],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Assistance Center Log",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ACL/Login.aspx?ReturnUrl=%2fTest_ACL%2f",
        Environment: environment[3],
        Description: "Documenting and tracking encounters where CHS assists persons in custody and their families by connecting them to medical and mental health services in and around their communities.",
        Tags: ["ACL", "Assistance", "Services", "Assistance Center"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Automated Import of Employee HR Data",
        ShortName: "AIEHRD",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/AIEHRD/",
        Environment: environment[0],
        Description: "An interface that allows the user to upload spreadsheets containing HR data for the purpose of importing the data into ECT or CBT/WELS. Provides a fast, efficient alternative to laborious manual importing.",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[App] Team Tasks Tracker",
        ShortName: " BugTracker.NET",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAChElEQVQ4jW3BQYscVRAA4KpX1a9f9/buzmSzmqzJyqKCeooRAupBRCGCQsRbiBdvkoOXxZt3ySFXL/4A8WAMaDwYERQUFQzRGFCILCbGrMRsZqdnprvfe1XlH/D7cPnzN7faXY/zlgOSBzfvGYtcES5cHoly7/d6HkxXq1hWkngl9mZ5FvwEG2itij6TiTjyVbSByliq+q42bRJJG2bcSCes+64sys03jr50RHqxISo70kh2vb36658/kAsZ6zZMB+pZSJQ4Jd5c2tg+9spBAIAeIACAAdyzk58e+uSDby/EunOmdfTcOyB0LEXoHS2i0HBreu3SHz87/8CpJ14+TKPXHnvxi98vfx//EVqqZZXNnBmxOXGWCV1JV+7fPPfLhQmtqt84++QznFxTYp+nWC7HrmIEcCZgEkmzQwFqePXRciutjDcPPpic/bZ3Y2dy19XLaI4wMYIgqgNBsBKQBF/YOHH89AlEPFCM22Hv428+2+2ia0aUoBo6B//Posym2tU83j65/erR54quVc4JlpwBmTkFMsABTMi+uv3jmY/ePXXxvbe/+3BX8/rSoTOPPx8MBtTkmQ1AkRTJi2M1ApnJ5MZ8p/Wjxd2diXaHhdao9OTRzEAYURElo5Iii+kgx8cPv3Ps9WzV1iNPbfqS0K7du9X2ffDLzjIHBUSdU+qDSu0J/Nb602+tPwuQAGABw+U7P71//UskBtHBA5MQ5VyUdDv/ff7qpSPSq8UOsMd2rHRz/87Xf13ZqzsfQgSbseBDF08f6P9Nld3HFWitiotMhhqQFTSV5vKIEVJyVmgRAXnqw9rAzTA3nmHjwcWugGoIPvF+INU8K/PKQhcFrEVrEv4Hbb1dSfkdB2IAAAAASUVORK5CYII=",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_BugNet/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Web-based Empowerment and Learning System",
        ShortName: "WELS",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/WELS_INDEX/",
        Environment: environment[0],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Web-based Empowerment and Learning System Course List",
        ShortName: " WELS Course List",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/index.html",
        Environment: environment[3],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Web-based Empowerment and Learning System Course Listing",
        ShortName: "WELS Course Listing",
        ImagePath: "",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/",
        Environment: environment[3],
        Description: "CHS centralized learning environment for facilitating training initiatives be they web based and-or in-person.",
        Tags: ["CBT", "WELS", "Web-based", "Training", "Learning", "Learn", "PREA", "ADA", "Nunez"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Clinical Court Advocacy for Persons In Custody",
        ShortName: "CCAPIC",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CCAPIC/",
        Environment: environment[0],
        Description: "Central notes for CCA team to assist with tracking cases for advocacy for persons in custody.",
        Tags: ["CCA", "Court", "Advocacy", "Patients", "Advocacy Case", "CCA Intake"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Clinical Court Advocacy for Persons In Custody",
        ShortName: "CCAPIC",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_CCAPIC/",
        Environment: environment[3],
        Description: "Central notes for CCA team to assist with tracking cases for advocacy for persons in custody.",
        Tags:["CCA", "Court", "Advocacy", "Patients", "Advocacy Case", "CCA Intake"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] COVID-19 Electronic Survey Application",
        ShortName: "CESA",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS_CESA/",
        Environment: environment[0],
        Description: "An EPASS module historically used for capturing COVID-19 screenings survey data from arrested individuals. It is now only used to view historical records as the screening survey has been integrated into EPASS Level 1 form.",
        Tags:  ["CESA", "COVID", "Screening", "EPASS", "Nursing Department", "Survey"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] COVID-19 Electronic Survey Application",
        ShortName: "CESA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS-CESA/",
        Environment: environment[3],
        Description: "An EPASS module historically used for capturing COVID-19 screenings survey data from arrested individuals. It is now only used to view historical records as the screening survey has been integrated into EPASS Level 1 form.",
        Tags: ["CESA", "COVID", "Screening", "EPASS", "Nursing Department", "Survey"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Close Call and Near Miss Reporting  [CORP]",
        ShortName: "Close Call",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCall/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Close Call and Near Miss Reporting Admin [CORP]",
        ShortName: "Close Call Admin",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCallAdmin/Login.aspx?ReturnUrl=%2fCloseCallAdmin%2fdefault.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Discharge Services Dashboard  [CORP]",
        ShortName: "DSD",
        ImagePath: "" ,
        URL: "",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Discharge Services Dashboard [CORP]",
        ShortName: "DSD",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_DSD/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod]  Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ECT/",
        Environment: environment[0],
        Description:"Provides a mechanism for tracking cases, tests, and vaccines and their associated appointments",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ECT/",
        Environment: environment[3],
        Description: "Provides a mechanism for tracking cases, tests, and vaccines and their associated appointments",
        Tags: []
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "[Test-CORP] eCW Templates",
        ShortName: "CORP eCW Templates",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_eCWTemplater/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Enhanced Pre-Arraignment Screening Service",
        ShortName: "EPASS",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS/",
        Environment: environment[0],
        Description: "Application for Pre-Arraignment screening for medical, mental health, and social work diversion in NYPD arrest facilities.",
        Tags: ["Pre-Screening", "Pre-Arraignment", "Arrest", "Screening", "Level 1", "Level 2", "Diversion", "Nursing Department", "PASU", "PASUT", "EPASS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Enhanced Pre-Arraignment Screening Service [CORP]",
        ShortName: "EPASS",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS/",
        Environment: environment[3],
        Description: "Application for Pre-Arraignment screening for medical, mental health, and social work diversion in NYPD arrest facilities.",
        Tags: ["Pre-Screening", "Pre-Arraignment", "Arrest", "Screening", "Level 1", "Level 2", "Diversion", "Nursing Department", "PASU", "PASUT", "EPASS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Locker",
        ShortName: "Locker",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/Locker/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] CHS-LOCKER",
        ShortName: "CHS-LOCKER",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_LOCKER/Account/Login?ReturnUrl=%2fTest_LOCKER%2fLOCKER",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Medical Evaluation & Treatment for Non-Inmate Incidents [CORP]",
        ShortName: "METNII",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/METNII",
        Environment: environment[0],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Medical Evaluation & Treatment for Non-Inmate Incidents [CORP]",
        ShortName: "METNII",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_METNII/",
        Environment: environment[3],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Medical Evaluation & Treatment for Non-Inmate Incidents [CHS.DOHMH.NYCNET]",
        ShortName: "METNII",
        ImagePath: "" ,
        URL: "https://chsricbws01.chs.dohmh.nycnet/METNII/",
        Environment: environment[0],
        Description: "Facilities an environment for CHS medical professional staff to record or document activities, encounters, and incidents that require medical intervention for persons other than persons in custody at all CHS facilities.",
        Tags: ["METNII", "Employee", "Medical", "Incident", "Treatment", "DOC"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Medical Record Requests (MRR)",
        ShortName: "MRR",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/MRR/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Medical Record Requests (MRR)",
        ShortName: "MRR",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_MRR/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Occupational Health Service Application [CORP]",
        ShortName: "OHSA",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/OHSA/Account/Login?ReturnUrl=%2fOHSA",
        Environment: environment[0],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Occupational Health Service Application [CORP]",
        ShortName: "OHSA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_OHSA/Account/Login?ReturnUrl=%2FTest_OHSA%2F",
        Environment: environment[3],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Staging] Occupational Health Service Application [CORP]",
        ShortName: "OHSA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_OHSA/",
        Environment: environment[2],
        Description: "Application where OHS records and tracks employee Operational Health documents in regard to OHS business practices.",
        Tags: ["OHS", "Annual", "Health Assessment", "Employee Health", "HR"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Paperless Employee Document Tracking System",
        ShortName: "PEDTS",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_PEDTS/",
        Environment: environment[3],
        Description: "This application acts as a broker between Administrative entries to collect electronic documents from Employees across various business processes.",
        Tags: ["PEDTS", "Paperless", "Documents", "Tracking", "Upload", "Employee", "HR", "OHS"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Report Request Life Cycle Management",
        ShortName: " RRLM",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_RRLM/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Report Request Life Cycle Management (RRLM)",
        ShortName: " RRLM",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/RRLM/Login.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Staff Call-Out Log [CORP]",
        ShortName: "SCOL",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/SCOL/Login.aspx?ReturnUrl=%2fSCOL%2fdefault.aspx",
        Environment: environment[0],
        Description: "Tracking system that logs Employee callouts for professionals that are generally under specific scheduling restrictions.",
        Tags: ["Operations", "Tracking", "Callout", "Employee", "Staff", "Log"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Staff Call-Out Log [CORP]",
        ShortName: "SCOL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[3],
        Description: "Tracking system that logs Employee callouts for professionals that are generally under specific scheduling restrictions.",
        Tags: ["Operations", "Tracking", "Callout", "Employee", "Staff", "Log"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Sharp Index Enterprise [CORP]",
        ShortName: "SIE",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/SIE/",
        Environment: environment[0],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Sharp Index Enterprise [CORP]",
        ShortName: "SIE",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_SIE",
        Environment: environment[3],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Staging] Sharp Index Enterprise [CORP]",
        ShortName: " SIE",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[2],
        Description: "Tracking system for Sharps used in facilities.  Also, tracks what patients a specific sharp was used to administer.",
        Tags: ["SIE", "Sharp", "Sharps", "Needles", "Tracking"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Transfer Notification Form Tracking",
        ShortName: "TNFT",
        ImagePath: "",
        URL: "https://crpvms2chsws01.corp.nychhc.org/TNFT/",
        Environment: environment[0],
        Description: "Assists with organizing, tracking, and addressing patient transfers for Operations.",
        Tags: ["TNF", "Operations", "Operations", "Patient Transfer", "Track", "Transfer Mental Health"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Transfer Notification Form Tracking",
        ShortName: "TNFT",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_TNFT",
        Environment: environment[3],
        Description: "Assists with organizing, tracking, and addressing patient transfers for Operations.",
        Tags: ["TNF", "Operations", "Operations", "Patient Transfer", "Track", "Transfer Mental Health"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Prod] Visitor Application for Naloxone [CORP]",
        ShortName: "VAN",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/VAN/",
        Environment: environment[0],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] Visitor Application for Naloxone [CORP]",
        ShortName: "VAN",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAe0lEQVQ4jWPUKXnAQApgIkn1MNHAAqFEVHgjuH/sZuDUev+dU4NbgIfl46UP75X4bNj/cwgyti169wbNhjd3vompcNtKMu188V9NiIXhF4O0OAsDw79Fm9/vefFPBJuT/h5/xyTz8/c3NkYOBgZhNsYfOJzEOBpxtNAAAFT/JFsnrSgIAAAAAElFTkSuQmCC" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_VAN/",
        Environment: environment[3],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Staging] Visitor Application for Naloxone [CORP]",
        ShortName: "VAN",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_VAN/",
        Environment: environment[2],
        Description: "CHS Electronic Survey for document and tracking demographics of individuals trained to administer Naloxone.",
        Tags: ["Prevention", "Training", "Naloxone", "Narcan", "Survey", "Visitor"]
    }



    

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
    clearSearchBar();
 
}

function createListView() {
    const listView = document.getElementById('listView');
    listView.innerHTML = '';
    data.forEach(app => {
      const listItem = document.createElement('a');
      listItem.href = app.URL;
      listItem.target = "_blank";
      listItem.classList.add("list-group-item", "list-group-item-action");
      listItem.textContent =  app.LongName;
      listView.appendChild(listItem);
    });
  }
/*
function createCardView() {

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.forEach(app => {
      const cardCol = document.createElement("div");
      cardCol.classList.add("col");
  
      const card = document.createElement("div");
      card.classList.add("card", "h-100");
  
       // Convert the array of tags to a comma-separated string
       const tags = Array.isArray(app.Tags) ? app.Tags.join(', ') : ''; 

      card.innerHTML = `
        <img src="./img/HnHlogo.png" class="card-img-top" alt="${app.ShortName}">
        <div class="card-body">
          <h5 class="card-title"> [${app.Environment}] ${app.ShortName}</h5>
          <p class="card-text">${app.Description}</p>
          <a href="${app.URL}" target="_blank" class="btn btn-primary">[${app.Environment}] ${app.ShortName}</a>
          <div><span class="badge badge-light">${tags}</span></div>
        </div>
      `;
  
      cardCol.appendChild(card);
      cardContainer.appendChild(cardCol);
    });
  }
  */

  function createCardView() {
    const iconContainer = document.getElementById('iconContainer');
    iconContainer.innerHTML = '';

    let rowCounter = 0;
    let colCounter = 0;

    data.forEach((app, index) => {
      if (colCounter === 0) {
        rowCounter++;
        const row = document.createElement("div");
        row.classList.add(`app_${rowCounter}_row`, "icons", "row");
        iconContainer.appendChild(row);
      }

      const icon = document.createElement("div");
      icon.classList.add("app", "col");
      icon.style.background = `url(${app.IconURL})`;
      icon.style.backgroundSize = 'cover';
      icon.style.backgroundPosition = 'center';

      const appName = document.createElement("div");
      appName.classList.add("app-name");
      appName.innerText = `[${app.Environment}] ${app.ShortName}`;

      icon.appendChild(appName);
      iconContainer.lastChild.appendChild(icon);

      // Add Bootstrap popover to show the app information on hover
      $(icon).popover({
        title: `${app.ShortName}`,
        content: `${app.Description}<br><strong>Tags:</strong><div><span class="badge badge-light">${app.Tags.join(', ')}</span></div>`,
        html: true,
        placement: 'top',
        trigger: 'hover',
      });

      colCounter++;

      if (colCounter === 4 || index === data.length - 1) {
        colCounter = 0;
      }
    });
  }



createListView();
createCardView();

function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const listItems = document.querySelectorAll('.list-group .list-group-item');
    const cardTitles = document.querySelectorAll('.card-container .card .card-title');
    const notFoundMessage = document.getElementById('notFoundMessage');
    
    let found = false;

    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
           
        }
    });

   // Display or hide the "not found" message based on whether items were found and if any items are displayed
  notFoundMessage.style.display = found || document.querySelector('.list-group .list-group-item[style="display: block;"]') ? 'none' : 'block';

  // Clear the search bar if the input is empty
  if (!filter.trim()) {
    notFoundMessage.style.display = 'none';
    searchInput.value = '';
  }
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

