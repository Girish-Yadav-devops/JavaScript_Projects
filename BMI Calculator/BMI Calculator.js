document.getElementById("bimform").addEventListener('submit', function(e){
    console.log("Meg");
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    console.log("gender");
});