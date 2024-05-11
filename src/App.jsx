import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('india');

  // Set default date to yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [selectedData, setSelectedData] = useState(yesterday);

  useEffect(() => {
    const formattedDate = `${selectedData.getFullYear()}-${(selectedData.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${selectedData.getDate().toString().padStart(2, '0')}`;

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${formattedDate}&apiKey=f2389c70d564446c977302f66b8ac9a8`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [category, selectedData]);

  return (
    <>
      <div className="App">
        <header className='header'>
          <h1>Parso Tak</h1>
          <input type="text" onChange={(event) => {
            if (event.target.value !== '') {
              setCategory(event.target.value);
            } else {
              setCategory('india');
            }
          }} placeholder='Search News' />

          <section className="calendar">
            <h2>Select Date:</h2>
            <input
              type="date"
              value={selectedData.toISOString().split('T')[0]}
              onChange={(event) => setSelectedData(new Date(event.target.value))}
            />
          </section>
        </header>
        <section className='news-aricles'>

          {
            articles.length !== 0 ?
              articles.map((article, index) => {
                return (
                  <News key={index} article={article} />
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

export default App;
