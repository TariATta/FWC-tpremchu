(() => {
    const balloon = document.getElementById('balloon');

    const MIN_SIZE = 200;
    const MAX_SIZE = 420;
    const CLICK_STEP = 10;
    const LEAVE_STEP = 5;

    const COLORS = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let size = MIN_SIZE;

    function Current() {
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = COLORS[colorIndex];
    }

    function nextColor() {
        colorIndex = (colorIndex + 1) % COLORS.length;
    }

    function prevColor() {
        colorIndex = (colorIndex - 1 + COLORS.length) % COLORS.length;
    }

    balloon.addEventListener('click', () => {
        size += CLICK_STEP;
        nextColor();

        if (size > MAX_SIZE) {
            size = MIN_SIZE;
        }
        Current();
    });

    balloon.addEventListener('mouseleave', () => {
        size = Math.max(MIN_SIZE, size - LEAVE_STEP);
        prevColor();
        Current();
    });

    Current();
})();