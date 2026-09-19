$(document).ready(function() {
    const $balloon = $('#balloon');

    const MIN_SIZE = 200;
    const MAX_SIZE = 420;
    const CLICK_STEP = 10;
    const LEAVE_STEP = 5;

    const COLORS = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let size = MIN_SIZE;

    function updateBalloon() {
        $balloon.css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': COLORS[colorIndex]
        });
    }

    function nextColor() {
        colorIndex = (colorIndex + 1) % COLORS.length;
    }

    function prevColor() {
        colorIndex = (colorIndex - 1 + COLORS.length) % COLORS.length;
    }

    $balloon.click(function() {
        size += CLICK_STEP;
        nextColor();

        if (size > MAX_SIZE) {
            size = MIN_SIZE;
        }
        updateBalloon();
    });

    $balloon.mouseleave(function() {
        size = Math.max(MIN_SIZE, size - LEAVE_STEP);
        prevColor();
        updateBalloon();
    });

    updateBalloon();
});