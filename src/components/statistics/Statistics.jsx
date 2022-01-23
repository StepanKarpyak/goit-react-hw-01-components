import PropTypes from 'prop-types';
import { StatisticContainer, StatisticCaption, StatisticMenu, StatisticItem, StatisticLabel, StatisticPercentage } from './Statistics.styled';


export default function Statistics({ title, stats }) {
    return (
        <StatisticContainer>
            {title && <StatisticCaption>{title}</StatisticCaption>}
            <StatisticMenu>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticItem key={id}>
                        <StatisticLabel>{label}</StatisticLabel>
                        <StatisticPercentage>{percentage}%</StatisticPercentage>
                    </StatisticItem>
                ))}
            </StatisticMenu>
        </StatisticContainer>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
    title: PropTypes.string,
};