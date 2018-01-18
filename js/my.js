var news = "";
var status = "less";

$.get('news-archive.html', function(data) {
  newsText = data;
});


function toggleText()
{
 //      var text= decodeURIComponent("<?php echo file_get_contents('news-archive.html') ?>"); 
 //   var text="Here is some text that I want added to the HTML file";
     var text = newsText;

    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}


