import PropTypes from 'prop-types';
import { ProfileContainer, DescriptionContainer, ImageAvatar, SocialName, SocialTag, SocialLocation, Menu, Item, SpanLabel, SpanQuantity } from './SocialProfile.styled';

export default function SocialProfile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <ProfileContainer>
            <DescriptionContainer>
                <ImageAvatar
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <SocialName>{username}</SocialName>
                <SocialTag>{tag}</SocialTag>
                <SocialLocation>{location}</SocialLocation>
            </DescriptionContainer>

            <Menu>
                <Item>
                    <SpanLabel>Followers</SpanLabel>
                    <SpanQuantity>{followers}</SpanQuantity>
                </Item>
                <Item>
                    <SpanLabel>Views</SpanLabel>
                    <SpanQuantity>{views}</SpanQuantity>
                </Item>
                <Item>
                    <SpanLabel>Likes</SpanLabel>
                    <SpanQuantity>{likes}</SpanQuantity>
                </Item>
            </Menu>
        </ProfileContainer>
    )
};


SocialProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};
