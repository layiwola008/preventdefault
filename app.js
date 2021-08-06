
$(function(){
  $('.js-form').submit(e => {
    e.preventDefault();
    const userTextElement = $(e.currentTarget).find('#user-text');
    $('.js-display-user-text').text(`User Text: ${userTextElement.val()}`);
    userTextElement.val("");
  });
});