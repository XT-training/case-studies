import { connect } from 'react-redux';
import Table from '../../components/Table/TableComponent';

const mapStateToProps = state => ({
  data: state.table
});

export default connect(mapStateToProps, null)(Table);

