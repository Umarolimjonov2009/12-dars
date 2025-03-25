

const soatH1=document.getElementById("SoatH1");
const minutH1=document.getElementById("MinutH1");
const sekundH1=document.getElementById("SekundH1");

const vaqt=new Date();
let soat=vaqt.getHours();
let minut=vaqt.getMinutes();
let sekund=vaqt.getSeconds();

function watch(){
    if(sekund==60){
        minut++;
        sekund=0;
    }
    if(minut==60){
        soat++;
        minut=0;
    }
    if(soat==24){
        soat=0;
    }
    soatH1.textContent=soat;
    minutH1.textContent=minut;
    sekundH1.textContent=sekund;
    sekund++;
}
setInterval(watch,1000)