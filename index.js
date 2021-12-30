function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

window.onload = function () {

    const increment = document.getElementById('increment');
    const decrement = document.getElementById('decrement');
    const quantity = document.getElementById('quantity');

    increment.addEventListener('click', function () {
        quantity.textContent = parseInt(quantity.textContent) === 10 ? 10 : parseInt(quantity.textContent) + 1;
    })

    decrement.addEventListener('click', function () {
        quantity.textContent = parseInt(quantity.textContent) === 1 ? 1 : parseInt(quantity.textContent) - 1;
    })

    const selectedVariant = document.getElementById('selected-variant');
    const overlay = document.getElementById('overlay');

    selectedVariant.addEventListener('click', function () {
        if (isHidden(overlay)) {
            overlay.classList.add("show");
        } else {
            overlay.classList.remove("show");
        }
    })

    overlay.addEventListener('click', function (ele) {
        const clicked = ele.target.className === 'variant' ? ele.target : ele.target.parentElement
        selectedVariant.innerHTML = clicked.innerHTML
        overlay.classList.remove("show");
    })
}