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
 <h4>Picture:</h4><img src:"${usersDetails[a]['picture']}" alt="user_picture">`;

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