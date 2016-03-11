/**
 * Created by Lewis on 16/2/19.
 */
var board = new Array();
var score = 0;
var bestScore = Cookies.get('bestScore');
var hasConflicted = new Array();
var addScore = 0;
var documentWidth = document.documentElement.clientWidth;

$(document).ready(function () {
    newGame();
});

$(window).resize(function () {
    documentWidth = document.documentElement.clientWidth;
    updateBoardView();
});

function newGame() {
    score = 0;
    init();
    updateScore(score);
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for (var i = 0; i < 4; i++) {
        board [i] = new Array();
        hasConflicted [i] = new Array();
        for (var j = 0; j < 4; j++) {
            board [i][j] = 0;
            hasConflicted [i][j] = false;
        }
    }
    updateBoardView();
    bestscore();
    score = 0;
}

function updateBoardView() {
    $('.number-cell').remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('.grid-container').append('<div class="number-cell" id="number-cell-' + i + '-' + j + '" ></div>');
            var theNumberCell = $('#number-cell-' + i + '-' + j);
            if (documentWidth > 520) {
                if (board[i][j] == 0) {
                    theNumberCell.css('width', '0px');
                    theNumberCell.css('height', '0px');
                    theNumberCell.css('top', getPosTop(i, j) + 50);
                    theNumberCell.css('left', getPosLeft(i, j) + 50);
                } else {
                    theNumberCell.css('width', '106px');
                    theNumberCell.css('height', '106px');
                    theNumberCell.css('top', getPosTop(i, j));
                    theNumberCell.css('left', getPosLeft(i, j));
                    theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                    theNumberCell.css('color', getNumberColor(board[i][j]));
                    theNumberCell.text(board[i][j]);
                }
            } else {
                if (board[i][j] == 0) {
                    theNumberCell.css('width', '0px');
                    theNumberCell.css('height', '0px');
                    theNumberCell.css('top', getPosTop(i, j) + 35);
                    theNumberCell.css('left', getPosLeft(i, j) + 35);
                } else {
                    theNumberCell.css('width', '70px');
                    theNumberCell.css('height', '70px');
                    theNumberCell.css('top', getPosTop(i, j));
                    theNumberCell.css('left', getPosLeft(i, j));
                    theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                    theNumberCell.css('color', getNumberColor(board[i][j]));
                    theNumberCell.text(board[i][j]);
                }
            }

            hasConflicted [i][j] = false;
        }
    }
}

function generateOneNumber() {
    if (nospace(board)) {
        return false;
    }

    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));

    var time = 0;
    while (time < 50) {
        if (board[randx][randy] == 0) {
            break;
        }
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));

        time++;
    }

    if (time == 50) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] == 0) {
                    randx = i;
                    randy = j;
                }
            }
        }
    }
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);

    return true;
}

$(document).keydown(function (event) {
    switch (event.which) {
        case 37://left
            if (moveLeft()) {
                setTimeout('generateOneNumber()', 210);
                setTimeout('isGameOver()', 300);
            }
            break;
        case 38://up
            if (moveUp()) {
                setTimeout('generateOneNumber()', 210);
                setTimeout('isGameOver()', 300);
            }
            break;
        case 39://right
            if (moveRight()) {
                setTimeout('generateOneNumber()', 210);
                setTimeout('isGameOver()', 300);
            }
            break;
        case 40://down
            if (moveDown()) {
                setTimeout('generateOneNumber()', 210);
                setTimeout('isGameOver()', 300);
            }
            break;
        default:
            break;
    }
});

function isGameOver() {
    if (nospace(board) && nomove(board)) {
        gameOver();
    }
}

function gameOver() {
    $('.game-content .game-information').addClass('game-over')
}

function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        addScore += board[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout('addscore(addScore)', 200);
    setTimeout('updateBoardView()', 200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    }
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlockVertical(k, i, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board [i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVertical(k, i, j, board) && !hasConflicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        addScore += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout('addscore(addScore)', 200);
    setTimeout('updateBoardView()', 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, j, k, board) && !hasConflicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        addScore += board[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout('addscore(addScore)', 200);
    setTimeout('updateBoardView()', 200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlockVertical(i, k, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVertical(i, k, j, board) && !hasConflicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        addScore += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout('addscore(addScore)', 200);
    setTimeout('updateBoardView()', 200);
    return true;
}

function addscore(score) {
    if (score > 0) {
        var container = $('.score-container');
        $('.score-addition').remove();
        container.append('<div class="score-addition">+' + addScore + '</div>');
        addScore = 0;
    }
}

function bestscore() {
    if (Cookies.get('bestScore') == undefined) {
        Cookies.set('bestScore', 0);
    } else {
        $('.best-container span').text(bestScore);
    }
}

function tryagain() {
    newGame();
    $('.game-content .game-over').removeClass('game-over')
}