//@ts-nocheck


//The function creates tabs

function openTab(evt, tabName) {
    //Declare all varibales;
    var i, tabcontent, tabLinks;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tabcontent = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tabLinks = document.getElementsByClassName("tabLink");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "grid";
        evt.currentTarget.className += "active";
        
}


//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("defaultOpen").click();


/* SCRIPT FROM SCHOOL SYSTEM ===============================================*/

// open buttons
let main = document.getElementById("app");

let regbox = document.getElementById("studentRegbox");
let gradebox = document.getElementById("studentGradebox");
let dataT = document.getElementById("dataTable");
let openRegistry = () => {
    gradebox.style.display = "none";
    regbox.style.display = "block";
    document.querySelector(".regtitle").innerHTML = "Register";
    document.querySelector(".rgshow").innerHTML = "";
    document.querySelector(".performance").innerHTML = "Register Student";
} 

let closeRegistry = () => {
    main.style.display = "grid";
    regNotif.innerHTML = "";

        //open confirm box
        document.querySelector("html").style.opacity = "1";
        let regTab = document.querySelector(".p-central-box");
        //regTab.style. = "90%";
        let rconfirm = document.querySelector(".regConfirm");
        rconfirm.style.display = "block";
        rconfirm.style.position = "absolute";
        rconfirm.style.top = "20%";
        rconfirm.style.left = "35%";
        rconfirm.style.zIndex = "10";
}


let openMarksbox = () => {
    regbox.style.display = "none";
    gradebox.style.display = "block";
    document.querySelector(".regtitle").innerHTML = "Grade";
let rgtxt = document.querySelector(".rgshow");
    rgtxt.style.display = "none";
    document.querySelector(".performance").innerHTML = "Grade Student";
}

let closeGradebox = () => {


    gradebox.style.display = "block"; //do not close
}


//purpose to hide the records box, if no record has been added;

let openStudentRecords = () => {
    dataT.style.display = "block";
}

let closeDatabox = () => {
    dataT.style.display = "block"; //do not close
}


//Register student and add to records

//get inputs from register

let regNotif = document.getElementById("regNotif"); //reg output

let stdname = document.getElementById("studentNameinput");

let stdReg = document.getElementById("studentRegNo");

let stdstream = document.getElementById("studentStream");

let emarks = document.getElementById("entryMarks");

let hlthstatus = document.getElementById("healthStatus");

let stdgender = document.getElementById("studentGender");

let stdage = document.getElementById("studentAge");


//For image
let profile = document.querySelector("img.stdImg");


//when save button is clicked; all input should be cleared of their contents
//a notification displayed if successful
//values added to records

let stdoneNum = document.getElementById("stdoneNum");

let stdoneName = document.getElementById("stdoneName");

let stdoneReg = document.getElementById("stdoneReg");

let stdoneStream = document.getElementById("stdoneStream");

let stdoneeMarks = document.getElementById("stdoneeMarks");

let stdonecMarks = document.getElementById("stdonecMarks");

let stdonehstatus = document.getElementById("stdonehstatus");

let stdonegender = document.getElementById("stdonegender");

let stdoneage = document.getElementById("stdoneage");



let saveRegStd = () => {
    
    //when save button is clicked - create a new row and store the contents
//onclick - a virtual table is created

//to create many records - create a new row and tab cells for each new save;
let tbody = document.getElementById("tbody");
let trow = document.createElement("tr");
tbody.appendChild(trow);

//create 10 tcells
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");

trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
trow.appendChild(td8);
trow.appendChild(td9);

    
    
    
    //store the values of registry to records
    //td1.innerHTML = "1."; - how can i auto generate number for each record???;
    td2.innerHTML = stdname.value;
    td3.innerHTML = stdReg.value;
    td4.innerHTML = stdstream.value;
    td5.innerHTML = emarks.value;
    //current marks will be added from the grading box
    td6.innerHTML = "Pending";
    td7.innerHTML = hlthstatus.value;
    td8.innerHTML = stdgender.value;
    td9.innerHTML = stdage.value;
    regNotif.innerHTML = "Student Successfully Saved!";
    regNotif.style.color = "black";

    //virtual rows created successfully;
    //A new problem arises; - the data stored is deleted when the page is refreshed;
    //so how  can the data be permanent???;

}


let delRegStd = () => {
    stdname.value = "";
    stdReg.value = "";
    stdstream.value = "";
    emarks.value = "";
    hlthstatus.value = "";
    stdgender.value = "";
    stdage.value = "";
    regNotif.innerHTML = "Student Successfully deleted";

    //delete from records
    stdoneNum.innerHTML = "";
    stdoneName.innerHTML = stdname.value;
    stdoneReg.innerHTML = stdReg.value;
    stdoneStream.innerHTML = stdstream.value;
    stdoneeMarks.innerHTML = emarks.value;
    //current marks will be added from the grading box
    stdonecMarks.innerHTML = "";
    stdonehstatus.innerHTML = hlthstatus.value;
    stdonegender.innerHTML = stdgender.value;
    stdoneage.innerHTML = stdage.value;
}


//change avatar

let avatars = ["./images/blog1.jpg", "./images/blog2.jpg", "./images/blog3.jpg", "./images/blog4.jpg", "./images/blog5.jpg"];
function changeProfile() {
    for(let i = 0; i < avatars.length;i++) {
        let myp = document.querySelector(".stdImg");
        myp.setAttribute("src", avatars[i]); //shows 1st and last image;
    }
}


//Confirm box script
//this element has been called before but as a local variable
//recreate it as a global variable
let rconfirm = document.querySelector(".regConfirm");

//when close button is clicked;
let closeconfirmRecords = () => {
    rconfirm.style.display = "none";        
}

//when "No" option is selected;
let confirmRNo = () => {
    rconfirm.style.display = "none";
}

//when "Yes" option is selected

let confirmyes = document.querySelector(".confirmYes");
let rgtxt = document.querySelector(".rgshow");
let confirmRYes = () => {
    regbox.style.display = "none";
    gradebox.style.display = "none";
    rconfirm.style.display = "none";
    rgtxt.style.display = "block";

    document.getElementById("defaultOpen").click();


}


