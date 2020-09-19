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

function mostraMapa(lat, long){
L.mapquest.key = 'VCe6CAaCcVwcn9iX1uVbe5iAP5ehIBMU';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
    var onSuccess = function(position) {
        mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});