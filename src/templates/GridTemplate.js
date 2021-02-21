import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AppContext from 'context/context';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 40%;
  border-radius: 50px;
  z-index: 10000;
`;

const GridTemplate = ({ children }) => {
  const pageType = useContext(AppContext);

  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);

  const handleNewItemBarToggle = () => {
    setIsNewItemBarVisible((prevState) => !prevState);
  };

  return (
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big> {pageType} </StyledHeading>
          <StyledParagraph> 6 notes </StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon icon={plusIcon} activeColor={pageType} onClick={handleNewItemBarToggle} />
        <NewItemBar
          handleClose={() => {
            setIsNewItemBarVisible(false);
          }}
          isVisible={isNewItemBarVisible}
        />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  // pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  // pageType: 'notes'
};

export default GridTemplate;
