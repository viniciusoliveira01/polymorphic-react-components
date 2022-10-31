import React from "react";
import { Text } from "./components";

function App() {
  return (
    <div className="App">
      <Text as="h1">Testing Title</Text>
      <Text as="h2">Testing my subtitle</Text>
      <Text>My text</Text>
      <Text as="a" href="www.google.com">
        My ref
      </Text>
    </div>
  );
}

export default App;
