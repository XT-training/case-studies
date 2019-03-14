import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import Reactable from './components/Reactable/Reactable';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.theme = {
      color: 'red'
    };
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Reactable {...this.props}/>
      </ThemeProvider>
    )
  }
}

export default App;
