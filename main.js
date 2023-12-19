var questions = [
    {
        question: "Saya sangat suka?",
        options: {
            A: {
                text: "Mencatat",
                image: "assets/1/Picture1.png"
            },
            B: {
                text: "Bercerita",
                image: "assets/1/Picture2.png"
            },
            C: {
                text: "Melukis",
                image: "assets/1/Picture3.png"
            }
        }
    },
    {
        question: "Saya suka membaca dengan?",
        options: {
            A: {
                text: "Cepat",
                image: "assets/2/Picture1.png"
            },
            B: {
                text: "Suara keras",
                image: "assets/2/Picture2.png"
            },
            C: {
                text: "Jari sebagai penunjuk",
                image: "assets/2/Picture3.png"
            }
        }
    },
    {
        question: "Saya paling suka belajar dengan?",
        options: {
            A: {
                text: "Membaca",
                image: "assets/3/Picture1.png"
            },
            B: {
                text: "Mendengarkan",
                image: "assets/3/Picture2.png"
            },
            C: {
                text: "Bergerak",
                image: "assets/3/Picture3.png"
            }
        }
    },
    {
        question: "Saya mudah mengingat dengan apa yang saya?",
        options: {
            A: {
                text: "Saya lihat",
                image: "assets/4/Picture1.png"
            },
            B: {
                text: "Saya dengar",
                image: "assets/4/Picture2.png"
            },
            C: {
                text: "Saya tulis",
                image: "assets/4/Picture3.png"
            }
        }
    },
    {
        question: "Saya mencatat dengan?",
        options: {
            A: {
                text: "Banyak catatan disertai gambar",
                image: "assets/5/Picture1.png"
            },
            B: {
                text: "Sedikit mencatat, lebih suka mendengarkan",
                image: "assets/5/Picture2.png"
            },
            C: {
                text: "Banyak mencatat tidak ada gambar",
                image: "assets/5/Picture3.png"
            }
        }
    },
    // Tambahkan pertanyaan selanjutnya di sini
    {
        question: "Saya menjawab pertanyaan dengan jawaban?",
        options: {
            A: {
                text: "Ya atau tidak",
                image: "assets/6/Picture1.png"
            },
            B: {
                text: "Panjang lebar (suka bercerita)",
                image: "assets/6/Picture2.png"
            },
            C: {
                text: "Diikuti dengan gerakan anggota tubuh",
                image: "assets/6/Picture3.png"
            }
        }
    },
    {
        question: "Saat belajar saya?",
        options: {
            A: {
                text: "Tidak mudah terganggu dengan keributan",
                image: "assets/7/Picture1.png"
            },
            B: {
                text: "Mudah terganggu dengan keributan",
                image: "assets/7/Picture2.png"
            },
            C: {
                text: "Tidak dapat duduk diam dalam waktu lama",
                image: "assets/7/Picture3.png"
            }
        }
    },
    {
        question: "Saya mengingat dengan cara?",
        options: {
            A: {
                text: "Membayangkan",
                image: "assets/8/Picture1.png"
            },
            B: {
                text: "Mengucapkan",
                image: "assets/8/Picture2.png"
            },
            C: {
                text: "Sambil berjalan dan melihat",
                image: "assets/8/Picture3.png"
            }
        }
    },
    {
        question: "Saya berbicara lebih suka?",
        options: {
            A: {
                text: "Melihat Wajah Langsung",
                image: "assets/9/Picture1.png"
            },
            B: {
                text: "Lewat telepon",
                image: "assets/9/Picture2.png"
            },
            C: {
                text: "Memperhatikan gerak tubuh",
                image: "assets/9/Picture3.png"
            }
        }
    },
    {
        question: "Ketika berbicara, saya?",
        options: {
            A: {
                text: "Berbicara cepat",
                image: "assets/10/Picture1.png"
            },
            B: {
                text: "Berintonasi/berirama",
                image: "assets/10/Picture2.png"
            },
            C: {
                text: "Berbicara lambat",
                image: "assets/10/Picture3.png"
            }
        }
    },
    {
        question: "Cara saya belajar biasanya suka?",
        options: {
            A: {
                text: "Mengikuti petunjuk gambar",
                image: "assets/11/Picture1.png"
            },
            B: {
                text: "Sambil berbicara",
                image: "assets/11/Picture2.png"
            },
            C: {
                text: "Berbicara sambil menulis",
                image: "assets/11/Picture3.png"
            }
        }
    },
    {
        question: "Saya sering mengisi waktu luang?",
        options: {
            A: {
                text: "Menonton",
                image: "assets/12/Picture1.png"
            },
            B: {
                text: "Mendengarkan musik",
                image: "assets/12/Picture2.png"
            },
            C: {
                text: "Bermain game",
                image: "assets/12/Picture3.png"
            }
        }
    },
    {
        question: "Saya lebih mudah memahami pelajaran dengan?",
        options: {
            A: {
                text: "Melihat peraga",
                image: "assets/13/Picture1.png"
            },
            B: {
                text: "Berdiskusi",
                image: "assets/13/Picture2.png"
            },
            C: {
                text: "Praktik",
                image: "assets/13/Picture3.png"
            }
        }
    },
    {
        question: "Saya lebih menyukai?",
        options: {
            A: {
                text: "Gambar",
                image: "assets/14/Picture1.png"
            },
            B: {
                text: "Musik",
                image: "assets/14/Picture2.png"
            },
            C: {
                text: "Game",
                image: "assets/14/Picture3.png"
            }
        }
    }
];

var answers = {
    'A': 0,
    'B': 0,
    'C': 0
};

var currentQuestion = 0;

function displayQuestion() {
    var questionElement = document.getElementById('question');
    questionElement.innerHTML = questions[currentQuestion].question;

    var optionA = document.getElementById('optionA');
    var optionB = document.getElementById('optionB');
    var optionC = document.getElementById('optionC');

    var currentOptions = questions[currentQuestion].options;
    optionA.querySelector('img').src = currentOptions.A.image;
    optionA.querySelector('.option-text').innerHTML = currentOptions.A.text;

    optionB.querySelector('img').src = currentOptions.B.image;
    optionB.querySelector('.option-text').innerHTML = currentOptions.B.text;

    optionC.querySelector('img').src = currentOptions.C.image;
    optionC.querySelector('.option-text').innerHTML = currentOptions.C.text;
}

function recordAnswer(answer) {
    answers[answer]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Panggil fungsi saveResultToDatabase untuk menyimpan hasil kuis ke database
        saveResultToDatabase();
        showResult();
    }
}

// ...

function saveResultToDatabase() {
    var name = localStorage.getItem('name');
    var className = localStorage.getItem('class');

    // Kirim data ke server menggunakan metode AJAX atau fetch API
    // Contoh menggunakan fetch API
    fetch('save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            class: className,
            answers: answers
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Output respons dari server jika diperlukan
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



function showResult() {
    var resultElement = document.getElementById('result');
    var total = questions.length;

    var percentageA = (answers['A'] / total) * 100;
    var percentageB = (answers['B'] / total) * 100;
    var percentageC = (answers['C'] / total) * 100;

    var redirectUrl = 'result.html' +
        '?percentageA=' + encodeURIComponent(percentageA.toFixed(2)) +
        '&percentageB=' + encodeURIComponent(percentageB.toFixed(2)) +
        '&percentageC=' + encodeURIComponent(percentageC.toFixed(2));

    window.location.href = redirectUrl;
}

displayQuestion();
