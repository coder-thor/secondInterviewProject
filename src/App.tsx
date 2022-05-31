// deps
import style from "styled-components";

// router
import RouterConf from "./router";

const AppStyle = style.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`

function App() {
  return (
    <AppStyle>
      <RouterConf />
    </AppStyle>
  );
}

export default App;
