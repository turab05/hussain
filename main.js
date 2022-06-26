
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
       if(window.scrollY >50){
        nav.classList.add('ras');

       }
     
else{
    nav.classList.remove('ras')

}  
    })
    
function project(){
    window.scroll({ 
        top: 580, 
        behavior: 'smooth' 
 });
}

function home(){
    window.scroll({ 
        top: 0, 

        // behavior: 'smooth' 
 });
}

function contact(){
    window.scroll({ 
        top: 1130, 

        // behavior: 'smooth' 
 });
 document.getElementById("contact").style.backgroundColor="#00b4db;"
}




