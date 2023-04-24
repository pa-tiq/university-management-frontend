import Table from '../components/Tables/Table';
import Container from '../components/UI/Container';
import { useState } from 'react';

let data = require('../constants/materias_prerequisitos_corequisitos.json');

const Discover = () => {
  return (
    <Container>
      <Table
        titles={[...data.metadata.map((metadata) => metadata.colName)]}
        data={data.resultset}
      />
    </Container>
  );
};

export default Discover;
