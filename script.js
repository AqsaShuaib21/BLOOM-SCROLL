document.querySelector('.toggle').addEventListener('click',function(){
  console.log('toggle clicked');
  document.querySelector('.navbar ul').classList.toggle('active');

});