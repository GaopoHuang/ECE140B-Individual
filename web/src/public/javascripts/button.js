//-------------------------------------------
// Display Image or Text with mouse click
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


//-------------------------------------------



function goToPage(tabId) {
  const tabMap = new Map();
  console.log("Printing purly for ", tabId)
  tabMap.set('tab1', "/");
  tabMap.set('tab2', '/KVP');
  tabMap.set('tab3', '/UIMockup');
  tabMap.set('tab4', '/IA');
  tabMap.set('tab5', '/ID');
  console.log("Clicked!!!");
  console.log("Going to ", tabMap.get(tabId))
  location.assign(tabMap.get(tabId))
  // for(const [key, value] of tabMap) {
  //   console.log("The key is");
  //   console.log(key);
  //   if(document.getElementById(key).clicked == true)
  //   {
  //     console.log("This key is detected");
  //     location.assign(value);
  //   }
  // }
}


// let btn1 = document.getElementById('tab1');
// btn1.onclick = function() {
// location.assign('/');
// }

// let btn2 = document.getElementById('tab2');
// btn2.onclick = function() {
// location.assign('/KVP');
// }


//-------------------------------------------
// Dynamic coloring on the main tab bar 
var rect = document.getElementById('title').getBoundingClientRect();
const soft_color = getComputedStyle(document.documentElement).getPropertyValue('--soft-color'); 
const accent_color_dark = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-dark'); 
const section1 = document.querySelector('.main-tab')
window.addEventListener('scroll', () => {
  const y = (window.scrollY || window.pageYOffset)
  // console.log(y)
  if(y<=rect.bottom) {
    section1.style.backgroundColor = accent_color_dark  
  }
  else {
    section1.style.backgroundColor = soft_color
  }
})



