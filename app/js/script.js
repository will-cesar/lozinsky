function clickBtnMobile() {
    const btn = document.getElementsByClassName('button-mobile')[0];

    if (btn.classList.contains('button-mobile--active')) {
        btn.classList.remove('button-mobile--active');
    }
    else {
        btn.classList.add('button-mobile--active');
    }

    openMenuMobile();
}

function openMenuMobile() {
    const menu = document.getElementsByClassName('menu')[0];

    if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
    }
    else {
        menu.classList.add('menu--active');
    }
}