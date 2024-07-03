function openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
var closeModalBtn = document.getElementById('closeModalBtn');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}