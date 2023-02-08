const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight - 100;
    const triggerTop = 100;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < triggerBottom && boxBottom > triggerTop) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}