

 


// makeHtmlBoard
describe('makeHtmlBoard test', function() {
    it ('should verify top row has id of column-top', function() {
        let topRow = document.getElementById('column-top');
        expect(topRow).toBeTruthy();
    });

    it ('should verify that headCells have id of 0-6', function() {
        let headCell0 = document.getElementById('0');
        let headCell1 = document.getElementById('1');
        let headCell2 = document.getElementById('2');
        let headCell3 = document.getElementById('3');
        let headCell4 = document.getElementById('4');
        let headCell5 = document.getElementById('5');
        let headCell6 = document.getElementById('6');

        expect(headCell0).toBeTruthy();
        expect(headCell1).toBeTruthy();
        expect(headCell2).toBeTruthy();
        expect(headCell3).toBeTruthy();
        expect(headCell4).toBeTruthy();
        expect(headCell5).toBeTruthy();
        expect(headCell6).toBeTruthy();
    });

    it ('should verify that cell has id of y-x', function() {
        let firstRow = document.getElementById('0-0')
        let secondRow = document.getElementById('1-1')
        let thirdRow = document.getElementById('2-2')
        let fourthRow = document.getElementById('3-3')
        let fifthRow = document.getElementById('4-4')
        let sixthRow = document.getElementById('5-5')
        
        expect(firstRow).toBeTruthy();
        expect(secondRow).toBeTruthy();
        expect(thirdRow).toBeTruthy();
        expect(fourthRow).toBeTruthy();
        expect(fifthRow).toBeTruthy();
        expect(sixthRow).toBeTruthy();
    });
});



// // findSpotForCol
describe('findSpotForCol test', function() {
    it ('should verify that returned row is the top empty cell', function() {
        board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,1],
            [null,null,null,null,null,1,2],
            [null,null,null,null,2,2,1]
            ];

        expect(findSpotForCol(6)).toEqual(2);
        expect(findSpotForCol(5)).toEqual(3);
        expect(findSpotForCol(4)).toEqual(4);
        expect(findSpotForCol(3)).toEqual(5);

        board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];
    });

    it ('should verify that filled column returns null', function() {
        board = [
            [null,null,null,null,null,null,2],
            [null,null,null,null,null,null,1],
            [null,null,null,null,null,null,2],
            [null,null,null,null,null,null,1],
            [null,null,null,null,null,null,2],
            [null,null,null,null,null,null,1]
        ];

        expect(findSpotForCol(6)).toEqual(null);

        board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];
    });
});



// // placeInTable
describe('placeInTable test', function() {
    it ('should verify that div has class of piece', function() {
        placeInTable(5,0);
        let placedPieceClass = document.getElementsByClassName('piece');
        expect(placedPieceClass).toBeTruthy();

        let played = document.getElementById('5-0');
        played.removeChild(played.firstElementChild);
    });

    it ('should verify that div has id of playerID', function() {
        placeInTable(5,0);
        let placedPieceId = document.getElementById('one');
        expect(placedPieceId).toBeTruthy();

        let played = document.getElementById('5-0');
        played.removeChild(played.firstElementChild);
    });
});



// // checkForTie
describe('checkForTie test', function() {
    it ('should verify that tie is declared if top row has no null values', function() {
        board = [
            [1,2,1,2,1,2,1],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];

        expect(checkForTie()).toBeTruthy();


        board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];
    });

    it ('should verify that tie is declared if top row has no null values', function() {

        board = [
            [1,2,1,2,1,2,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];
    
        expect(checkForTie()).toBeFalsy();

        board = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]
        ];
    });


})



// // checkForWin
describe('checkForWin', function() {
    it ('should verify horizontal win returns true', function() {
        expect().toEqual();
    });

    // it ('should verify vertical win returns true', function() {
    //     expect().toEqual();
    // });

    // it ('should verify diagonal win returns true', function() {
    //     expect().toEqual();
    // });
})

