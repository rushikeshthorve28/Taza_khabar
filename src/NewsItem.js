import React from 'react';

const NewsItem =(props)=> {
  
    let {title,description,imgUrl,newsUrl,author,date,source} =props;
    return (
     
      <div>
        
          <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://image.cnbcfm.com/api/v1/image/107311698-1696454677397-gettyimages-1706195531-1356422-me-1004-kaiser-strike-022-ik.jpeg?v=1696852801&w=1920&h=1080":imgUrl}  height="170px"className="card-img-top" alt="..."/>

  <div className="card-body">
  
    <h5 className="card-title">{title && title.slice(0,38)}....</h5>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{ description && description.slice(0,70)}....</p>
    <p class="card-text"><small class="text-muted">By    {author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
