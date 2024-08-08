function rectangularCollision({
    rectangle1,rectangle2
}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height 
    )
}

function determinewinner ({player,enemy,timerId}) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie'
       
   }else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 wins'
   }else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 wins'
   }
}

let timer = 99;
let timerId 
function decrease_timer (){
   
   if (timer > 0) {
    timerId=setTimeout(decrease_timer, 1000)
    timer--
    document.querySelector('#Timer').innerHTML = timer
   }
    if(timer === 0){
       
        determinewinner({player,enemy,timerId})
}
}
