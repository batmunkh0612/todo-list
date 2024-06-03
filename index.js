console.log('Running');


const createBoard  = () => {
    const board = document.createElement('div');


    const header = document.createElement('header');
    const list = document.createElement('div');

    board.appendChild(header);
    board.appendChild(list);
    document.querySelector('body').appendChild(board);
}

for (let i = 1; i <= 4; i++) {
    createBoard();
    
}