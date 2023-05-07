function display(i){
    var no=(Number)(i)+1;
    var ele=document.getElementById(no);
    if(ele.className=="hidden"){
        ele.className="visible";
    }
    else{
        ele.className="hidden";
    }
}