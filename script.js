let firstClickDone = false;
const correctCode = "σουσου";

function firstClick() {
    if (!firstClickDone) {
        document.getElementById('gift-box').querySelector('.text').innerText = "πρεπει να βεις τον κωδικο";
        document.getElementById('code-prompt').classList.remove('hidden');
        firstClickDone = true;
    }
}

function checkCode() {
    const userInput = document.getElementById('code-input').value;
    if (userInput === correctCode) {
        openGift();
    } else {
        alert("Incorrect code. Try again!");
    }
}

function openGift() {
    const giftBox = document.getElementById('gift-box');
    giftBox.style.transition = 'transform 1s';
    giftBox.style.transform = 'rotateY(180deg)';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
        document.getElementById('message').classList.remove('hidden');
    }, 1000);
}

// 3D effect with Three.js
const container = document.getElementById('gift-box');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
