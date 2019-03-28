
$(document).ready(function(){
    $('#submit').on('click', function() {
        $('#button').toggle(1200, function() {
            //alert('Click on Calculate! Know how much is fair price');
        });
    });
    $('#button').toggle();
});

/* numbers and - */
function phoneNumberEntered(phoneInput){
    phoneInput.value=phoneInput.value.replace(/[^1-9\-\(\)+]/g,"");
}

function submit(){
    alert ("Thanks for your submission");
}

