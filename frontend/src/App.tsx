import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';



const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <h1>Welcome to Team MARCT</h1>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
