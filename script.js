/* EVENTS LIST */

const festEvents = [

{
    name:"Code Clash",
    date:"12 June",
    time:"10:00 AM"
},

{
    name:"Web Design",
    date:"12 June",
    time:"1:00 PM"
},

{
    name:"AI Quiz",
    date:"13 June",
    time:"11:00 AM"
},

{
    name:"Robo Race",
    date:"14 June",
    time:"2:00 PM"
}

];

/* SHOW EVENTS */

let box =
document.getElementById("eventContainer");

if(box){

    festEvents.forEach(item => {

        box.innerHTML += `

        <div class="event-card">

            <h3>${item.name}</h3>

            <p>Date : ${item.date}</p>

            <p>Time : ${item.time}</p>

            <button
            onclick="joinEvent('${item.name}')">

            Register

            </button>

        </div>

        `;

    });

}

/* SIDEBAR */

function toggleSidebar(){

    let side =
    document.getElementById("sidebar");

    side.classList.toggle("active");

}

/* REGISTER FORM */

let regForm =
document.getElementById("registerForm");

if(regForm){

regForm.addEventListener("submit",
function(e){

    e.preventDefault();

    let name =
    document.getElementById("regName")
    .value.trim();

    let email =
    document.getElementById("regEmail")
    .value.trim();

    let phone =
    document.getElementById("regMobile")
    .value.trim();

    let pass =
    document.getElementById("regPassword")
    .value.trim();

    let msg =
    document.getElementById("registerMessage");

    /* CHECKS */

    if(name === ""){

        msg.innerHTML =
        "Enter Name";

        msg.className =
        "error";

        return;
    }

    if(!email.includes("@")){

        msg.innerHTML =
        "Enter Valid Email";

        msg.className =
        "error";

        return;
    }

    if(!/^[0-9]{10}$/.test(phone)){

        msg.innerHTML =
        "Enter 10 Digit Mobile Number";

        msg.className =
        "error";

        return;
    }

    if(pass.length < 6){

        msg.innerHTML =
        "Password Must Be 6 Letters";

        msg.className =
        "error";

        return;
    }

    /* SAVE USER */

    let student = {

        name:name,
        email:email,
        phone:phone,
        pass:pass

    };

    localStorage.setItem(
    "studentData",
    JSON.stringify(student)
    );

    localStorage.setItem(
    "login",
    "yes"
    );

    msg.innerHTML =
    "Registration Successful";

    msg.className =
    "success";

    showUser();

});
}

/* LOGIN */

let loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",
function(e){

    e.preventDefault();

    let email =
    document.getElementById("loginEmail")
    .value;

    let pass =
    document.getElementById("loginPassword")
    .value;

    let oldUser =
    JSON.parse(
    localStorage.getItem("studentData")
    );

    let msg =
    document.getElementById("loginMessage");

    if(

        oldUser &&
        oldUser.email === email &&
        oldUser.pass === pass

    ){

        localStorage.setItem(
        "login",
        "yes"
        );

        msg.innerHTML =
        "Login Successful";

        msg.className =
        "success";

        showUser();

    }

    else{

        msg.innerHTML =
        "Wrong Email Or Password";

        msg.className =
        "error";

    }

});
}

/* SHOW USER */

function showUser(){

    let check =
    localStorage.getItem("login");

    let user =
    JSON.parse(
    localStorage.getItem("studentData")
    );

    if(check === "yes" && user){

        let guest =
        document.getElementById("guestMenu");

        let userBox =
        document.getElementById("userMenu");

        let text =
        document.getElementById("welcomeText");

        if(guest){
            guest.style.display = "none";
        }

        if(userBox){
            userBox.style.display = "inline-block";
        }

        if(text){
            text.innerHTML =
            "Welcome, " + user.name;
        }

    }

}

showUser();

/* REGISTER EVENT */

function joinEvent(eventName){

    let check =
    localStorage.getItem("login");

    if(check !== "yes"){

        alert("Please Login First");

        return;
    }

    let myEvents =
    JSON.parse(
    localStorage.getItem("myEvents")
    ) || [];

    if(myEvents.includes(eventName)){

        alert("Already Registered");

        return;
    }

    myEvents.push(eventName);

    localStorage.setItem(
    "myEvents",
    JSON.stringify(myEvents)
    );

    alert("Event Registered");

}

/* PROFILE */

function openProfile(){

    let user =
    JSON.parse(
    localStorage.getItem("studentData")
    );

    document.getElementById("modal")
    .style.display = "flex";

    document.getElementById("modalContent")
    .innerHTML = `

    <h2 class="title">
    Your Profile
    </h2>

    <form onsubmit="saveProfile(event)">

        <input type="text"
        id="newName"
        value="${user.name}">

        <input type="email"
        id="newEmail"
        value="${user.email}">

        <input type="text"
        id="newPhone"
        value="${user.phone}">

        <button type="submit">
        Save
        </button>

    </form>

    `;

}

/* SAVE PROFILE */

function saveProfile(e){

    e.preventDefault();

    let old =
    JSON.parse(
    localStorage.getItem("studentData")
    );

    let newUser = {

        name:
        document.getElementById("newName")
        .value,

        email:
        document.getElementById("newEmail")
        .value,

        phone:
        document.getElementById("newPhone")
        .value,

        pass:old.pass

    };

    localStorage.setItem(
    "studentData",
    JSON.stringify(newUser)
    );

    alert("Profile Updated");

    showUser();

}

/* MY EVENTS */

function openRegisteredEvents(){

    let myEvents =
    JSON.parse(
    localStorage.getItem("myEvents")
    ) || [];

    let text = `

    <h2 class="title">
    Registered Events
    </h2>

    `;

    if(myEvents.length === 0){

        text += `

        <p style="text-align:center;">
        No Events Joined
        </p>

        `;

    }

    myEvents.forEach(item => {

        text += `

        <div class="event-card">

            <h3>${item}</h3>

            <button
            onclick="leaveEvent('${item}')">

            Exit Event

            </button>

        </div>

        `;

    });

    document.getElementById("modal")
    .style.display = "flex";

    document.getElementById("modalContent")
    .innerHTML = text;

}

/* EXIT EVENT */

function leaveEvent(name){

    let why =
    prompt("Why Are You Leaving?");

    if(why === "" || why === null){
        return;
    }

    let myEvents =
    JSON.parse(
    localStorage.getItem("myEvents")
    );

    myEvents =
    myEvents.filter(item => item !== name);

    localStorage.setItem(
    "myEvents",
    JSON.stringify(myEvents)
    );

    alert("Event Removed");

    openRegisteredEvents();

}

/* FEEDBACK */

let feedForm =
document.getElementById("feedbackForm");

if(feedForm){

feedForm.addEventListener("submit",
function(e){

    e.preventDefault();

    let words =
    document.getElementById("feedbackText")
    .value.trim();

    let msg =
    document.getElementById("feedbackMessage");

    if(words.length < 20){

        msg.innerHTML =
        "Write Minimum 20 Letters";

        msg.className =
        "error";

        return;
    }

    msg.innerHTML =
    "Feedback Sent";

    msg.className =
    "success";

    feedForm.reset();

});
}

/* LOGOUT */

function logoutUser(){

    localStorage.removeItem("login");

    alert("Logged Out");

    location.href = "index.html";

}

/* CLOSE MODAL */

window.onclick = function(e){

    let pop =
    document.getElementById("modal");

    if(pop && e.target === pop){

        pop.style.display =
        "none";

    }

}