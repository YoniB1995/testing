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

function showTable(){
    if (cards.style.display === 'none'){
        cards.style.display = 'flex';
        usersTable.style.display = 'none';
    }
    else{
        cards.style.display = 'none';
        usersTable.style.display = 'block';
    }
    
}

function showForm(){
     cards.style.display = 'none';
     newForm.innerHTML = `<form>
                    <label for="text">Full Name:<input type="text" name="fullName" id="nameInput" required></label>
                    <br>
                    <label for="email">Email:<input type="email"  id="emailInputOne" required></label>
                    <br>
                    <label for="email">Email:<input type="email"  id="emailInputTwo" required></label>
                    <br>
                    <label for="age">Age: <input type="number"  id="ageInput" required></label>
                    <br>
                    <label for="telephone">Phone: <input type="tel"  id="phoneInput" required></label><br> <button onclick="submitNewUser()">Submit</button>
                </form>`;
}

function submitNewUser(){
    emailInputOne.value === emailInputTwo.value ?  alert('Account Added!') : alert("Not same password, try again");
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
    for (a=0;a<usersArray.length;a++){
        if (num == a){
            cards.style.display = 'none';
            newCardPage.innerHTML = `<div class='cardNewPage'>
            <div class='cardLeft'><h3>User Details</h3>
            <h5>Full Name: ${usersArray[a].name}<h5>
            <h5>Email: ${usersArray[a]['email']}<h5>
            <h5>Age: ${usersArray[a]['age']}</h5>
            <h5>Phone: ${usersArray[a]['phone']}<h5>
            </div>
            <div class='cardRight'><img src=${usersArray[a].picture} alt="user_picture"></div><button onclick='back()'>Return</button>
            </div>`;
            break;
        }
    }
}