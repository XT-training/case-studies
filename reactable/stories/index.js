import React from 'react';
import { storiesOf } from '@storybook/react';
import Reactable from '../src/App';

storiesOf('Reactable', module)
  .add('with default view', () => (
    <Reactable
      data={[{name: 'naman', oracleId: '124194'},{name: 'Gaurav', oracleId: '125223'}, {name: 'Avinash', oracleId: '137000'}, {name: 'Sunil', oracleId: '131122'}, {name: 'Shanaullah', oracleId: '102225'}]}
      columns={[{key: 'name', value: 'Team Member Name'}, {key: 'oracleId', value: 'Oracle ID'}]}
      />
  ))
  .add('with freezed columns and rows', () => (
    <div style={{width: '400px', height: '200px'}}>
      <Reactable
      data={[
        {
          column: 'row 1',
          column1: 'row 1 col 1',
          column2: 'row 1 col 2',
          column3: 'row 1 col 3',
          column4: 'row 1 col 4',
          column5: 'row 1 col 5',
          column6: 'row 1 col 6',
          column7: 'row 1 col 7',
          column8: 'row 1 col 8',
          column9: 'row 1 col 9'
        },
        {
          column: 'row 2',
          column1: 'row 2 col 1',
          column2: 'row 2 col 2',
          column3: 'row 2 col 3',
          column4: 'row 2 col 4',
          column5: 'row 2 col 5',
          column6: 'row 2 col 6',
          column7: 'row 2 col 7',
          column8: 'row 2 col 8',
          column9: 'row 2 col 9'
        },
        {
          column: 'row 3',
          column1: 'row 3 col 1',
          column2: 'row 3 col 2',
          column3: 'row 3 col 3',
          column4: 'row 3 col 4',
          column5: 'row 3 col 5',
          column6: 'row 3 col 6',
          column7: 'row 3 col 7',
          column8: 'row 3 col 8',
          column9: 'row 3 col 9'
        },
        {
          column: 'row 4',
          column1: 'row 4 col 1',
          column2: 'row 4 col 2',
          column3: 'row 4 col 3',
          column4: 'row 4 col 4',
          column5: 'row 4 col 5',
          column6: 'row 4 col 6',
          column7: 'row 4 col 7',
          column8: 'row 4 col 8',
          column9: 'row 4 col 9'
        },
        {
          column: 'row 5',
          column1: 'row 5 col 1',
          column2: 'row 5 col 2',
          column3: 'row 5 col 3',
          column4: 'row 5 col 4',
          column5: 'row 5 col 5',
          column6: 'row 5 col 6',
          column7: 'row 5 col 7',
          column8: 'row 5 col 8',
          column9: 'row 5 col 9'
        }
      ]}
      columns={[
        {key: 'column', value: ''},
        {key: 'column1', value: 'Column 1'},
        {key: 'column2', value: 'Column 2'},
        {key: 'column3', value: 'Column 3'},
        {key: 'column4', value: 'Column 4'},
        {key: 'column5', value: 'Column 5'},
        {key: 'column6', value: 'Column 6'},
        {key: 'column7', value: 'Column 7'},
        {key: 'column8', value: 'Column 8'},
        {key: 'column9', value: 'Column 9'}
      ]}
      cellDensity={1}
      />
    </div>

  ));
