// TOGGLE MUSIC
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Musik";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Putar Musik";
    }
}

// PASSWORD CHECK
function checkPassword() {
    const password = document.getElementById("password").value;
    const errorText = document.getElementById("errorText");

    if (password === "sayang") { // bisa ganti password
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
    } else {
        errorText.textContent = "Hehehe salah 😝 coba lagi yaa";
    }
}

// LOVE FLOATING EFFECT
function createLove() {
    const love = document.createElement("div");
    love.classList.add("love");
    love.innerHTML = "💖";
    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = (Math.random() * 20 + 15) + "px";
    love.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 6000);
}

setInterval(createLove, 300);

// TYPING LETTER
function showLetter() {
    document.getElementById("letter").classList.remove("hidden");

    const text = "Aku nggak pernah nyangka bisa kenal kamu. Kamu bikin hari-hariku lebih berwarna, lebih bahagia, dan lebih berarti. Terima kasih sudah hadir di hidupku. Aku sayang kamu, hari ini, besok, dan seterusnya 💕";

    let i = 0;
    const speed = 40;
    const typingText = document.getElementById("typingText");
    typingText.innerHTML = "";

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

// GAME BUTTON KABUR
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
});

function loveAnswer() {
    alert("Aku tau kamu sayang aku 😘💖");
}
