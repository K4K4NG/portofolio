<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Lakukan validasi sesuai kebutuhan Anda
if ($username === 'admin' && $password === 'admin') {
    // Login berhasil, lakukan tindakan yang diinginkan
    echo "Selamat datang, $username!";
} else {
    // Login gagal, berikan pesan kesalahan
    echo "Username atau password salah!";
}
?>
