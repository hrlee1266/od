function testHandler(self){
if(self.value === 'test') {
  document.querySelector('body').style.backgroundColor = 'black' ;
  self.value = 'original' ;
} else {
  document.querySelector('body').style.backgroundColor = 'white' ;
  self.value = 'test' ;
} ;
}
