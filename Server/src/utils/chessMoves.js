

const getAllMovesForPlayer = ({ i, j }) => {
    let postions = [];
    if (i + 2 < 8) {
        if (j + 1 < 8) {
            postions.push({ i: (i + 2), j: (j + 1) });
        }
        if (j - 1 >= 0) {
            postions.push({ i: (i + 2), j: (j - 1) });
        }
    }
    if (i - 2 >= 0) {
        if (j + 1 < 8) {
            postions.push({ i: (i - 2), j: (j + 1) });
        }
        if (j - 1 >= 0) {
            postions.push({ i: (i - 2), j: (j - 1) });
        }
    }
    if (j + 2 < 8) {
        if (i + 1 < 8) {
            postions.push({ j: (j + 2), i: (i + 1) });
        }
        if (i - 1 >= 0) {
            postions.push({ j: (j + 2), i: (i - 1) });
        }
    }
    if (j - 2 >= 0) {
        if (i + 1 < 8) {
            postions.push({ j: (j - 2), i: (i + 1) });
        }
        if (i - 1 >= 0) {
            postions.push({ j: (j - 2), i: (i - 1) });
        }
    }
    return postions;
}

module.exports = getAllMovesForPlayer;