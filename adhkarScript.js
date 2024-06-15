function search_section(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('sections');
  
  for (i = 0; i < x.length; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
    x[i].style.display = 'none';
    }
    else{
    x[i].style.display = 'list-item';
    }
}};


function clearField(){
  document.getElementById('searchbar').value = '';
}


const searchbar = document.getElementById('searchbar');
const clearButton = document.getElementById('clearButton');

function updateButtonVisibility() {
  if (searchbar.value === ''){
    clearButton.style.opacity = 0;
    clearButton.style.marginBottom = '0px';
    searchbar.style.marginBottom = '0px';
  }
  else{
    clearButton.style.opacity = 1;
    clearButton.style.marginBottom = '50px';
    searchbar.style.marginBottom = '10px';
  }
}

updateButtonVisibility();

searchbar.addEventListener('input', updateButtonVisibility);

clearButton.addEventListener('click', function(){
  location.reload();
});



document.addEventListener('click', function(event){
  const isClickInside = searchbar.contains(event.target); 
  if (!isClickInside) {
      searchbar.placeholder = 'ماذا تفضل أن تقرأ ؟';
  } else {
      searchbar.placeholder = 'إبحث...';
  }
});



var myButton = document.getElementById('toTop');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.opacity = '1';
  } else {
    myButton.style.opacity = '0';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}