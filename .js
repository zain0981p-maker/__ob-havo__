const obhavoData={
    Samarqand:{temp:20,cond:"Quyoshli"},
    Jizzax:{temp:35,cond:"Quyoshli"},
    Toshkent:{temp:28,cond:"bulitli"},
    Andijon:{temp:30,cond:"Quyoshli"},
     Namangan:{temp:15,cond:"Tumanlid"},
};
const city=document.getElementById("city");
const btn=document.getElementById("btn");
const rezult=document.getElementById("rezult");

function showWeather(){
    const name=city.value.trim()

    if (!name){
        rezult.textContent="Iltimos shahar kiriting"
        return;
    }
    let data=obhavoData[name];
    if(data){
      return  rezult.textContent=city.value+"Harorat"+data.temp+"gradus"+data.cond;
    };

    

}


btn.addEventListener("click",showWeather);