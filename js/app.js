$(document).ready(function() {
    // Handle project item clicks
    $('.project-item').on('click', function() {
        var image = $(this).data('image');
        $('#projectImage').attr('src', image);
        $('.project-item').removeClass('active');
        $(this).addClass('active');
    });

    // Change the main image based on the clicked info box
    window.changeImage = function(imageSrc, element) {
        $('#mainImage').attr('src', imageSrc);
        $('.info-box').removeClass('active');
        $(element).addClass('active');
    };

    // Initialize the carousel
    $('#servicesCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    });

    // Update indicators on slide change
    $('#servicesCarousel').on('slide.bs.carousel', function(e) {
        var nextIndex = $(e.relatedTarget).index();
        $('.custom-indicators li').removeClass('active');
        $('.custom-indicators li').eq(nextIndex).addClass('active');
    });

    // Update carousel indicators on click
    $('.custom-indicators li').on('click', function() {
        var index = $(this).data('slide-to');
        $('#servicesCarousel').carousel(index);
    });
});