import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from '../NewsItem';
import Spin from './Spinner';


const News =(props)=> {
 
  const[articles,setArticles]=useState([])
  const[spin,setspin]=useState(true)
  const[page,setpage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  document.title=`${props.category}-NewsApp`;
  


  useEffect(()=>{
    const asyncFn =async()=>{
     props.setprogress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}pageSize=${props.pageSize}`;
    setspin(true)
 
    let data =await fetch(url);
    props.setprogress(30);
    let parsedData =await data.json();
    props.setprogress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setspin(false);
    props.setprogress(200);
    };
   
    asyncFn();
   
  },[])


  
 const handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
    setspin(true)

    let data =await fetch(url);

    let parsedData =await data.json();
   
     setArticles(parsedData.articles)
     setTotalResults(parsedData.totalResults)
     setspin(false)
   
  }

 const handleNextClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setspin(true)
  
    let data =await fetch(url);

    let parsedData =await data.json();
   
      
     setpage(page+1);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setspin(false)
    
  }

 
  const fetchMoreData =async  () => {
   setpage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    let data =await fetch(url);

    let parsedData =await data.json();

    setArticles(articles.concat(parsedData.articles));
   
    setTotalResults(parsedData.totalResults);
  
  
  };
    return (
      <>
      <div className='container '> 
      <h1 className='text-center' style={{margin:'105px -10px'}}>New APP-Today's HeadLine On {props.category}</h1>
{spin &&<Spin/>}
<InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length!==totalResults}
    loader={<Spin/>}
   
  >
    <div className='container '  >
       <div className='row'>
       { articles.map((element)=>{
          return <div className='col-md-4 my-3'>
          <NewsItem key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
       })}
          </div>
        </div>
        </InfiniteScroll>
       
      </div>
      </>
    )
      
      }
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'sports'
}

News.propTypes ={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string,
}


export default News
