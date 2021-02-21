import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { initialState } from 'context/reducer';

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {initialState.map(({ id, title, content, twitterName, created }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={title}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
