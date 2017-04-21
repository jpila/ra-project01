
function main() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1240:{
            items:4
        }
    }
})
var x = 0;
var buttons = document.getElementsByName('addToCart');
  for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',add1toCart)
  };

       function add1toCart(eventObject){
          console.log('apples');
          x+=1;
          document.getElementById("item-count").innerHTML = x;
        };
document.getElementById("submitButton").addEventListener("click", onSubmitForm);
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            function onSubmitForm(eventObject){
            var email =document.getElementById('emailAdress').value
              validateEmailAdress(email);
            }

            function validateEmailAdress(email){
              if(email.match(re)){
                alert('Thanks for Subscribing!');
                document.getElementById('emailForm').submit();
              } else {
                alert('Please enter a valid e-mail');
              }
            }
            //smooth scrolling from css-tricks

$('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top-100
            }, 1000);
            return false;
        }
    }
});

};
