//.ready ensures the document has loaded before jquery functions begin
$(document).ready(function(){
//all the jquery we are writing goes here 
    console.log('the document is loaded and ready!')
    //grab btn1
    $('#btn1').click(function(){
        $('p').fadeOut(2000)//once the button is grabbed, find the p tag, and attach a fadeOut function of 2 seconds
    });
    $('#btn2').click(function(){
        $('p').fadeIn(2000)//once the button is grabbed, find the p tag, and attach a fadeOut function of 2 seconds
    });
    
    //build two more buttons
    //build two functions that use the buttons to slide an html element up and down
    $("#btn3").click(function(){
        $("h1").slideUp()    
    });
    $("#btn4").click(function(){
        $("h1").slideDown()    
    });
    
    $('#para1').click(function(){
        $(this).hide()
    });
    
//    $('#animation').click(function(){
//        $('#blue').animate({left: '250px'})
//    })
    
    $("#animation").click(function(){
        $("#blue").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
        }, 1500);
    });
    
    
})