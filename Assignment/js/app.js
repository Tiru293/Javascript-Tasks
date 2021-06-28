//var div1=document.getElementById("div1");
//const select=document.getElementById('colors');

//On user interaction calling a function;
console.log("this is div1 value : "+div1);



function onClick(){

    // if(document.getElementById('div1')){
    //     document.getElementById("disp1").innerHTML=document.getElementById("red").value + " Color";

    // }
    // else if(document.getElementById('div1')){
    //     document.getElementById("disp2").innerHTML=document.getElementById("green").value + " Color";

    // 


    if (document.getElementById('red').checked){
       document.getElementById("disp1").innerHTML=document.getElementById("red").value + " Color";
    } 
    else if (document.getElementById('green').checked){
        document.getElementById("disp2").innerHTML=document.getElementById("green").value + " Color";
     }

     else if (document.getElementById('blue').checked){
        document.getElementById("disp3").innerHTML=document.getElementById("blue").value + " Color";
     }

   
}

console.log(document.getElementById('Arial').checked);  // false

function onClick1(){

    console.log(document.getElementById('Arial').checked);  // true



    if (document.getElementById('Arial').checked){
       document.getElementById("disp4").innerHTML=document.getElementById("Arial").value + " Font";
    } 
    else if (document.getElementById('cursive').checked){
        document.getElementById("disp5").innerHTML=document.getElementById("cursive").value + " Font";
     }

     else if (document.getElementById('times').checked){
        document.getElementById("disp6").innerHTML=document.getElementById("times").value + " Font";
     }

   
}
