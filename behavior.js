



document.addEventListener("DOMContentLoaded", function(event) {
   
    var PAGE_URL = 'http://92.243.24.91/'
    var PAGE_IDENTIFIER = 'Holberton';

    var thumbnailElement = document.getElementById("smart_thumbnail");
    console.log(thumbnailElement)
    if (thumbnailElement.className == "small") {
            thumbnailElement.addEventListener("click", function() {
                thumbnailElement.classList.toggle("small");
            });
    }


    //disscuss
    var disqus_config = function () {
        this.page.url = PAGE_URL;  
        this.page.identifier = PAGE_IDENTIFIER; 
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, 
        s = d.createElement('script');
        s.src = 'https://http-92-243-24-91.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();



  
});




