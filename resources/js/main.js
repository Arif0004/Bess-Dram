let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)


window.addEventListener('load', function(){

    const colors = ['#16A085','#27AE60','#3498db','#8e44ad','#f1c40f','#c0392b',]

    // select 
    const sounds = document.querySelectorAll('.sound')
    const pads =  document.querySelectorAll('.pads div')
    const visual = $('.visual')

    // print(pads)

    pads.forEach(function(pad,index) {
        pad.addEventListener('click',function() {
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubble(index)
        })
    })

    // create bubble
    const createBubble = (index) => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
       
        bubble.style.background = colors[index]
        bubble.style.animation = 'jump 1s ease'

    }

})
