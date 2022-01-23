import styled from 'styled-components';

export const StatisticContainer = styled.section`
    display: block;
    margin: 40px auto;
    text-align: center;
    width: 400px;
    background-color: #ffffff;
    margin-bottom: 0px;
`;

export const StatisticCaption = styled.h2`
    text-transform: uppercase;
    color: #646464;
    background-color: #ffffff;
    font-size: 16px;
    padding: 20px 0;
    margin-bottom: 0;
    margin-top: 0;
`;

export const StatisticMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StatisticItem = styled.li`
    display: flex;
    flex-direction: column;
    background-color: ${function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }};
    width: 100%;
    height: 100%;
`;

export const StatisticLabel = styled.span`
    font-size: 16px;
    padding-top: 10px;
`;

export const StatisticPercentage = styled.span`
    font-size: 22px;
    padding-bottom: 10px;
`;