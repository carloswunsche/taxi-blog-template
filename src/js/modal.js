// Under Construction Modal

const blur = document.getElementById('modal-blur');
const overlay = document.getElementById('modal-bg');
const modal = document.getElementById('modal')

function modalOpen() {
    blur.classList.add('modal-blur--blurry');
    overlay.classList.add('modal-bg--black-tint');
    modal.style.opacity = '1';
    modal.style.animation = 'fadeIn linear 0.3s';
};

function modalClose() {
    blur.classList.remove('modal-blur--blurry');
    overlay.classList.remove('modal-bg--black-tint');
    modal.style.opacity = '0';
    modal.style.animation = 'fadeOut linear 0.3s';
};