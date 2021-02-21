import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { initialState } from 'context/reducer';

const Notes = () => (
  <GridTemplate pageType="notes">
    {initialState.notes.map(({ title, content, created, id }) => (
      <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

export default Notes;
