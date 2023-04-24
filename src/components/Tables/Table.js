import { StyledTable } from './TableComponents';

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <caption>Matérias</caption>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {item.map((name, index) => (
            <td key={index}>{name}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {/* <tfoot>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </tfoot> */}
  </StyledTable>
);

const Table = ({ data, titles }) => <TableMarkup titles={titles} data={data} />;

export default Table;
