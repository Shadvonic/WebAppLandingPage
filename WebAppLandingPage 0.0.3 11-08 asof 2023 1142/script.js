const resourceType = ["App", "Doc", "Report", "Video", "Course", "Bookmark", 'N/A', "ETC"]
const environment = ["Production", "Pre-Production", "Staging", "Test", "Development", "N/A", "ETC"] 

const data = [

    {
        ResourceType: resourceType[0],
        LongName: "(Prod) ACL [CORP",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ACL/",
        Environment: environment[0],
        Description: "",
        Tags: []
    }, 
    {
        ResourceType: resourceType[0],
        LongName: "(Staging) ACL [CORP]",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_ACL/Login.aspx?ReturnUrl=%2fStaging_ACL",
        Environment: environment[2],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) ACL [CORP]",
        ShortName: "ACL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ACL/Login.aspx?ReturnUrl=%2fTest_ACL%2f",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[PROD] AIEHRD",
        ShortName: "AIEHRD",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/AIEHRD/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) BradH [CORP]",
        ShortName: "BradH",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/BradH/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) BradH [CORP]",
        ShortName: "BradH",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_BradH",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(App) Team Tasks Tracker",
        ShortName: " BugTracker.NET",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAChElEQVQ4jW3BQYscVRAA4KpX1a9f9/buzmSzmqzJyqKCeooRAupBRCGCQsRbiBdvkoOXxZt3ySFXL/4A8WAMaDwYERQUFQzRGFCILCbGrMRsZqdnprvfe1XlH/D7cPnzN7faXY/zlgOSBzfvGYtcES5cHoly7/d6HkxXq1hWkngl9mZ5FvwEG2itij6TiTjyVbSByliq+q42bRJJG2bcSCes+64sys03jr50RHqxISo70kh2vb36658/kAsZ6zZMB+pZSJQ4Jd5c2tg+9spBAIAeIACAAdyzk58e+uSDby/EunOmdfTcOyB0LEXoHS2i0HBreu3SHz87/8CpJ14+TKPXHnvxi98vfx//EVqqZZXNnBmxOXGWCV1JV+7fPPfLhQmtqt84++QznFxTYp+nWC7HrmIEcCZgEkmzQwFqePXRciutjDcPPpic/bZ3Y2dy19XLaI4wMYIgqgNBsBKQBF/YOHH89AlEPFCM22Hv428+2+2ia0aUoBo6B//Posym2tU83j65/erR54quVc4JlpwBmTkFMsABTMi+uv3jmY/ePXXxvbe/+3BX8/rSoTOPPx8MBtTkmQ1AkRTJi2M1ApnJ5MZ8p/Wjxd2diXaHhdao9OTRzEAYURElo5Iii+kgx8cPv3Ps9WzV1iNPbfqS0K7du9X2ffDLzjIHBUSdU+qDSu0J/Nb602+tPwuQAGABw+U7P71//UskBtHBA5MQ5VyUdDv/ff7qpSPSq8UOsMd2rHRz/87Xf13ZqzsfQgSbseBDF08f6P9Nld3HFWitiotMhhqQFTSV5vKIEVJyVmgRAXnqw9rAzTA3nmHjwcWugGoIPvF+INU8K/PKQhcFrEVrEv4Hbb1dSfkdB2IAAAAASUVORK5CYII=",
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_BugNet/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[1],
        LongName: "(Doc) Team Tasks Tracker",
        ShortName: "BugTracker.NET Docs",
        ImagePath: "" ,
        URL: "http://ifdefined.com/doc_bug_tracker_install.html",
        Environment: environment[6],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[6],
        LongName: "",
        ShortName: "CBT",
        ImagePath: "" ,
        URL: "",
        Environment: environment[5],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(PROD) WELS",
        ShortName: "WELS",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/WELS_INDEX/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(TEST) WELS Course List",
        ShortName: " WELS Course List",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/index.html",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(TEST) WELS Course Listing",
        ShortName: "WELS Course Listing",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_WELS_INDEX/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[5],
        LongName: "PREA - NIC LearnCenter",
        ShortName: "PREA",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAU0lEQVQ4jWP8z0AaYCJRPekaWFB4/3E4kJERwfyPXymGNsb/yKqRTMJuMyMjkh9wqUaVYsIUwq+H7GAl6GmYAiZMITyqGcgNVoKWYIk4ogHtEx8A02caF5dkymYAAAAASUVORK5CYII=" ,
        URL: "https://nic.learn.com/custom/CustomLoginPage.asp?lcid=178409&secure=true",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[5],
        LongName: "NIC LearnCenter (for PREA) [New Employees]",
        ShortName: "NIC LearnCenter",
        ImagePath: "" ,
        URL: "https://nic.learn.com/learncenter.asp?id=178409&sessionid=3-1EA67C36-1007-49CF-970A-36EBBD1A0F77&page=1",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[5],
        LongName: "PREA - NIC (For New Employees)",
        ShortName: "PREA - (For New Employees)",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAU0lEQVQ4jWP8z0AaYCJRPekaWFB4/3E4kJERwfyPXymGNsb/yKqRTMJuMyMjkh9wqUaVYsIUwq+H7GAl6GmYAiZMITyqGcgNVoKWYIk4ogHtEx8A02caF5dkymYAAAAASUVORK5CYII=" ,
        URL: "https://nic.learn.com/learncenter.asp?sessionid=3-1EA67C36-1007-49CF-970A-36EBBD1A0F77&DCT=1&id=178409&page=85",
        Environment: environment[0],
        Description: "",
        Tags: []
    }, 
    {
        ResourceType: resourceType[3],
        LongName: "PowerShell For Beginners Full Course | PowerShell Beginner tutorial Full Course - YouTube",
        ShortName: "PowerShell For Beginners Full Course",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jZ2TQWtTQRDHfzO7yUsNKSG0heJJ0YKnCvVSkHrV7+BBeu7Vk9+lH8CLN6EXk4Lo1V48lGClFBELGmmSmr73djy8fS8vll4c+LO7s7OzM///LhQmBmrg+uDtZrgIBQQAKyf/YQbiBexFt9t9niSP7ji3umrW7og0UfWL0ZaOzGYjmBxn2c/BdPpJxuNz+vDwFxxnqmaqZs4V8L5AuS6haqmqXcDpO3jCEN4YmEFmkMcxrSCSGqSh8GcGIY52Am91Ce5HJ5EYBRwbG45222HmUHVS+DX2DhASuKu3oAeolGSqCiDs7gqHh8L2thCCxOQSbxFAO9BToClzNQSJokwmsLUFgwHs78P6eklnlQho6c0axUKbTVhZgUYjHpeqCwE8kMWFxYNF9uVlGA5hbw8ODuqJzajqnPENPtfYDxU2N4OtrRVzkVDfC0V8/h2G/g98AR7ESkJF8tFRcYdzkOf15iRW6y/hlD48voCz+BbmELFrvhrG8OMjPBOAV3D7qXM791R73Var00qSJRoNTyifB5Dn+eVsNv19dTX+mmWj93n+4SWciM1LKkmqy7RoImFBqPqPfH39K7t/4A18f74nAH8Bjm35s3ZkOjEAAAAASUVORK5CYII=" ,
        URL: "https://www.youtube.com/watch?v=UVUd9_k9C6A",
        Environment: environment[6],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(PROD) CCAPIC",
        ShortName: "CCAPIC",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CCAPIC/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "Test) CCAPIC",
        ShortName: "CCAPIC",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_CCAPIC/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[PROD] CESA",
        ShortName: "CESA",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS_CESA/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[TEST] EPASS-CESA",
        ShortName: "CESA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS-CESA/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) CIRTS [CORP]",
        ShortName: "CIRTS",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CIRTS/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
     {
        ResourceType: resourceType[0],
        LongName: "(Test) CIRTS",
        ShortName: "CIRTS",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_CIRTS/Login.aspx?ReturnUrl=%2fTest_CIRTS",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) Close Call [CORP]",
        ShortName: "Close Call",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCall/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) Close Call Admin [CORP]",
        ShortName: "Close Call Admin",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/CloseCallAdmin/Login.aspx?ReturnUrl=%2fCloseCallAdmin%2fdefault.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) Discharge Services Dashboard  [CORP]",
        ShortName: "DSD",
        ImagePath: "" ,
        URL: "",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) Discharge Services Dashboard [CORP]",
        ShortName: "DSD",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_DSD/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[PROD]  Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ECT/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "[Test] ECT - Employee COVID-19 Tracking",
        ShortName: "ECT",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_ECT/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(PROD) Employee COVID-19 Vaccination Consent (ECVC)",
        ShortName: "ECVC",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/ECVC/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test-CORP) eCW Templates",
        ShortName: "CORP eCW Templates",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_eCWTemplater/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test-CHS) eCW Templates",
        ShortName: "CHS eCW Templates",
        ImagePath: "" ,
        URL: "https://hhcridcws20.riepf.com/Test_eCWTemplater/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(PRD) EPASS",
        ShortName: "EPASS",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/EPASS/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) PASUT [CORP]",
        ShortName: "PASUT",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/PASUT/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) EPASS [CORP]",
        ShortName: "EPASS",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_EPASS/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) Locker",
        ShortName: "Locker",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/Locker/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) CHS-LOCKER",
        ShortName: "CHS-LOCKER",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_LOCKER/Account/Login?ReturnUrl=%2fTest_LOCKER%2fLOCKER",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) METNII [CORP]",
        ShortName: "METNII",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/METNII",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) METNII [CORP]",
        ShortName: "METNII",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_METNII/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) METNII [CHS.DOHMH.NYCNET]",
        ShortName: "METNII [CHS.DOHMH.NYCNET]",
        ImagePath: "" ,
        URL: "https://chsricbws01.chs.dohmh.nycnet/METNII/",
        Environment: environment[0],
        Description: "",
        Tags: []
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
        LongName: "(Prod) OHSA [CORP]",
        ShortName: "OSHA",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/OHSA/Account/Login?ReturnUrl=%2fOHSA",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) OHSA [CORP]",
        ShortName: "OSHA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_OHSA/Account/Login?ReturnUrl=%2FTest_OHSA%2F",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Staging) OHSA [CORP]",
        ShortName: "OSHA",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_OHSA/",
        Environment: environment[2],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) PEDTS",
        ShortName: "PEDTS",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_PEDTS/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) PRATA [CORP]",
        ShortName: "PRATA",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/PRATA/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) PRATA [CORP]",
        ShortName: "PRATA",
        ImagePath: "https://crpvms2chspdws1.corp.nychhc.org/Test_PRATA/Account/Login" ,
        URL: "",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) Report Request Life Cycle Management",
        ShortName: " RRLM",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_RRLM/Login.aspx",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(PRD) Report Request Life Cycle Management (RRLM)",
        ShortName: " RRLM",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/RRLM/Login.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) SCOL [CORP]",
        ShortName: "SCOL",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/SCOL/Login.aspx?ReturnUrl=%2fSCOL%2fdefault.aspx",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) SCOL [CORP]",
        ShortName: "SCOL",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) Sharp Index Enterprise [CORP]",
        ShortName: "Sharp Index Enterprise",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/SIE/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) Sharp Index Enterprise [CORP]",
        ShortName: "Sharp Index Enterprise",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_SIE",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Staging) Sharp Index Enterprise [CORP]",
        ShortName: " Sharp Index Enterprise",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_SIE",
        Environment: environment[2],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) TNFT",
        ShortName: "TNFT",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/TNFT/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) TNFT",
        ShortName: "TNFT",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_TNFT",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Prod) VAN [CORP]",
        ShortName: "VAN",
        ImagePath: "" ,
        URL: "https://crpvms2chsws01.corp.nychhc.org/VAN/",
        Environment: environment[0],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "(Test) VAN [CORP]",
        ShortName: "VAN",
        ImagePath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAe0lEQVQ4jWPUKXnAQApgIkn1MNHAAqFEVHgjuH/sZuDUev+dU4NbgIfl46UP75X4bNj/cwgyti169wbNhjd3vompcNtKMu188V9NiIXhF4O0OAsDw79Fm9/vefFPBJuT/h5/xyTz8/c3NkYOBgZhNsYfOJzEOBpxtNAAAFT/JFsnrSgIAAAAAElFTkSuQmCC" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Test_VAN/",
        Environment: environment[3],
        Description: "",
        Tags: []
    },
    {
        ResourceType: resourceType[0],
        LongName: "Staging) VAN [CORP]",
        ShortName: "VAN",
        ImagePath: "" ,
        URL: "https://crpvms2chspdws1.corp.nychhc.org/Staging_VAN/",
        Environment: environment[2],
        Description: "",
        Tags: []
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
      listItem.textContent =  app.Environment + " - " + app.ShortName;
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
  
       // Convert the array of tags to a comma-separated string
       const tags = Array.isArray(app.Tags) ? app.Tags.join(', ') : ''; 

      card.innerHTML = `
        <img src="${app.ImagePath} class="card-img-top" alt="${app.ShortName}">
        <div class="card-body">
          <h5 class="card-title"> (${app.Environment}) ${app.ShortName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="${app.URL}" target="_blank" class="btn btn-primary">(${app.Environment}) ${app.ShortName}</a>
          <div><span class="badge badge-light">${tags}</span></div>
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

