var button = $('.change-color')[0];
var wrapper = $('<div></div>');


console.log(wrapper[0])
button.onclick = () => {
    wrapper.addClass('blue');
}
