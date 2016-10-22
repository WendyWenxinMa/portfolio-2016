$(function(){

    $('#typed').typed({
        strings: ['I love animal and coffee','more than that...','I love to code & design'],
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); }
    });

    function foo(){ console.log('Callback'); }

});