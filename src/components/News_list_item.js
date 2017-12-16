import React from 'react';

const NewsListItem = (props) => {
  if (props.newsArticle.url == null || props.newsArticle.author == null ||  props.newsArticle.title == null) {
    return null
  }

  const backGroundImage = props.newsArticle.urlToImage;
  const imageStyle = {
    backgroundImage: `url(${backGroundImage})`
  }

  return (
      <li className="list-item">
        <a className="flex-parent" href={props.newsArticle.url} target="_blank">
          <div className="newsArticle-image--wrapper">
            <div
              style={imageStyle}
              className="newsArticle-image"
            />
          </div>
          <div className="newsArticle-info">
            <p>{props.newsArticle.title}</p>
          </div>
        </a>
      </li>
  )
}

export default NewsListItem;
