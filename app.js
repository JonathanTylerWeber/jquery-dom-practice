$('article img').addClass('image-center');

$('article p:last').remove();

let pxSize = Math.floor(Math.random() * 101);

$('#title').css('font-size', pxSize);

$('ol').append('<li>whatever you want</li>');

$('ol').append('<br><p>terribly sorry this list exists</p>');

$('#red, #green, #blue').on('input', function () {
    let $red = $('#red').val();
    let $green = $('#green').val();
    let $blue = $('#blue').val();

    $('body').css('background-color', `rgb(${$red}, ${$green}, ${$blue})`);
});

$('img').on('click', function () {
    $(this).remove()
})