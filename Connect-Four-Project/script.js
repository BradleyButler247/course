/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

 const WIDTH = 7;
 const HEIGHT = 6;
 
 let currPlayer = 1; // active player: 1 or 2
 let board = []; // array of rows, each row is array of cells  (board[y][x])
 
 /** makeBoard: create in-JS board structure:
  *    board = array of rows, each row is array of cells  (board[y][x])
  */

let playerClass;
 
const makeBoard = () => {
   // TODO: set "board" to empty HEIGHT x WIDTH matrix array
    for (let i = 0; i < HEIGHT; i++) {
        let row = [];
        for (let i = 0; i < WIDTH; i++) {
            row.push(null);
        }
        board.push(row);
    }    
}
 
 /** makeHtmlBoard: make HTML table and row of column tops. */
 
const makeHtmlBoard = () => {
    // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
    const htmlBoard = document.getElementById('board');

    // TODO: add comment for this code

    // creates the top row to select where piece is dropped
    const top = document.createElement("tr"); 
    top.setAttribute("id", "column-top"); 
    top.addEventListener("click", handleClick);
 
    // adds cells to the top row to select where piece is dropped
    for (let x = 0; x < WIDTH; x++) {
        const headCell = document.createElement("td"); 
        headCell.setAttribute("id", x);
        top.append(headCell); 
    }
    htmlBoard.append(top);
 
    // TODO: add comment for this code

    // creates the cells for each null element within the board array
    // creates a row for each sub-array in the board array
    for (let y = 0; y < HEIGHT; y++) {
        const row = document.createElement("tr");
        
        // creates a data-cell for each null element in each row sub-array then assigns an id to the cells based on the x & y coordinates
        for (let x = 0; x < WIDTH; x++) {
            const cell = document.createElement("td");
            cell.setAttribute("id", `${y}-${x}`);
            row.append(cell);
        }
    htmlBoard.append(row);
    }
}
 
 /** findSpotForCol: given column x, return top empty y (null if filled) */
 
const findSpotForCol = (x) => {

    for (let row of board) {
        const idx = board.indexOf(row);

        if (board[0][x] === null) {
            if (row[x] !== null) {
                board[idx - 1][x] = currPlayer;
                return idx - 1;
            } else if (idx === 5) {
                row[x] = currPlayer
                return board.indexOf(row);
            } 
        } else {
          return null;
        }
    }
}
 
 /** placeInTable: update DOM to place piece into HTML table of board */


const placeInTable = (y, x) => {
    // TODO: make a div and insert into correct table cell
    const div = document.createElement('div');
    const td = document.getElementById(`${y}-${x}`)
    
    if (td.innerHTML == ''){
      if (currPlayer === 1) {
        playerID = 'one';
      } else {
        playerID = 'two';
      }

      div.setAttribute("class", 'piece');
      div.setAttribute("id", playerID);
      td.append(div);
    } 
    else {
        return;
    }
}
 
 /** endGame: announce game end */

const endGame = (msg) => {
   // TODO: pop up alert message
   if (checkForWin() === true) {
    alert (`Player ${currPlayer} won!`);
   }


 }

const checkForTie = () => {
  return !board[0].includes(null);
}
 
 /** handleClick: handle click of column top to play piece */
 
const handleClick = (evt) => {
   // get x from ID of clicked cell
   let x = +evt.target.id;
 
   // get next spot in column (if none, ignore click)
   let y = findSpotForCol(x);
   if (y === null) {
     return;
   }
 
   // place piece in board and add to HTML table
   // TODO: add line to update in-memory board
   placeInTable(y, x);
 
   // check for win
   if (checkForWin()) {
     return endGame();
   }
 
   // check for tie
   // TODO: check if all cells in board are filled; if so call, call endGame
   if (checkForTie()) {
    alert (`The game is a tie`);
   }
  //  && !checkForWin()


 
   // switch players
   // TODO: switch currPlayer 1 <-> 2
   if (currPlayer === 1) {
    currPlayer++;
   } else {
    currPlayer--;
   }
 }
 
 /** checkForWin: check board cell-by-cell for "does a win start here?" */
 
const checkForWin = () => {
   const _win = (cells) => {
     // Check four cells to see if they're all color of current player
     //  - cells: list of four (y, x) cells
     //  - returns true if all are legal coordinates & all match currPlayer
 
     return cells.every(
       ([y, x]) =>
         y >= 0 &&
         y < HEIGHT &&
         x >= 0 &&
         x < WIDTH &&
         board[y][x] === currPlayer
     );
   }
 
   // TODO: read and understand this code. Add comments to help you.
 
   for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
 
       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
         return true;
       }
     }
     return false;
   }
}
 
 makeBoard();
 makeHtmlBoard();
