import { useEffect, useState } from 'react'
import './App.css'
import News from './News'

function App() {


  const [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-05-9&apiKey=f2389c70d564446c977302f66b8ac9a8`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[category])

  return (
    <>
    <div className="App">
      <header className='header'>
        <h1>Parso Tak</h1>
        <input type="text" onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }else{
            setCategory("india")
          }
          
        }} placeholder='Search News' />
      </header>
    <section className='news-aricles'>

      {
        articles.length!==0 ?
        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        })
        :
        <h3>No News Found For Searched Text</h3>
      }
    </section>  
    </div>
    </>
  )
}

export default App
