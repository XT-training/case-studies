import React from 'react';
import { storiesOf } from '@storybook/react';
import Reactable from '../src/App';

storiesOf('Reactable', module)
  .add('default view', () => (
    <Reactable data={[{name: 'naman', oracleId: '124194'},{name: 'Gaurav', oracleId: '125223'}, {name: 'Avinash', oracleId: '137000'}, {name: 'Sunil', oracleId: '131122'}, {name: 'Shanaullah', oracleId: '102225'}]}/>
  ));
