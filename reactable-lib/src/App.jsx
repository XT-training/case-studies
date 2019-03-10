import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import reducer from './containers/reducers';
import Reactable from './containers/Reactable/Reactable';
import saga from './containers/sagas';

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(reducer(), applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(saga);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Reactable {...this.props}/>
      </Provider>
    )
  }
}

export default App;
