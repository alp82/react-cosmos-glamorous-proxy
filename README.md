# react-cosmos-glamorous-proxy
A simple proxy for [react-cosmos](https://github.com/react-cosmos/react-cosmos) to load [glamorous](https://github.com/paypal/glamorous) themes.

It's basically wrapping your components with a [`ThemeProvider`](https://glamorous.rocks/advanced#theming).

## Getting started
Be sure to have all needed peer dependencies installed.

Import `glamorous-proxy` and create a new proxy instance with your theme:
```js
// config/cosmos/glamorous-proxy.js
import myTheme from 'theme/myTheme';

const GlamorousProxy = createGlamorousProxy({
  theme: myTheme,
});

export default GlamorousProxy;
```

Use this instance in your proxy config:
```js
// cosmos.proxies.js
import glamorousProxy from 'config/cosmos/glamorous-proxy';

export default [glamorousProxy];
```
