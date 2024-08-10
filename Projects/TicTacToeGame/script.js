let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        document.getElementById("result").innerHTML = `Winner is ${currentPlayer}`;
        return true; // Stop the game
    }
    // Check for a draw
    if (!arr.some((e) => e === null)) {
        document.getElementById("result").innerHTML = `It's a Draw!`;
        return true; // Stop the game
    }
    return false; // Continue the game
}

function onClickHandler(element) {
    const id = Number(element.id) - 1; // Convert id to a zero-based index
    if (arr[id] !== null) return; // Prevent overwriting

    arr[id] = currentPlayer;
    element.textContent = currentPlayer;

    if (checkWinner()) {
        return; // Stop the game if there is a winner or a draw
    }

    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(arr);
}
