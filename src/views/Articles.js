import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { initialState } from 'context/reducer';

const Articles = () => (
  <GridTemplate pageType="articles">
    {initialState.articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        cardType="articles"
        id={id}
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={title}
      />
    ))}
  </GridTemplate>
);

export default Articles;
