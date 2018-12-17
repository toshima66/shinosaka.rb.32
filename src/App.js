import React, { Component, Suspense } from 'react';
import Counter from './Counter'
import AsyncText from './AsyncText'

class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncText text="Hello!" ms={3000} />
          <AsyncText text="Hello! 2" ms={6000} />
        </Suspense>
      </>
    );
  }
}

export default App;
