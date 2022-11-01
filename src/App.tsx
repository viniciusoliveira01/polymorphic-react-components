import React from "react";
import { Text } from "./components";

const Emphasis = ({ children }: { children: string }) => {
  return <em style={{ color: "royalblue" }}>{children}</em>;
};

function App() {
  return (
    <div className="App">
      <Text as="h1">Testing Title</Text>
      <Text as="h2">Testing my subtitle</Text>
      <Text>My text</Text>
      <Text as="a" href="www.google.com">
        My ref
      </Text>

      <Text as={Emphasis}>Passing a custom component :D</Text>
    </div>
  );
}

export default App;
