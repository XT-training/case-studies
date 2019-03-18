import React from "react";
import { ThemeProvider } from "emotion-theming";

import Reactable from "./components/Reactable/Reactable";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.theme = props.theme || {
      color: "red"
    };
  }

  render() {
    const { theme, ...propsWithoutTheme } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
        <Reactable {...propsWithoutTheme} currentTheme={theme} />
      </ThemeProvider>
    );
  }
}

export default App;
