# React Mega Scroll

This is a react component to provide full page scrolling.

<img src="https://i.ibb.co/9HF8fKS/Screen-Recording2024-08-17at08-42-16-ezgif-com-optimize.gif"/>


## Install
```sh
npm i react-mega-scroll
```

## Usage
```ts
import MegaScroll from 'react-mega-scroll';

function App() (
  return (
    <MegaScroll>
      <div style={{height: "100%"}}>A</div>
      <div style={{height: "100%"}}>B</div>
      <div style={{height: "100%"}}>C</div>
    </MegaScroll>
  )
)

export default App
```

## State Changes
```ts
import React from 'react';
import MegaScroll from 'react-mega-scroll';

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "60px",
  textAlign: "center",
  height: "100%",
  color: "white",
}

function App() {

  const [active, setActive] = useState(0)

  return (
    <MegaScroll onChange={setActive}>
      <div style={{ ...styles, background: "#111111" }}>react-mega-scroll</div>
      <div style={{ ...styles, background: "#222222" }}>Smooth Scrolling</div>
      <div style={{ ...styles, background: "#333333" }}>Keyboard Support</div>
      <div style={{ ...styles, background: "#222222" }}>State Listeners</div>
      <div style={{ ...styles, background: "#111111" }}>Free Forever</div>
    </MegaScroll>
  );
}

export default App
```

## Props <MegaScroll/>

<table>
  <tr>
    <th>prop</th>
    <th>type</th>
    <th>value</th>
    <th>description</th>
  </tr>
  <tr>
    <td><code>children</code></td>
    <td><a href="https://github.com/NxRoot/react-mega-scroll#children">any</a></td>
    <td></td>
    <td>Elements inside this component</td>
  </tr>
  <tr>
    <td><code>onChange</code></td>
    <td><a href="https://github.com/NxRoot/react-mega-scroll#onChange">function</a></td>
    <td></td>
    <td>Event called when page changes</td>
  </tr>
  <tr>
    <td><code>noFocus</code></td>
    <td><a href="https://github.com/NxRoot/react-mega-scroll#noFocus">boolean</a></td>
    <td>false</td>
    <td>Prevent auto focus at first render</td>
  </tr>
  <tr>
    <td><code>threshold</code></td>
    <td><a href="https://github.com/NxRoot/react-mega-scroll#threshold">number</a></td>
    <td>0.5</td>
    <td>Debounce time between states</td>
  </tr>
</table>

<br/>
