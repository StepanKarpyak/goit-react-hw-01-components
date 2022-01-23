import styled from 'styled-components';

export const FriendItem = styled.li`

display: flex;
width: 400px;
margin: 0 auto;
/* justify-content: center; */
align-items: center;
background-color: #ffffff;
height: 100px;
:not(:last-child) {
    margin-bottom: 20px;
    }
`;

export const FriendStatus = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    /* background-color: gray; */
    margin-left: 20px;
    background-color: ${(props) => { return props.children ? `green` : `red` }};
`;

export const FriendImg = styled.img`
    margin-left: 20px;
`;

export const FriendName = styled.p`
    margin-left: 20px;
    font-size: 28px;
    font-weight: 700;

`;