var data = [
    "Korea Selatan",
    "Korea Utara",
];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama Negara</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>"  + btnHapus + "</tr>";
    }
}

function tambah() {
    var input = document.querySelector("input[name=negara]");
    data.push(input.value);
    tampil();
    input.value = "";
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();
