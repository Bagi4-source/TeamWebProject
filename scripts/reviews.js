const reviews = [
    {
        "img": "images/review_logo.png",
        "href": "",
        "title": "1 Команда Drupal Coder вызвала только положительные впечатления!",
        "description": "Нуреев Александр, менеджер проекта Winamp Russian Community"
    },
    {
        "img": "images/review_logo.png",
        "href": "",
        "title": "2 Команда Drupal Coder вызвала только положительные впечатления!",
        "description": "Нуреев Александр, менеджер проекта Winamp Russian Community"
    },
    {
        "img": "images/review_logo.png",
        "href": "",
        "title": "3 Команда Drupal Coder вызвала только положительные впечатления!",
        "description": "Нуреев Александр, менеджер проекта Winamp Russian Community"
    },
    {
        "img": "images/review_logo.png",
        "href": "",
        "title": "4 Команда Drupal Coder вызвала только положительные впечатления!",
        "description": "Нуреев Александр, менеджер проекта Winamp Russian Community"
    }
]

const review = $(".review-content");
const image = $(".review-logo").children("img");
const title_link = $(".review-title > a");
const description = $(".review-description");
const page_number = $(".reviews-PgNumber");
const page_count = $(".reviews-count");
const review_buttons = $(".review-btn");

var current_page = 0;

function nextReview(){
    setReview(current_page + 1);
}

function prevReview(){
    setReview(current_page - 1);
}

function setReview(i){
    review_buttons.each(function(){
        $(this).prop('disabled', true);
    });
    
    review.fadeOut(300, 
        function(){
            i += i < 0? reviews.length:0;
            i =  i % reviews.length;
            current_page = i;
            setCount(i + 1);
            let review = reviews[i];

            image.attr("src", review.img);
            title_link.text(review.title).attr("href", review.href);
            description.text(review.description);

            review_buttons.each(function(){
                $(this).prop('disabled', false);
            });
        }
    ).fadeIn(300);

}

function setCount(count){
    page_number.text((count < 10 ? "0":"") + count);
}

page_count.text((reviews.length < 10 ? "0":"") + reviews.length.toString());
