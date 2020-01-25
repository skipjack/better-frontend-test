Better Mortgage Chat Client
===========================

...


## Usage

...


## Architecture

Here's the architecture + some rationale for each piece of it.

- Bundler(ParcelJS): Zero config makes this repo easier for others to pick up.
- Styles(Inline): Simple and we didn't need much for such small app.
- Animations(ReactSpring): Clean and simple animations without much overhead.
- Structure: Fairly flat with just enough structure to maintain readability.

If we were to scale this project I might consider another more robust bundler
like `webpack` though I have to say I'm really liking `parcel` so far. I would
on the other hand, almost definitely utilize something like `emotion` for CSS
in order to address inline specificity issues and DOM bloat. I'm somewhat on
the fence about CSS in JS but I'll definitely admit that it's growing on me,
mostly for scoping reasons.