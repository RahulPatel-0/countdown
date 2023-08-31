const endDate=" 27 September 2024 06:00 "


document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
  if(diff<0) return;
     //convert into days;
     
   inputs[0].value= Math.floor(diff/3600/24);
   //convert into Hrs;
   inputs[1].value=Math.floor(diff/3600)%24;
   //convert into Minutes;
   inputs[2].value=Math.floor(diff/60)%60;
   //convert into Seconds;
   inputs[3].value=Math.floor(diff%60);
}
//initial call
clock();
/**
 * 1 day=24hrs
 * 1hr =60min
 * 60 min=3600 sec
 */
 setInterval(
    ()=>{
        clock()
    },1000
 )

