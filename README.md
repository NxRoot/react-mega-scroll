# React Mega Scroll

* This is a react component to provide full page scrolling.



## How to Install
```sh
npm i react-mega-scroll
```

## How to Use
```ts
import FullScroll from 'react-mega-scroll';

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
    <FullScroll onChange={setActive}>
      <div style={{ ...styles, background: "#111111" }}>react-mega-scroll</div>
      <div style={{ ...styles, background: "#222222" }}>Smooth Scrolling</div>
      <div style={{ ...styles, background: "#333333" }}>Keyboard Support</div>
      <div style={{ ...styles, background: "#222222" }}>State Listeners</div>
      <div style={{ ...styles, background: "#111111" }}>Free Forever</div>
    </FullScroll>
  );
}
```
