let pc1 = document.getElementById('pc1');
let pc2 = document.getElementById('pc2');
let monitor = document.getElementById('monitor');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    monitor.style.top = value * 0.5 + 'px';
    pc1.style.top = value * 1.3 + 'px';
    pc2.style.top = value * 1.3 + 'px';
    pc3.style.top = value * 1.3 + 'px';
    pc4.style.top = value * 1.3 + 'px';
    pc5.style.top = value * 1.3 + 'px';
    pc6.style.top = value * 1.35 + 'px';
    pc7.style.top = value * 1.35 + 'px';
    pc8.style.top = value * 1.1 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
