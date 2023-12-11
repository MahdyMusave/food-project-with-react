import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import {ThemeProvider} from "./context/themecontext";
import App from "./app";




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ThemeContext.Provider value={{ color: "blue" }}>
//     <App />
//   </ThemeContext.Provider>
// );
root.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);
