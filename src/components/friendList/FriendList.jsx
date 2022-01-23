import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export default function FriendList({ friends }) {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </FriendsList>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};