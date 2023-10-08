const turnOn = document.getElementById('turnOn');
const turnOff= document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){           // ! significa não (Se a lampada não estiver quebrada)
    if( !isLampBroken ()){
    lamp.src ='img/ligada.jpg', width="300px" ; //aparece a lâmpada ligada
}
}

function lampOff(){          //esta quebrada troca a imagem
    if( !isLampBroken ()){
    lamp.src = 'img/desligada.jpg',width="300px" ; //aparece A lâmpada desligada
    
}
 }

function lampBroken (){
    lamp.src ='img/quebrada.jpg', width="300px";
}//aparece a lâmpada quebrada


turnOn.addEventListener('click',lampOn);//evento de clique(liga)
turnOff.addEventListener('click',lampOff);//evento de clique (desliga)
lamp.addEventListener('mouseover',lampOn);//Ao coloxar po cursor do mouse(lâmpada liga)
lamp.addEventListener('mouseleave',lampOff);//Ao retirar o cursor do mouse (lâmpada apaga)
lamp.addEventListener('dblclick',lampBroken);//dois clicks (lâmpada quebra)

