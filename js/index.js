// var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   );
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl);
//   });
//   var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')



//游標事件監聽
document.addEventListener('mousemove', (event)=> {
  gsap.to('.mouse-Box', {
    x: event.pageX,
    y: event.pageY,
    stagger: -0.1,
  });
});
const DURATION = 400

const smoke = new mojs.Burst({
  left: 0, top: 0,
  degree:   0,
  count:    20,
  radius:   { 0: 100 },
  children: {
    fill:       '#FFF170',
    pathScale:  'rand(0.1, 2)',
    radius:     'rand(12, 15)',
    swirlSize:  'rand(50, 15)',
    swirlFrequency: 'rand(2, 4)',
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,
  }
});


document.addEventListener( 'click',  (e) => {
  smoke
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});


//gotop
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("GoTop").style.display = "block";
    } else {
        document.getElementById("GoTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop:0}, 20);
}



