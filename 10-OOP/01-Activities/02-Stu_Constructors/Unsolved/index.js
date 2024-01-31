// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost (authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = () => console.log(`Created by ${this.authorName} on ${this.createdOn}`);
}
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor
const blogPost = new BlogPost('Shakespeare', 'Hamlet', 'To be or not to be', '1600');
// TODO: Call the 'printMetaData()' method on the new object
post.printMetaData();