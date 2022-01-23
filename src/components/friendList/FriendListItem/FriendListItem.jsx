import PropTypes from 'prop-types';

import { FriendItem, FriendStatus, FriendImg, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <FriendItem>
            <FriendStatus>{isOnline}</FriendStatus>
            <FriendImg src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};

