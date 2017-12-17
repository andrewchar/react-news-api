import React from 'react';

const NewsListItem = (props) => {
  let backGroundImage = props.newsArticle.urlToImage;
  if (backGroundImage === null) {
    backGroundImage = 'http://via.placeholder.com/200x200/42f7ee/000000?text=Image+Unavailable';
  }
  const imageStyle = {
    backgroundImage: `url(${backGroundImage})`
  }

  if (props.newsArticle.url == null ||  props.newsArticle.title == null) {
    return null
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
