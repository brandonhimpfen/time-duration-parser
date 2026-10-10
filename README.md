# time-duration-parser

[![Support Open Work](https://img.shields.io/badge/Support-Open%20Work-0A0A0A?style=flat&logo=github)](https://github.com/brandonhimpfen/support) 
[![GitHub Sponsor](https://srv-cdn.himpfen.io/badges/github/github-flat.svg)](https://github.com/sponsors/brandonhimpfen) 
[![Buy Me a Coffee](https://srv-cdn.himpfen.io/badges/buymeacoffee/buymeacoffee-flat.svg)](https://buymeacoffee.com/brandonhimpfen) 
[![Ko-Fi](https://srv-cdn.himpfen.io/badges/kofi/kofi-flat.svg)](https://ko-fi.com/brandonhimpfen) 
[![PayPal](https://srv-cdn.himpfen.io/badges/paypal/paypal-flat.svg)](https://paypal.me/brandonhimpfen)

Parse human-readable time durations like `5m`, `2h`, and `1d` into milliseconds.

## Install

```bash
npm install time-duration-parser
```

## Usage

```js
import parseDuration, { isDuration, units } from 'time-duration-parser';

parseDuration('5m');
// 300000

parseDuration('2h');
// 7200000

parseDuration('1d');
// 86400000

parseDuration('1.5h');
// 5400000

isDuration('10min');
// true

units.hour;
// 3600000
```

## Supported units

- `ms`, `millisecond`, `milliseconds`
- `s`, `sec`, `second`, `seconds`
- `m`, `min`, `minute`, `minutes`
- `h`, `hr`, `hour`, `hours`
- `d`, `day`, `days`
- `w`, `week`, `weeks`

## API

### `parseDuration(input)`

Parses a duration string and returns the value in milliseconds.

It also accepts a finite number and returns it unchanged.

### `isDuration(input)`

Returns `true` if the input can be parsed, otherwise `false`.

### `units`

An exported frozen object containing supported units and their millisecond multipliers.

## Development

```bash
npm test
```

## License

MIT
