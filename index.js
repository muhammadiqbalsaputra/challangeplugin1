function submitForm() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    var outputPesan = ('form yang telah diisi : '+ '<br><br>Nama : ' + firstName+'&ensp;'+lastName +'<br>Email: '+email+'<br>Pesan : '+ pesan)

    if(firstName&&lastName&&email&&pesan){
        alert('terimakasih sudah mengisi form ' + firstName);
        document.getElementById('hasilPesan').style.padding="90px"
        document.getElementById('hasilPesan').style.margin="200px"
        document.getElementById('hasilPesan').style.backgroundColor="rgb(191 219 254)"
        document.getElementById('hasilPesan').style.border="solid"
        document.getElementById('hasilPesan').style.borderColor="black"
        document.getElementById('hasilPesan').style.fontSize="large"
        document.getElementById('hasilPesan').innerHTML = outputPesan;
        document.getElementById('isiForm').style.display = 'none';
        document.getElementById('hasilPesan').style.display = 'block';
    }else{  
        alert('mohon isi semua form');
    }
}