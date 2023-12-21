$(document).ready(function () {
  $('.portfolio-btns-items').on('click', function () {
    var category = $(this).text().trim().toLowerCase();

    $('.portfolio-about-item').hide();

    $('.portfolio-btns-items').removeClass('portfolio-button-active');

    if (category === 'all') {
      $('.portfolio-about-item').show();
      $(this).addClass('portfolio-button-active');
    } else {
      $('.portfolio-about-item')
        .filter(function () {
          return $(this).find('.portfolio-about-text').text().trim().toLowerCase() === category;
        })
        .show();
      $(this).addClass('portfolio-button-active');
    }
  });

  $('.portfolio-about-item').show();
  $('.portfolio-btns-items:contains("All")').addClass('portfolio-button-active');
});
