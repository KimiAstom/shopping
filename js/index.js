window.addEventListener('load', function () {
    var r = document.querySelector('.r');
    var l = document.querySelector('.l');
    var banner = document.querySelector('.banner');
    var ul = banner.querySelector('ul');
    var ol = banner.querySelector('ol');
    var flag = true;
    var time = setInterval(function () {
        r.click();
    }, 3000);
    banner.addEventListener('mouseover', function () {
        r.style.display = 'block';
        l.style.display = 'block';
        clearInterval(time);
    })
    banner.addEventListener('mouseout', function () {
        r.style.display = 'none';
        l.style.display = 'none';
        time = setInterval(function () {
            r.click();
        }, 3000);
    })
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i + '');
        li.addEventListener('click', function () {
            animation(ul, -this.getAttribute('index') * banner.offsetWidth);
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'white';
        })
    }
    ol.children[0].className = 'white';
    var clone = ul.children[0].cloneNode(true);
    ul.appendChild(clone);
    r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            animation(ul, ul.offsetLeft - 1 * banner.offsetWidth, function () {
                if (Math.abs(ul.offsetLeft / banner.offsetWidth) < 4) {
                    for (var i = 0; i < ol.children.length; i++) {
                        ol.children[i].className = '';
                    }
                    var i = Math.abs(ul.offsetLeft / banner.offsetWidth);
                    ol.children[i].className = 'white';
                } else {
                    for (var i = 0; i < ol.children.length; i++) {
                        ol.children[i].className = '';
                    }
                    ol.children[0].className = 'white';
                    ul.style.left = '0';
                }
                flag = true;
            });

        }
    })

    function left() {
        animation(ul, ul.offsetLeft + 1 * banner.offsetWidth, function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            var i = Math.abs(ul.offsetLeft / banner.offsetWidth);
            ol.children[i].className = 'white';
            flag = true;
        });
    }

    l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (Math.abs(ul.offsetLeft / banner.offsetWidth) > 0) {
                left();
            } else {
                ul.style.left = -(ol.children.length) * banner.offsetWidth + 'px';
                left();
            }
        }
    })
})