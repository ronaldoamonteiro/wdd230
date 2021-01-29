function toglleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
    if (document.querySelector('button').textContent != "X"){
        document.querySelector('button').textContent = "X";
    }
    else{
        document.querySelector('button').textContent = '|||';
    }
    
}