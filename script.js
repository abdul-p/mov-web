// Image change
// (function () {
//   const image = document.getElementById("head");
//   let images = ['./img/mv-05.jpeg' , './img/mv-04.jpeg', './img/mv-03.jpeg'];
 
//    let i = 0 ;
//   function timer () { 
//     let im = images[i];
//     console.log(i)
//     image.style.backgroundImage = "url('"+im+"')";
//     console.log(images.length);
//     images.length -1 === i ?  i = 0 : i++ ;
    
//   }
//   console.log(i);
//   setInterval(timer,5000) ;
// })();



//latest and featured scroll


(function () {
    const latest = document.querySelector('.l-mv-ul');
    const featured = document.querySelector('.f-s-ul')
    const arrprev = document.querySelector('.prev');
    const arrnext = document.querySelector('.next');
    const fprev = document.querySelector('.f-prev');
    const fnext = document.querySelector('.f-next');
    
    function arrow (right , left , Wrapper) {
        right.onclick = () => {
            Wrapper.scrollLeft -= 50 ;
            console.log('scrollleft')
        }
        left.onclick = () => {
            Wrapper.scrollLeft += 50 ;
            console.log('scrollright');
        }
    }
    
    arrow(arrprev, arrnext , latest);
    arrow(fprev, fnext , featured);
    
    
})()