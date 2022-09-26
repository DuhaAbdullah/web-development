// $(document).ready(function () {
//     $("h1").addClass(".big-title");
// });

// document.querySelector("h1");
// $("h1").addClass(".margin");

// document.querySelectorAll("button");
$("button").text("dont click me");
// $(".header h1");


// $("h1").text("bye");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
 $("h1").css("color", "blue");
})

let buttonsNo = document.querySelectorAll("button");

for(let i =0 ; i < buttonsNo.length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";

    })
}
    
$("button").click(function(){
    $("h1").css("color", "purple");
})

$("body").keypress(function(event){
    $("h1").text(event.key);
})
