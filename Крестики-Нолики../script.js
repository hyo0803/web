const area = document.getElementById('area');
let move = 0;
var winner = '';

area.addEventListener('click', e => {
    if (e.target.className = 'box'){
        move % 2 ===0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        who();
    }
})

const who = () => {
    const boxes = document.getElementsByClassName('box');
    const winarr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];
    for (i = 0; i<winarr.length; i++) {
        if (boxes[winarr[i][0]].innerHTML == 'X'&&
            boxes[winarr[i][1]].innerHTML == 'X'&&
            boxes[winarr[i][2]].innerHTML == 'X'){
                winner = 'Крестики рулят';
                Result(winner);               
        }else if (boxes[winarr[i][0]].innerHTML == 'O'&&
                boxes[winarr[i][1]].innerHTML == 'O'&&
                boxes[winarr[i][2]].innerHTML == 'O'){
                winner = 'Нолики рулят';
                Result(winner); 
        }
    }
}

const Result = winner => {
    console.log(winner);
    winnerres.innerHTML = winner;
}
