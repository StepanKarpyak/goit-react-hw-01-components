import styled from 'styled-components';

export const TableContainer = styled.table`
  table-layout: fixed;
  width: 400px;
  background: #ffffff;
  /* border-collapse: collapse; */
  margin: 40px auto;
  margin-bottom: 0;
  /* box-shadow: 0px 0px 10px darkslategrey; */
`;

export const TrHead = styled.tr`
  background-color: #12dddd;
  color: white;
`;


export const TrBody = styled.tr`
  :nth-of-type(odd) {
    background-color: #ecf3fa;
  }

  :nth-of-type(even) {
    background-color: #fdf5f5
    ;
  }
`;

export const Th = styled.th`
  /* padding: 20px; */
  /* border: 1px solid grey; */
`;

export const Td = styled.td`
  /* padding: 20px; */
  text-align: center;
  /* border: 1px solid grey; */
`;