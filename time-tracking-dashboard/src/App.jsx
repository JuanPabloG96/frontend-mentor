import { useEffect, useState } from 'react'
import { Timetracker } from './Timetracker'
import './css/App.css'

export function App() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState('weekly');
  const DATA_ROUTE = "json/data.json";

  useEffect(() => {
    fetch(DATA_ROUTE)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  function handleClick(event){
    let text = event.target.textContent.toLowerCase();
    setTime(text);
  }

  return (
    <main className="app">
      <article className="fm-user-profile">
        <header className="fm-user-profile-info">
          <img src="images/image-jeremy.png" alt="jeremy robinson avatar" className="fm-user-profile-avatar" />
          <div className="fm-user-profile-content">
            <p>Report for</p>
            <h2 className="fm-user-profile-username">Jeremy Robson</h2>
          </div>
        </header>
        <ul className='fm-profile-menu'>
          <li onClick={handleClick} className={`fm-user-period ${time === 'daily' ? 'is-selected' : ''}`} >Daily</li>
          <li onClick={handleClick} className={`fm-user-period ${time === 'weekly' ? 'is-selected' : ''}`} >Weekly</li>
          <li onClick={handleClick} className={`fm-user-period ${time === 'monthly' ? 'is-selected' : ''}`} >Monthly</li>
        </ul>
      </article>
      <article className="fm-time-trackers">
      {
        data?.map(data =>{
          return(
            <Timetracker key={data.id} id={data.id} title={data.title} time={time} frames={data.timeframes}/>
          )
        })
      }
      </article>
    </main>
  )
}