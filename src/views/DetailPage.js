import React, { useContext } from 'react';
import DetailTemplate from 'templates/DetailTemplate';
import AppContext from 'context/context';

const dummyArticle = {
  id: 1,
  title: 'Wake me up when Vue ends',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  twitterName: 'hello+roman',
  articleUrl: 'https://youtube.com/helloroman',
  created: '1 day',
};

const DetailPage = () => {
  const pageType = useContext(AppContext);

  return (
    <DetailTemplate
      title={dummyArticle.title}
      created={dummyArticle.created}
      content={dummyArticle.content}
      articleUrl={dummyArticle.articleUrl}
      twitterName={dummyArticle.twitterName}
      pageType={pageType}
    />
  );
};

export default DetailPage;
