let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

window.addEventListener('load', function() {
	var content = document.querySelector('.header');
	content.classList.add('show');
});

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

function sendWhatsAppMessage() {
	var name = document.getElementById('nama').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('pesan').value;
	var masal = document.getElementById('masalah').value;
	var url = 'https://api.whatsapp.com/send?phone=+6281322544391&text=' + encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message + '\nmasalah: ' + masal);
	window.open(url);
}

function masukprojek() {
	var url = 'https://github.com/K4K4NG/';
	window.open(url);
}

// Inisialisasi Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);

// Inisialisasi Tilt.js
const tiltElements = document.querySelectorAll('.tilt-inner');
tiltElements.forEach((element) => {
  element.tilt({
    max: 10,
    perspective: 1000,
    scale: 1.05,
    speed: 300,
    transition: true,
    glare: true,
    maxGlare: 0.5,
    tiltEffect: 'glare',
    reset: true,
  });
});

// Tambahkan objek dan efek lainnya di sini, misalnya:
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Menambahkan cahaya
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Menambahkan bayangan
const shadowLight = new THREE.AmbientLight(0x404040, 0.3);
scene.add(shadowLight);

camera.position.z = 5;

// Menambahkan keterangan berjalan
const captions = [
  "Kenang kenangan indah bersama kami!",
  "Tetap tersenyum dalam setiap momen",
  "Bersyukurlah atas kenangan yang tak terlupakan",
  "Selalu di hati, selalu di kenangan"
];

let currentCaption = 0;
const captionElement = document.getElementById('caption');
const captionDescElement = document.getElementById('caption-desc');

function showCaption() {
  if (currentCaption < captions.length) {
    captionElement.textContent = captions[currentCaption];
    captionElement.style.animation = "fade-in 1s ease-in-out forwards";
    captionDescElement.style.animation = "slide-in 2s ease-in-out forwards";
    setTimeout(() => {
      currentCaption++;
      showCaption();
    }, 3000); // Ganti keterangan setiap 3 detik (3000ms)
  }
}

showCaption();

function animate() {
  requestAnimationFrame(animate);
  // Tambahkan perubahan animasi di sini, misalnya:
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Kode sebelumnya...

// Animasi tulisan di bagian bawah kotak
const animatedTextElement = document.getElementById('animated-text');

function animateText() {
  animatedTextElement.style.animation = "slide-in 1s ease-in-out forwards";
}

setTimeout(animateText, 2000); // Tampilkan animasi text setelah 2 detik (2000ms)

