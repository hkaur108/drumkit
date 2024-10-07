
$(document).ready(function(){
    var images=[
        'url(./images/crash.png)',
        'url(./images/kick.png)',
        'url(./images/snare.png)',
        'url(./images/tom1.png)',
        'url(./images/tom2.png)',
        'url(./images/tom3.png)',
        'url(./images/tom4.png)',
    ];

    var sounds=[
        './sounds/crash.mp3',
        './sounds/kick-bass.mp3',
        './sounds/snare.mp3',
        './sounds/tom-1.mp3',
        './sounds/tom-2.mp3',
        './sounds/tom-3.mp3',
        './sounds/tom-4.mp3',
    ]

    var letters=[
        "w","s","i","k","l","q","a"
    ]

    $.each(letters, function(index,value){
        $('#addPictures')
        .append(`<div id=${index}  class="col  btn-lg btn btn-light mx-3 text-info fs-1 fw-bold py-2 my-4 ${value}">${value}</div>`)
       
        
    })


    $('.btn').each(function(index){
    var audio= new Audio(sounds[index])
    $(this).click(function(){
        $(this).fadeIn(100).fadeOut(100).fadeIn(100);
        audio.play($(this))

       
        
    })
   
 
    
    $(this).css({'background':images[index],"background-position":"top","background-size":"cover", "background-repeat":"no-repeat"})
    })
    
$('.Instructions').css('cursor','pointer');
$('.Instructions').click(function(){
    $('#desc').slideToggle()

})

})

$(document).on('keypress', function(e){
    
    let key;
        switch (e.key){
            case "w":
                var x= new Audio('./sounds/crash.mp3')
                x.play();
                break;
            case "s":
                var y= new Audio('./sounds/kick-bass.mp3')
                y.play();
                break;
            case "i":
                var a= new Audio('./sounds/snare.mp3')
                a.play();

                break;
            case "k":
                var z= new Audio('./sounds/tom-1.mp3')
                z.play();

                break;
            case "l":
                var r= new Audio('./sounds/tom-2.mp3')
                r.play();

                break;
            case "q":
                var m= new Audio('./sounds/tom-3.mp3')
                m.play();

                break;
            case "a":
                var n= new Audio('./sounds/tom-4.mp3')
                n.play();

                break;
            default:
                console.log('wrong key pressed!')   
                break         
        }

})








    













