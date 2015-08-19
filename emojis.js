var forEach = Array.prototype.forEach;
var $status;
var counter = 0;

function handleClick(event) {
    var more = false;
    if(event.shiftKey) {
        more = true;
    }

    if(counter > 0) {
        $status.innerHTML += '<img src="' + event.target.src + '" />'
    } else {
        $status.innerHTML = '<img src="' + event.target.src + '" />'
    }
    counter++;

    if(!more) {
        copyStatus();
    } else {
        showButtons();
    }
}

function copyStatus() {
    var range = document.createRange();
    range.selectNodeContents($status);  
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

    window.setTimeout(function(){
        window.close();
    }, 500);
}

function showButtons() {
    document.querySelector('div.buttons').classList.add('visible');
}
function hideButtons() {
    document.querySelector('div.buttons').classList.remove('visible');
}

function clear() {
    $status.innerHTML = 'Clik an icon to copy it.';
    counter = 0;
    hideButtons();
}

document.addEventListener('DOMContentLoaded', function(){
    $status = document.getElementById('status');
    var images = document.getElementsByTagName('img');
    forEach.call(images, function( image ){
      image.addEventListener('click', handleClick);
    });
    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('copy').addEventListener('click', copyStatus);
});
