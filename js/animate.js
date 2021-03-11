function animation(obj, left, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (left - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //由于step全是整数，故不会超出！该算法很重要！
        if (obj.offsetLeft == left) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}
