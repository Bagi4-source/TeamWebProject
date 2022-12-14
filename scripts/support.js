let max_advantage_height = 0;
$('.advantage').each(function() {
    max_advantage_height = Math.max($(this).height(), max_advantage_height);
})

$('.advantage').each(function() {
    $(this).height(max_advantage_height);
})
