# remove-last-char [![Support this project][donate-now]][paypal-donations]

Removes the last character from a string.

## Installation

```sh
$ npm i --save remove-last-char
```

## Example

```js
// Dependencies
var RemoveLastChar = require("remove-last-char");

console.log(RemoveLastChar("Hello World!"));
// => "Hello World"
```

## Documentation

### `RemoveLastChar(input)`
Removes the last character from a given string.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The input string without the last character.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

 - [`unvowel-last`](https://github.com/IonicaBizau/unvowel-last#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md