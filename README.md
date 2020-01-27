Better Mortgage Chat
====================

A branded prototype chat client per the given [spec][2].


## Usage

Run the full express server:

```
npm install && npm run server
```

Use the following commands to run it through a parcel development server. Note
that images won't be rendered as they're served from a `/images` endpoint in
express server (see next command).

``` bash
npm install && npm start
```

> Any recent version of `node` and `npm` should work, I'm on `node@12.13.0`
> and `npm@6.13.6` via `nvm`.


## Architecture

Here's the architecture + some rationale for each piece of it.

- Bundler(ParcelJS): Zero config makes this repo easier for others to pick up.
- Styles(Inline): Simple and we didn't need much for such small app.
- Animations(ReactSpring): Clean and simple animations without much overhead.
- Structure: Fairly flat with just enough structure to maintain readability.

If we were to scale this project I might consider another more robust bundler
like `webpack`, though I have to say I'm really liking `parcel` so far for its
simplicity and ease of use. It would also be worth considering something like
NextJS or Gatsby that abstracts away more of the SSR bits.

Currently, the development server supports hot reloading but still wipes react
state as we're not using `react-hot-loader`. That would be an easy-ish
integration though it may be better to just wait for (or jump to) the next
version of `parcel` which includes [fast refresh][1].

I would on the other hand, almost definitely utilize something like `emotion`
for CSS in order to address inline specificity issues and DOM bloat. I'm
somewhat on the fence about CSS in JS but I'll definitely admit that it's
growing on me, mostly for scoping reasons.

Lastly, I'd utilize `jest` both for integration and unit tests. I wanted to
write some basic tests based on the spec, but ran out of time (quite busy
between work, family, and this job search). I may come back to this just for
kicks/practice once I can find the time.


[1]: https://github.com/gaearon/react-hot-loader#deprecation-note
[2]: ./SPEC.md