// Contact form validation
function validateForm(){
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let message=document.getElementById('message').value;


if(name===''||email===''||message===''){
alert('Please fill all fields');
return false;
}
alert('Message sent successfully!');
return true;
}


// Dark / Light Mode Toggle
const toggle=document.getElementById('modeToggle');


toggle.addEventListener('click',()=>{
document.body.classList.toggle('light');
toggle.textContent=document.body.classList.contains('light')?'🌞':'🌙';
});