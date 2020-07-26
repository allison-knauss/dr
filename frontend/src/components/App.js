import React from "react";
import { render } from "react-dom";
import { Button } from '@material-ui/core';

const App = () => {
    return (
      <div>
        <Button variant="contained" color="primary">Hi!</Button>
      </div>
    );
};

export default App;

const container = document.getElementById("app");
render(<App />, container);