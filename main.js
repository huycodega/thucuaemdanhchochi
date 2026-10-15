// Thay đổi nội dung búc thư ở đây
const letterContent = `Dear người em đang quen 🫶🏻🌷,

Chúc 20/10 của chị mãi lun xinh đẹp, thật hạnh phúc và gặp ít khó khăn trên hành trình mình chọn ạ, nhớ phải lun cười nha nha chị. 

Em không biết là làm thế này có đúng không vì em muốn tạo thế giới mới dành cho chị và mong chị thích nó.

Em biết là mình chưa quen nhau lâu và có thể quen nhau được dài nữa không nhưng mấy cái em làm này là từ tấm lòng của em thật với em cũng muốn đồng hành cùng chị ạ.

Em muốn chị tận hưởng những gì em muốn làm cho chị, em muốn chị cười thật nhiều và hạnh phúc thật nhiều nha.

Em thích nói chuyện với Ngọc nhìuuu lắm hihi 🥰❤️.



                       Người đang đồng hanh cùng chị,
                           HNDZ`;

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
let durationWrite = 50;
let isWriting = false; // Biến kiểm tra đang viết chữ

// Hiệu ứng gõ chữ
function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  boxLetter.innerHTML = ""; // Xóa nội dung cũ
  isWriting = true; // Đánh dấu đang viết

  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;

      // Khi viết xong
      if (index === letterContentSplited.length - 1) {
        isWriting = false;
      }
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  // Không cho click khi đang viết chữ
  if (isWriting) return;

  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});

// Xử lý nhạc nền
let music = document.getElementById("bgMusic");
let musicBtn = document.querySelector(".musicToggle");
let isMusicPlaying = false;
const START_TIME = 79; // 1 phút 19 giây = 79 giây
const PLAY_DURATION = 257000; // 30 giây

// Hàm toggle nhạc
function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
    musicBtn.classList.add("muted");
    isMusicPlaying = false;
  } else {
    music.currentTime = START_TIME; // Set vị trí bắt đầu
    music.play();
    musicBtn.classList.remove("muted");
    isMusicPlaying = true;
  }
}

// Tự động phát nhạc khi click nút "Chạm vào đây"
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");

  // Phát nhạc từ 1:19 khi mở thiệp
  music.currentTime = START_TIME; // Set vị trí bắt đầu là 1:19
  music.play().catch((err) => {
    console.log("Cần tương tác để phát nhạc");
  });
  isMusicPlaying = true;
  musicBtn.classList.remove("muted");
});

// Dừng nhạc sau 30 giây
music.addEventListener("play", () => {
  setTimeout(() => {
    music.pause();
    music.currentTime = START_TIME; // Reset về vị trí 1:19
    musicBtn.classList.add("muted");
    isMusicPlaying = false;
  }, PLAY_DURATION); // 30 giây = 30000ms
});
