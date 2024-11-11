// detect touch 
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " touch";
}
$('.phone-buttons .btn').on('touchstart touchend', function(e) {
    $(this).toggleClass('over');         
});
