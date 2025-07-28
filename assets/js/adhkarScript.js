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
    myButton.style.cursor = 'pointer';
  } else {
    myButton.style.opacity = '0';
    myButton.style.cursor = 'default';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}