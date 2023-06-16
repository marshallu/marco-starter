Marco Starter
===

A starter WordPress theme for Marshall University.

Installation
---------------

### Requirements

`Marco Starter` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository, change its name to something else (like, say, `we-are`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Search for `'marco'` (inside single quotations) to capture the text domain and replace with: `'we-are'`.
2. Search for `marco_` to capture all the functions names and replace with: `we_are_`.
4. Search for <code>&nbsp;Marco_</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;We_Are</code>.
5. Search for `marco-` to capture prefixed handles and replace with: `we-are-`.
6. Search for `MARCO_` (in uppercase) to capture constants and replace with: `WE_ARE_`.

### Setup

To start using all the tools that come with `Marco Starter` you need to install the necessary Node.js and Composer dependencies :

```sh
$ composer install
$ npm install
```

### Available CLI commands

`Marco Starter` comes with CLI commands tailored for WordPress theme development :

- `npm run build` : Using Vite compiles CSS and JavaScript.

### Frameworks

`Marco Starter` uses the following frameworks/themes for development:

- CSS : The default CSS framework is [TailwindCSS](https://tailwindcss.com/).
- Javascript : The default JavaScript framework is [AlpineJS](https://alpinejs.dev/).
- CSS Theme : The theme comes with the [Marsha Tailwind](https://github.com/marshallu/marsha-tailwind) CSS theme as a npm dependency.
