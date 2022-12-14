function draw_advantages(){
    let max_advantage_height = 0;
    $('.advantage').each(function() {
        $(this).css( "height", "");
        max_advantage_height = Math.max($(this).height(), max_advantage_height);
    })

    $('.advantage').each(function() {
        $(this).height(max_advantage_height);
    })
}
draw_advantages();
$( window ).resize(function() {
    draw_advantages();
});