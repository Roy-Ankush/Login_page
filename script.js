// ******************this is for signup and i am using java script here**************** 

    document.querySelector("#sig").addEventListener("click",show_signup);
function show_signup() {
    document.querySelector(".left .login").style.display="none";
    document.querySelector(".left #btn0").style.display="block";
    document.querySelector(".left #btn1").style.display="block";
    document.querySelector(".right #btn20").style.display="none";
    document.querySelector(".right #sig").style.display="none";
    document.querySelector(".right .signup").style.display="block";

}
// ******************this is for login nad i am using jquery here****************
$("#btn1").on("click",show_login); //instead of show_login we will also write some annonimus function also
    function show_login(){
    $(".signup").hide();
    $(".btn2r").show();
    $(".btn2l").hide();
    $(".login").show();
}

// this ja is for mobile view
$(".small1").on("click",()=>{
    $(".login").show();
    $(".signup").hide()
})
$(".small2").on("click",()=>{
    $(".login").hide();
    $(".signup").show();
})

$("#hel").on("click",()=>{
    // $(".login").hide();
    $(".left").hide();
    $(".right").show();
})
