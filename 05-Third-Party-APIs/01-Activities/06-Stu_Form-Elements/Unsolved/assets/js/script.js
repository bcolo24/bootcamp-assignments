var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function submitForm(event){
    event.preventDefault();
    console.log(event.target);
    $('input[name=shopping-input]'.val());

    $(event.target).get(0).reset();
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', submitForm);
