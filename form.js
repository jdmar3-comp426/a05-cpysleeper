
   
window.addEventListener("load", function () {

    function sendData() {
        const requ = new XMLHttpRequest();
              info = new URLSearchParams(new FormData( form ));
        
        // Define what happens on successful data submission
        requ.addEventListener( 'load', function( event ) {
            alert( 'OK!' );
        } );

        // Define what happens in case of error
        requ.addEventListener(' error', function( event ) {
            alert( 'GG' );
        } );

        requ.open("POST", "http://localhost:5000/app/new/user");
        requ.send(info);
    }
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
});