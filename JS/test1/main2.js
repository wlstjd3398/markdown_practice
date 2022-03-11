let isShow = true;
let checked = false;

if(isShow){
  console.log('Show!'); // Show!
}

if(checked){
  console.log('Checked!') // Checked!  false로 안나옴
}

if(isShow){
  console.log('Show!');
}else{
  console.log('Hide?');
}
