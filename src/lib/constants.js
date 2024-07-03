 import Dashboard from "../components/images/Dashboard.svg";
 import donor from "../components/images/donor.png";
 import registration from "../components/images/registration.svg";
 import serology from "../components/images/serology.png";
 import Billing from "../components/images/Billing.svg";
 import bloodStock from "../components/images/bloodStock.svg";
 import waste from "../components/images/waste.png";
 import bulk from "../components/images/bulk.svg";
 import requestion from "../components/images/requestion.svg";
 import Bloodcamp from "../components/images/Bloodcamp.svg";
 import settings from "../components/images/settings.svg";
 import certificate from "../components/images/certificate.svg";
 import reports from "../components/images/reports.svg";
 import barcode from "../components/images/barcode.svg";
 import userManagement from "../components/images/userManagement.svg";
 import roleManage from "../components/images/roleManage.svg";
 import itemstock from "../components/images/itemstock.svg";

export const data = [
     {
         "type": "Whole Blood (CPD)",
         "total": 0,
         "AB-Ve": 0,
         "AB+Ve": 0,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Whole Blood (CPDA-1)",
         "total": 2,
         "AB-Ve": 0,
         "AB+Ve": 1,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 1,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Packed Red Blood Cells",
         "total": 3,
         "AB-Ve": 0,
         "AB+Ve": 1,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 1,
         "B-Ve": 1,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Fresh Frozen Plasma",
         "total": 22,
         "AB-Ve": 0,
         "AB+Ve": 4,
         "A+Ve": 4,
         "A-Ve": 0,
         "B+Ve": 4,
         "B-Ve": 2,
         "O-Ve": 2,
         "O+Ve": 6
     },
     {
         "type": "Single Donor Platelet",
         "total": 0,
         "AB-Ve": 0,
         "AB+Ve": 0,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Cryoprecipitate",
         "total": 10,
         "AB-Ve": 2,
         "AB+Ve": 4,
         "A+Ve": 3,
         "A-Ve": 0,
         "B+Ve": 1,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Plasma",
         "total": 19,
         "AB-Ve": 2,
         "AB+Ve": 6,
         "A+Ve": 6,
         "A-Ve": 0,
         "B+Ve": 2,
         "B-Ve": 0,
         "O-Ve": 2,
         "O+Ve": 1
     },
     {
         "type": "Platelet Concentrate",
         "total": 0,
         "AB-Ve": 0,
         "AB+Ve": 0,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Cryo Poor Plasma",
         "total": 5,
         "AB-Ve": 0,
         "AB+Ve": 3,
         "A+Ve": 1,
         "A-Ve": 0,
         "B+Ve": 1,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Random Donor Platelets",
         "total": 0,
         "AB-Ve": 0,
         "AB+Ve": 0,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Platelets additive solutions",
         "total": 0,
         "AB-Ve": 0,
         "AB+Ve": 0,
         "A+Ve": 0,
         "A-Ve": 0,
         "B+Ve": 0,
         "B-Ve": 0,
         "O-Ve": 0,
         "O+Ve": 0
     },
     {
         "type": "Total",
         "total": 61,
         "AB-Ve": 4,
         "AB+Ve": 19,
         "A+Ve": 14,
         "A-Ve": 0,
         "B+Ve": 9,
         "B-Ve": 4,
         "O-Ve": 4,
         "O+Ve": 7
     }
 ]

 export const Blood_types = {
    "total":"total",
     "AB-Ve": "AB-Ve",
     "AB+Ve": "AB+Ve",
    "A+Ve": "A+Ve",
    "A-Ve": "A-Ve",
    "B+Ve": "B+Ve",
    "B-Ve":"B-Ve",
    "O-Ve": "O-Ve",
    "O+Ve":"O+Ve"
 }

  export const SideBar_menu = [
    {
        label:"Dashboard",
        to:"/",
        img:Dashboard
    }
    ,
    {
        label:"AllDoners",
        to:"/AllDoners",
        img:donor
    }
    ,{
        label:"Master Register",
        to:"/Master-Register",
        img:registration
    },
    {
        label:"Serology Testing",
        to:"/Serology-Testing",
        img:serology,
        children :[
            {
                label :"TTI Testing",
                to:"/Serology-Testing/TTI-Testing"
            },
            {
                label :"Blood Grouping",
                to:"/Blood-Grouping"
            }
        ]
    },
    {
        label:"Billing",
        to:"/Billing",
        img:Billing
    }
    ,
    {
        label:"Blood Stock",
        to:"/Blood-Stock",
        img:bloodStock
    }
    ,
    {
        label:"Waste Management",
        to:"/Waste-Management",
        img:waste,
        children:[
            {
                label:"Waste List",
                to:"Waste-List"
            },
            {
                label:"Autoclave",
                to:"/Autoclave"
            }
        ]
    }
    ,{
        label:"Bulk Blood Transfer",
        to:"/Bulk-blood-transfer",
        img:bulk
    }
    ,{
        label:"Blood Requisition",
        to:"/Blood-Requisition",
        img:requestion
    },
    {
        label:"Camp Management",
        to:"/Camp-Management",
        img:Bloodcamp,
        children:[
            {
                label:"Add Camp",
                to:"/Add-Camp"
            },
            {
                label:"Facility Inspection",
                to:"/Facility-Inspection"
            },
            {
                label:"Staff",
                to:"/Staff"
            }
            ,{
                label:"Add Item",
                to:"/Add-Item"
            }
            ,{
                label:"Post Camp Report",
                to:"/Post-Camp-Report"
            }
        ]
    },
    {
        label:"Manage Account",
        to:"/Manage/Account",
        img:settings
    },
    {
        label:"Certification",
        to:"/Certification",
        img:certificate
    }
    ,{
        label:"Reports",
        to:"/Report",
        img:reports
    }
    ,{
        label:"QR Code Generation",
        to:"/QR-Code-Generation",
        img:barcode
    }
    ,{
        label:" Manage Users",
        to:"/Manage-Users",
        img:userManagement
    }
    ,{
        label:"Role Management",
        to:"/Role-Management",
        img:roleManage
    }
    ,{
        label:"Items Stock",
        to:"Items-Stock",
        img:itemstock
    }
 ]