
# react-elastic-carousel

> A flexible and responsive carousel component for react 

[![NPM](https://img.shields.io/npm/v/react-elastic-carousel.svg)](https://www.npmjs.com/package/react-elastic-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## [Examples & Docs](https://sag1v.github.io/react-elastic-carousel/)

## Install

```bash
npm install --save react-elastic-carousel
```

## Usage

```jsx
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class App extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}
```

## Playground
[![Edit react-elastic-carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/21o46mkwnr)

## Development

```console 
git clone https://github.com/sag1v/react-elastic-carousel.git
cd react-elastic-carousel
npm install
npm run docz:dev
```

The application is running at http://localhost:8888

## License

MIT © [sag1v](https://github.com/sag1v)
