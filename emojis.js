var forEach = Array.prototype.forEach;
var $status;

function handleClick(event) {
    var range = document.createRange();  
    range.selectNode(event.target);  
    window.getSelection().addRange(range);  

    try {  
        var successful = document.execCommand('copy');  
        var msg = successful ? 'successful' : 'unsuccessful';  
    } catch(err) {  
    } 

    if(window.removeRange) {
        window.getSelection().removeRange(range);
    } else {
        window.getSelection().removeAllRanges();
    }

    if (successful) {
        showNote();
    }
}

function showNote() {
    $status.innerHTML = 'Copied';
    window.setTimeout(function(){
        window.close();
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function(){
    $status = document.getElementById('status');
    var images = document.getElementsByTagName('img');
    forEach.call(images, function( image ){
      image.addEventListener('click', handleClick);
    })
})
