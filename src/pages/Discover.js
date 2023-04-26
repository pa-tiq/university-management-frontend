import Table from '../components/Tables/Table';
import { TableContainer } from '../components/UI/Container';

let data = require('../constants/materias_prerequisitos_corequisitos.json');

const Discover = () => {
  return (
    <TableContainer>
      <Table
        titles={[...data.metadata.map((metadata) => metadata.colName)]}
        data={data.resultset}
      />
    </TableContainer>
  );
};

export default Discover;
