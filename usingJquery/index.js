// Basic Syntax for jquery
// $("selector").action();
// ^^^^^^^ IMPORTANT ^^^^^^^^^^

$(document).ready(function(){
    // $("#heading").html("waddup");
    // $("p").click(function (){
    //     $("p").html("i was clicked");
    // });

    // $("p").mouseenter(function(){
    //     $(this).css("background-color","red");
    // });
    // $("p").mouseleave(function(){
    //     $(this).css("background-color","white");
    // });


    $("p").on({
        click:function(){
            alert("clicked");
        },
        mouseenter: function(){
            $(this).css("background-color","green");
        },
        mouseleave: function(){
            $(this).css("background-color","white");
        }
    })
    $("button.hide").click(function(){
        // alert("hey");
        $("p").slideUp(1000);
    });


    $("button.show").click(function(){
        // alert("hi");
        $("p").slideDown(1000);
    })



    $("button.toggle").click(function(){
        $("p").slideToggle(1000,function(){
            $("#heading").html("Shaka");
        });

    })
});




