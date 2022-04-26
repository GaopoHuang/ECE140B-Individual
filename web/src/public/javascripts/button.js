function ShowTextOrImage(btnId)  {
// 0 - Text; 1 - Visual
btnId0 = btnId + '0'
btnId1 = btnId + '1'
btnId0content = btnId0 + 'content'
btnId1content = btnId1 + 'content'
console.log("clicked", btnId0content, "state", document.getElementById(btnId0).style.display)
if (document.getElementById(btnId0).style.display=='inline-block') {
        document.getElementById(btnId0).style.display = "none";
        document.getElementById(btnId1).style.display = "inline-block";
        document.getElementById(btnId0content).style.display = "none";
        document.getElementById(btnId1content).style.display = "block";
        }
else {
    document.getElementById(btnId1).style.display = "none";
    document.getElementById(btnId0).style.display = "inline-block";
    document.getElementById(btnId1content).style.display = "none";
    document.getElementById(btnId0content).style.display = "block";
}
}

let btn1 = document.getElementById('tab1');
btn1.onclick = function() {
location.assign('/');
}

let btn2 = document.getElementById('tab2');
btn2.onclick = function() {
location.assign('/KVP');
}

var rect = document.getElementById('title').getBoundingClientRect();

const soft_color = getComputedStyle(document.documentElement).getPropertyValue('--soft-color'); 
const accent_color_dark = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-dark'); 
const section1 = document.querySelector('.main-tab')

window.addEventListener('scroll', () => {
  const y = (window.scrollY || window.pageYOffset)
  console.log(y)
  if(y<=rect.bottom) {
    section1.style.backgroundColor = accent_color_dark  
  }
  else {
    section1.style.backgroundColor = soft_color
  }
})