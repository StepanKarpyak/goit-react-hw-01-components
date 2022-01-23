import styled from 'styled-components';

export const ProfileContainer = styled.div`
margin: auto;
padding-top: 25px;
text-align: center;
background-color: #ffffff;
width: 400px;
`;

export const DescriptionContainer = styled.div`
padding: 20px;
`;

export const ImageAvatar = styled.img`
width: 35%;
border-radius: 100%;
background-color: #c7c711;
padding-top: 5px;
`;

export const SocialName = styled.p`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const SocialTag = styled.p`
    font-size: 16px;
    font-weight: 400; 
    color: gray;
`;

export const SocialLocation = styled.p`
font-size: 16px;
    font-weight: 400; 
    color: gray;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    background-color: #e0dbdb;
    list-style: none;
    padding-left: 0;
    padding-bottom: 20px;
    padding-top: 10px;
    height: 60px;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
`;

export const SpanLabel = styled.span`
    font-weight: 400;
    color: gray;
`;

export const SpanQuantity = styled.span`
    font-weight: 600;

`;