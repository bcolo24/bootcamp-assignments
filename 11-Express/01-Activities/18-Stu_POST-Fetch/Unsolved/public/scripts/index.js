const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// TODO: Add a comment explaining the functionality of this helper function
// sends a request with the input review object and handles the result data
const postReview = (review) =>
  // TODO: Add a comment explaining what sort of data we need to provide when invoking the fetch function for a POST request
  // fetch accepts a url and an options object where you cab declare the http method, the request body, and any headers.
  fetch('/api/reviews', { //path
    method: 'POST', // method
    headers: {
      'Content-Type': 'application/json', // Content-type header (content header refers to the request being made. should be type json and stringifying bc want in type json format)
    },
    // TODO: Add a comment describing why one would need to convert the JSON object to a string in this instance
    body: JSON.stringify(review),
  })
  // request handler
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    // TODO: Add a comment describing the functionality of the catch statement
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
