import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import AppContext from 'context/context';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  cursor: pointer;
`;
const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 999;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ id, cardType, title, created, content, twitterName, articleUrl }) => {
  const [redirect, setRedirect] = useState(false);

  const handleCardClick = () => setRedirect(true);

  const deleteItem = useContext(AppContext);

  if (redirect) {
    return <Redirect to={`${cardType}/${id}`} />;
  }

  return (
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading> {title} </StyledHeading>
        <DateInfo> {created} </DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar
            src={`https://eu.ui-avatars.com/api/?name=${twitterName}`}
            activeColor={cardType}
          />
        )}
        {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph> {content} </Paragraph>
        <Button onClick={() => deleteItem(cardType, id)} secondary>
          {' '}
          Remove{' '}
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

export default Card;
