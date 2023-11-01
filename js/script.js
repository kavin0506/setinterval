
let name=document.getElementById("name");
let incr=0;
function ans(){
 incr++; 
 let val = document.createElement("p");
 name.appendChild(val);
 val.innerHTML="welcome";
}


let stop=setInterval(()=>{
	if(incr==5){
	clearInterval(stop);	
	}
	else{
		ans()
	}
},1000)
