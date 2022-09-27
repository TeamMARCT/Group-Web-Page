import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// react bootstrap
import { Container } from 'react-bootstrap';



const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        {/* Wrapping the main body/tag in a container to push content to the middle */}
        <Container>
          <h1>Welcome to Team MARCT</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
