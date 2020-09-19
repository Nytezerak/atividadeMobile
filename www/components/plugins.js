$(document).on("click","#alerta",function(){
  navigator.notification.alert("Hello, World! :D", null, "=u=", ":P");
});

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex==1){
      navigator.notification.alert("Selecionou A");
    }else{
      (navigator.notification.alert("Selecionou B"));
    }
  }
  navigator.notification.confirm("Selecione A ou B", confirma, "Escolha: ", ["A","B"]);
});

$(document).on("click","#beep",function(){
      navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
      navigator.vibrate(4000);
});