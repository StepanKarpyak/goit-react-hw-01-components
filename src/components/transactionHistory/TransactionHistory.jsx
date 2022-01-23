import PropTypes from 'prop-types';
import { TableContainer, TrHead, TrBody, Th, Td } from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
    return (
        <TableContainer>
            <thead>
                <TrHead>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </TrHead>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TrBody key={id}>
                        <Td>{type}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                    </TrBody>
                ))}
            </tbody>
        </TableContainer>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};