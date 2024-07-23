function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const chessBoard = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [7, 6],
    [0, 7],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 7],
];

let adjacenyList = [];

function moves(array) {
    let processedArray = [];

    let one = [array[0] + 1, array[1] + 2];
    let two = [array[0] + 1, array[1] - 2];
    let three = [array[0] + 2, array[1] + 1];
    let four = [array[0] + 2, array[1] - 1];
    let five = [array[0] - 1, array[1] + 2];
    let six = [array[0] - 1, array[1] - 2];
    let seven = [array[0] - 2, array[1] + 1];
    let eight = [array[0] - 2, array[1] - 1];

    processedArray = [one, two, three, four, five, six, seven, eight];
    let processedArrayFinish = [];
    for (let i = 0; i < processedArray.length; i++) {
        if (processedArray[i][0] > 0 && processedArray[i][1] > 0) {
            let index = chessBoard.findIndex((innerArray) =>
                arraysEqual(innerArray, processedArray[i])
            );
            if (index !== -1) {
                processedArrayFinish.push(index);
            }
        }
    }
    return processedArrayFinish;
}

for (let i = 0; i < chessBoard.length; i++) {
    adjacenyList[i] = moves(chessBoard[i]);
}

function knightMoves(knightStart, knightDestination) {
    knightStart = chessBoard.findIndex((innerArray) =>
        arraysEqual(innerArray, knightStart)
    );
    knightDestination = chessBoard.findIndex((innerArray) =>
        arraysEqual(innerArray, knightDestination)
    );
    let moves = 1;
    let paths = [];
    let bestPaths = [];
    for (let i = 0; i < adjacenyList[knightStart].length; i++) {
        paths.push([knightStart, adjacenyList[knightStart][i]]);
    }
    for (let i = 0; i < paths.length; i++) {
        if (paths[i][paths[i].length - 1] == knightDestination) {
            bestPaths.push(paths[i]);
        }
    }
    if (bestPaths.length > 0) {
        for (let i = 0; i < bestPaths.length; i++) {
            let bestPaths2 = bestPaths[i];
            for (let j = 0; j < bestPaths2.length; j++) {
                bestPaths[i][j] = chessBoard[bestPaths[i][j]];
            }
        }
        console.log(`You made it in ${moves} move!  Here's your path:`);
        console.log(bestPaths);
        return bestPaths;
    }
    let queue = paths;

    while (true) {
        moves++;
        let results = [];
        let k = 0;
        let newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            results.push(adjacenyList[queue[i][queue[i].length - 1]]);
            for (let j = 0; j < results[i].length; j++) {
                newQueue[k] = [...queue[i]];
                newQueue[k].push(results[i][j]);
                k++;
            }
        }
        queue = newQueue;
        for (let i = 0; i < queue.length; i++) {
            if (queue[i][queue[i].length - 1] == knightDestination) {
                bestPaths.push(queue[i]);
            }
        }
        if (bestPaths.length > 0) {
            for (let i = 0; i < bestPaths.length; i++) {
                let bestPaths2 = bestPaths[i];
                for (let j = 0; j < bestPaths2.length; j++) {
                    bestPaths[i][j] = chessBoard[bestPaths[i][j]];
                }
            }
            console.log(`You made it in ${moves} moves!  Here's your paths:`);
            console.log(bestPaths);
            return bestPaths;
        }
    }
}
knightMoves([0,0],[1,2])
