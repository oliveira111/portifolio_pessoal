function logar() {
  var login = document.getElementByid('login').value
  var senha=document.getElementById('senha').value;
  if(login=='admin' && senha=='admin'){
    alert('sucesso');
    location.href='index.html';
  }else{
    alert('usuario ou senha invalidos')
  };
};