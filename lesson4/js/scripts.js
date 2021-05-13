function toglleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("iconx").classList.toggle("rotate");
    if (document.querySelector('button').textContent == "|||"){
        document.querySelector('button').textContent = "X";
    }
    else{
        document.querySelector('button').innerText = "|||";
    }
    
}