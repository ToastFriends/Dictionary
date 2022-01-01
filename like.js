window.onload = function (){
console.log(document.getElementById("likecoin"))
document.getElementById("likecoin").innerHTML='<iframe frameborder="0" height="200px" src="https://button.like.co/in/embed/toastfriends/button?referrer='+window.location.href+'&type=omit">';
}