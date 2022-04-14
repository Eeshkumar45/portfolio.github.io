function openNav() {
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("main").style.width = "80%";
    document.getElementById("toggleOut").style="width:0px;";

}



function closeNav() {
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("main").style.width = "100%";
    document.getElementById("toggleOut").style="width:30px;color:black;";
}
var opened = true;
function toggle(){
    if(opened){
        closeNav();
    }else{
        openNav();
    }
    opened = !opened;
}