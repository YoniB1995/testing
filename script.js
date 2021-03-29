class User {
    constructor(id,picture,age,name,email,phone){
        this.id= id;
        this.picture= picture;
        this.age = age;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const usersArray = [];

function newTable(){
    if (cards.style.display === 'none'){
        cards.style.display = 'flex';
        usersTable.style.display = 'none';
    }
    else{
        cards.style.display = 'none';
        usersTable.style.display = 'block';
    }
    
}

fetch(`https://next.json-generator.com/api/json/get/NJ-UoW2Xq`)
.then((usersList)=> {
    return usersList.json();
})
.then((usersDetails)=> { // כרטיסיות משתמשים בדף הראשי
    for(a=0;a<cardDetails.length;a++){
usersArray[a]= new User(`${usersDetails[a]['id']}`,`${usersDetails[a]['picture']}`,`${usersDetails[a]['age']}`,`${usersDetails[a]['name'].first} ${usersDetails[a]['name'].last}`,`${usersDetails[a]['email']}`,`${usersDetails[a]['phone']}`)
cardDetails[a].innerHTML = `<h3>User Details</h3>
 <h5>Full Name: ${usersDetails[a]['name'].first} ${usersDetails[a]['name'].last}<h5>
 <h5>Email: ${usersDetails[a]['email']}<h5>
 <h5>Age: ${usersDetails[a]['age']}</h5>
 <h5>Phone: ${usersDetails[a]['phone']}<h5>
 <h4>Picture:</h4><img src="${usersDetails[a]['picture']}" alt="user_picture">`;

//  פונקציית משתמשים בתוך טבלה
tableAdd.innerHTML += `<tr>
 <td>${usersDetails[a]['name'].first} ${usersDetails[a]['name'].last}</td>
<td>${usersDetails[a]['age']}</td>
<td>${usersDetails[a]['email']}</td>
<td>${usersDetails[a]['phone']}</td>
</tr>`
}
})

function sendEmailUpdates(){
    emailInput.value = ''
    alert('Email Sent!');

}

function whatsAppNum(){
    alert('To Contact me add : 0538276526')
}

function back(){
    cards.style.display = 'flex';
    newCardPage.innerHTML = '';
}


function getCard(num){
    switch (num) {
        case 0:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[0].name}<h5>
            <h5>Email: ${usersArray[0]['email']}<h5>
            <h5>Age: ${usersArray[0]['age']}</h5>
            <h5>Phone: ${usersArray[0]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[0].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 1:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[1].name}<h5>
            <h5>Email: ${usersArray[1]['email']}<h5>
            <h5>Age: ${usersArray[1]['age']}</h5>
            <h5>Phone: ${usersArray[1]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[1].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 2:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[2].name}<h5>
            <h5>Email: ${usersArray[2]['email']}<h5>
            <h5>Age: ${usersArray[2]['age']}</h5>
            <h5>Phone: ${usersArray[2]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[2].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 3:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[3].name}<h5>
            <h5>Email: ${usersArray[3]['email']}<h5>
            <h5>Age: ${usersArray[3]['age']}</h5>
            <h5>Phone: ${usersArray[3]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[3].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 4:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[4].name}<h5>
            <h5>Email: ${usersArray[4]['email']}<h5>
            <h5>Age: ${usersArray[4]['age']}</h5>
            <h5>Phone: ${usersArray[4]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[4].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 5:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[5].name}<h5>
            <h5>Email: ${usersArray[5]['email']}<h5>
            <h5>Age: ${usersArray[5]['age']}</h5>
            <h5>Phone: ${usersArray[5]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[5].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 6:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[6].name}<h5>
            <h5>Email: ${usersArray[6]['email']}<h5>
            <h5>Age: ${usersArray[6]['age']}</h5>
            <h5>Phone: ${usersArray[6]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[6].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 7:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[7].name}<h5>
            <h5>Email: ${usersArray[7]['email']}<h5>
            <h5>Age: ${usersArray[7]['age']}</h5>
            <h5>Phone: ${usersArray[7]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[7].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 8:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[8].name}<h5>
            <h5>Email: ${usersArray[8]['email']}<h5>
            <h5>Age: ${usersArray[8]['age']}</h5>
            <h5>Phone: ${usersArray[8]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[8].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        case 9:
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[9].name}<h5>
            <h5>Email: ${usersArray[9]['email']}<h5>
            <h5>Age: ${usersArray[9]['age']}</h5>
            <h5>Phone: ${usersArray[9]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[9].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
    
        default:
            break;
    }
}

