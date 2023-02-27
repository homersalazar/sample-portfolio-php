const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const typed = new Typed(".auto-type",{
    strings: ["Coding" , "Sleeping", "Eating"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// $(function() {
    $('#contact_me').on("submit", function(event){ 
        $.ajax({  
            url:"../views/contact_me.php",  
            method:"POST",  
            data:$('#contact_me').serialize(),  
            success:function(data){  
                return false;
            }  
        });                  
    });
// })