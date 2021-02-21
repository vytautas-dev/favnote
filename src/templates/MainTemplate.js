import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import AppContext from 'context/context';
import { ADD_ITEM, REMOVE_ITEM } from 'context/actions';
import appReducer, { initialState } from 'context/reducer';

const MainTemplate = ({ children, ...props }) => {
  const [pageType, setPageType] = useState('');
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const { location } = props;
    const [currentPage] = pageTypes.filter((page) => location.pathname.includes(page));
    setPageType(currentPage);
  });

  const addItem = (itemType, itemContent) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
    dispatch({
      type: ADD_ITEM,
      payload: {
        itemType,
        item: {
          id: getId(),
          ...itemContent,
        },
      },
    });
  };

  const deleteItem = (itemType, id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: {
        itemType,
        id,
      },
    });
  };

  return (
    <div>
      <AppContext.Provider value={[state, addItem, deleteItem, pageType]}>
        <GlobalStyle />
        <ThemeProvider theme={theme} pageType={pageType}>
          {children}
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
