// tangkap pilihan user
var pil = prompt('Pilih: gajah, semut, orang').toLowerCase();

// tangkap pilihan komputer
var komp = Math.random() <= 0.33 ? 'gajah' : komp <= 0.66 ? 'semut' : 'orang';

// tentukan hasil
var hasil;

if (pil === komp) {
    hasil = 'seri';
} else {
    switch (pil) {
        case 'gajah':
            hasil = (komp === 'semut' ? 'kalah' : 'menang');
            break;
        case 'semut':
            hasil = (komp === 'orang' ? 'kalah' : 'menang');
            break;
        case 'orang':
            hasil = (komp === 'gajah' ? 'kalah' : 'menang');
            break;
        default:
            alert('Pilihan tidak valid');
    }
}

// tampilkan hasil
alert('Kamu memilih: ' + pil + ' dan komputer memilih: '+ komp + '\nMaka hasilnya: ' + hasil);
