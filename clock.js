/* tanımlamalar-id */
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    /* güncel tarih cekme */
    let day = new Date();
    /* çarpma işlemleri 360 derece algılayan kodu saat cinsine çevirmek */
    let hh = day.getHours() * 30; /* 12 saat*30=360 derece */
    let mm = day.getMinutes() * 6; /* 60 dakika *6=360derece */
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    /* dijital saat tanımlamalar */
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h > 12 ? 'PM' : 'AM';
    /* 24 saat 12 saat */
    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

//........................................
    // Güncel tarih
    var history = new Date();

    // Yıl, ay ve gün bilgilerini al
    var year = history.getFullYear();
    var month = history.getMonth() + 1; // JavaScript'te aylar 0-11 arasında indekslenir, bu yüzden 1 ekliyoruz.
    var gun = history.getDate();

    // Güncellenmiş öğeleri seç
    var dayElement = document.getElementById("day");
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");

    // Öğelerin içeriğini güncelle
    dayElement.innerHTML = gun;
    monthElement.innerHTML = month;
    yearElement.innerHTML = year;


})
