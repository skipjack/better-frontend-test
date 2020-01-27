# Better Mortgage Frontend Test

This is a simple implementation of a chat user interface.

Please implement the spec (design and product) using these instructions.


## Resources

* [Design Spec](./client/assets/design-spec-main.png) - use this as the design reference
* [Roboto font](https://fonts.google.com/specimen/Roboto)
* [Material Icons](http://google.github.io/material-design-icons/)
* [Better logo](./client/assets/better-icon.svg)


## Technical Requirements

* The page needs to render server side using Node.js Express with the HTML
  markup containg the initial state of the chat ([data.json](./server/data.json)) 
* User interface needs to support adding new chat messages
* Provide a server side endpoint that on GET returns the data.json and on POST
  accepts a single new post (no need to persist the post, enough to just
  acknowledge receipt of it)
* When adding a new message, the new message needs to be displayed on the
  screen and also sent to the server's API endpoint described in previous step
* There is no need for persistence (database or otherwise)
* Choose any frameworks (or no frameworks)
* Supported browsers: Chrome 65 or later


## Spec

Here is a rough list of features in decreasing order of how important we think
they are to implement:

* [x] Create a single-user timeline of posts that conforms to the design spec.
* [x] The timeline must support new posts by the current user.
* [x] Mouseover (tap on mobile) on a post should transition the post into the alternative view ([Backside](./client/assets/design-spec-click.png)) - use 3D transition
* [x] The interface should be responsive; it should scale with the viewport size.
* [x] Use your experience to implement validation logic
* [x] Every post needs to have date and time as well as user's avatar
* [x] Certain UI aspects are left unspecified - please use your creativity for implementing interactions, animations etc.
* [x] Mobile version of the UI is purposely not specified - it should be done based on your ideas


## How to submit your work

* Add instructions how to run the project
* Explain the architectural decisions you made
* Send a (g)zip of your completed work without artifacts (i.e. node_modules)
  through Greenhouse

Please contact us if you have any questions.