import React from 'react';
import { proxyPropTypes } from 'react-cosmos-shared/lib/react';
import { ThemeProvider } from 'glamorous';

const defaults = {
  theme: {},
};

const createGlamorousProxy = options => {
  const { theme } = { ...defaults, ...options };

  const GlamorousProxy = ({ nextProxy, ...rest }) => {
    const { value: NextProxy, next } = nextProxy;

    return (
      <ThemeProvider theme={theme}>
        <NextProxy {...rest} nextProxy={next()} />
      </ThemeProvider>
    );
  };

  GlamorousProxy.propTypes = proxyPropTypes;

  return GlamorousProxy;
};

export default createGlamorousProxy;
