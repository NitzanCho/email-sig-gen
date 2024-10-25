function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g);
    const hex = rgbArray.map(x => {
        const hexValue = parseInt(x).toString(16);
        return hexValue.length === 1 ? '0' + hexValue : hexValue;
    }).join('');
    return `#${hex}`;
}

const navbar = document.getElementById('fr-navbar');

if (navbar) {
    const computedStyle = window.getComputedStyle(navbar);
    const navbarBackgroundColor = computedStyle.backgroundColor;
    const navbarBackgroundColorHex = rgbToHex(navbarBackgroundColor);
    console.log('Navbar background color (hex):', navbarBackgroundColorHex);
} else {
    console.log('No element with id "fr-navbar" found.');
}


