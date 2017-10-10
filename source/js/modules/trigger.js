export default () => {
  $('.prediction__button').on('click', function (e) {
    e.preventDefault();
    // $('.prediction').addClass('prediction_disable');
    // $('.questions').addClass('questions_active');

    $('.prediction').fadeOut();
    $('.questions').fadeIn();
  })
};