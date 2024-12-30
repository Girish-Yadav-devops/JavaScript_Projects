function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1==="" && name2==="") {
        alert("Please Enter Your Name and Your Partner's Name.");
    }else if(name1===""){
        alert("Please Enter Your Name.");
    } else if(name2===""){
        alert("Please Enter Your Partner's Name.");
    } else{
        const lovePercentage=Math.floor(Math.random()*101);
        const result = document.getElementById("result");

        result.innerText = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}`;

        if(lovePercentage < 30){
            result.innerHTML += "<br> Not a Great Match. Keep Looking....!"
        } else if(lovePercentage >= 30 && lovePercentage < 70){
            result.innerHTML += "<br> There is Chance to be togther try it....!"
        }else {
            result.innerHTML += "<br> Great Match. Don't Leave Your Partner....!"
        }
    }
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
}