(function () {
    var s = document.createElement('script');
    var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
    s.async = true;
    s.onload = function () {
        acsbJS.init({
            language: 'pt',
        });
    };
    h.appendChild(s);
})();