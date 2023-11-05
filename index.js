document.querySelector('.fa-times').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.fa-bars').style.display = 'inline';    
        document.querySelector('.fa-times').style.display = 'none';
    }else{
        document.querySelector('.fa-bars').style.display = 'none'; 
        setTimeout(()=>{
            document.querySelector('.fa-times').style.display = 'inline';
        },500);   
    }
}) 