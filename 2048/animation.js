/**
 * Created by Lewis on 16/2/19.
 */
function showNumberWithAnimation(i, j, randNumber) {
    var numberCell = $('#number-cell-' + i + '-' + j);

    numberCell.css('background-color', getNumberBackgroundColor(randNumber));
    numberCell.css('color', getNumberColor(randNumber));
    numberCell.text(randNumber);


    if (documentWidth > 520) {
        numberCell.animate({
            width: '106px',
            height: '106px',
            top: getPosTop(i, j),
            left: getPosLeft(i, j)
        }, 50)
    } else {
        numberCell.animate({
            width: '70px',
            height: '70px',
            top: getPosTop(i, j),
            left: getPosLeft(i, j)
        }, 50)
    }

}

function showMoveAnimation(formX, fromY, toX, toY) {
    var numberCell = $('#number-cell-' + formX + '-' + fromY);

    numberCell.animate({
        top: getPosTop(toX, toY),
        left: getPosLeft(toX, toY)
    }, 200)
}

function updateScore(score) {
    $('.score-container span').text(score);
    if (score > bestScore) {
        bestScore = score;
        Cookies.set('bestScore', bestScore);
        $('.best-container span').text(bestScore);
    }
}

