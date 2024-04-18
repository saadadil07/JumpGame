let hero = document.getElementById('hero')
let block = document.getElementById('block')
let showScore = document.getElementById('showScore')
let score = 0
let dead = false
let level = 1
let hero_top = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
let block_left = parseInt(window.getComputedStyle(block).getPropertyValue('left'))


document.body.addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){
        hero.classList.add('jump')
        setTimeout(() => {
            hero.classList.remove('jump')
        }, 1000);
    }
})


function checkDead(){
    setInterval(() => {
        if(parseInt(window.getComputedStyle(block).getPropertyValue('left'))>=0 && parseInt(window.getComputedStyle(block).getPropertyValue('left'))<=50 && parseInt(window.getComputedStyle(hero).getPropertyValue('top'))>=250){
            alert(`GAME OVER !  Your Score is ${score}`)
            block.style.animation='none'
            block.style.display='none'
            dead = true
        }
    }, 100);
}
checkDead()


function everyRound(){
    let singleRound = setInterval(() => {
        if(dead===true){
            clearInterval(singleRound)
        }
        else{
            nextLevel()
        }
    }, 2000);
}
everyRound()


function nextLevel(){
    score++
    showScore.innerHTML = score
    switch(score){
        case 3:
            level = level + 1
            let level2 = document.createElement('h1')
            level2.innerHTML = `(Level ${level})`
            document.body.appendChild(level2)
            level2.style.marginLeft = '10px'
            level2.style.marginTop = '75px'
            block.style.scale = 1.25
            setTimeout(() => {
                level2.style.display = 'none'
            }, 1000);
            break
        case 6:
            level = level + 1
            let level3 = document.createElement('h1')
            level3.innerHTML = `(Level ${level})`
            document.body.appendChild(level3)
            level3.style.marginLeft = '10px'
            level3.style.marginTop = '70px'
            block.style.scale = 1.5
            setTimeout(() => {
                level3.style.display = 'none'
            }, 1000);
            break
        case 9:
            level = level + 1
            let level4 = document.createElement('h1')
            level4.innerHTML = `(Level ${level})`
            document.body.appendChild(level4)
            level4.style.marginLeft = '10px'
            level4.style.marginTop = '65px'
            block.style.scale = 2
            setTimeout(() => {
                level4.style.display = 'none'
            }, 1000);
            break
        }
    }
       
   

