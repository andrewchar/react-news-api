import React from 'react';
import NewsListItem from './News_list_item.js';

const NewsList = (props) => {
  if (!props.news) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="news-list-container">
      <ul className="list-group">
        {props.news.articles.map((article, index) => {
          return <NewsListItem key={index} newsArticle={article}/>
        })}
    </ul>
    </div>
  )
}

export default NewsList;
