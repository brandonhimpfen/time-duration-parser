# time-duration-parser

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
