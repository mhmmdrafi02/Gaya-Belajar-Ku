<?php
// Mendapatkan data yang dikirim melalui permintaan POST
$data = json_decode(file_get_contents('php://input'), true);

// Mendapatkan nilai nama dan kelas
$name = $data['name'];
$class = $data['class'];

// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hasil_penilaian"; // Ganti dengan nama database yang telah Anda buat

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Menyiapkan pernyataan SQL untuk menyimpan data awal (nama dan kelas)
$sql = "INSERT INTO quiz_results (nama, kelas) VALUES ('$name', '$class')";

if ($conn->query($sql) === TRUE) {
    $response = array('status' => 'success', 'message' => 'Data awal berhasil disimpan ke database.');

    // Mendapatkan ID terakhir yang disimpan
    $lastInsertId = $conn->insert_id;

    // Jika terdapat jawaban (hasil kuis)
    if (isset($data['answers'])) {
        $answers = $data['answers'];

        // Menghitung persentase jawaban
        $total = 14;
        $percentageA = ($answers['A'] / $total) * 100;
        $percentageB = ($answers['B'] / $total) * 100;
        $percentageC = ($answers['C'] / $total) * 100;

        // Menyimpan jawaban dan persentase jawaban ke tabel
        $updateSql = "UPDATE quiz_results SET visual = '$answers[A]', audiotori = '$answers[B]', kinestetik = '$answers[C]', persentase_visual = $percentageA, persentase_audiotori = $percentageB, persentase_kinestetik = $percentageC WHERE id = $lastInsertId";

        if ($conn->query($updateSql) === TRUE) {
            $response['message'] = 'Data hasil kuis berhasil disimpan ke database.';
        } else {
            $response['message'] = 'Terjadi kesalahan saat menyimpan data hasil kuis: ' . $conn->error;
        }
    }
} else {
    $response = array('status' => 'error', 'message' => 'Terjadi kesalahan saat menyimpan data awal: ' . $conn->error);
}

// Menutup koneksi
$conn->close();

// Mengirim respons kembali ke JavaScript
header('Content-Type: application/json');
echo json_encode($response);
?>