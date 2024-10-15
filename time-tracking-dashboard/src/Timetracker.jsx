import { useState, useEffect } from 'react';
export function Timetracker({id, title, time, frames}){
  const [period, setPeriod] = useState(null);
  
  useEffect(()=>{
    time === "daily" ? setPeriod(frames.daily): 
    time === "weekly" ? setPeriod(frames.weekly):
    setPeriod(frames.monthly);
  },[time])

  return(
    <article className={`fm-time-tracker fm-tracker-${id}`}>
      <div className="fm-time-tracker-bg"></div>
      <section className="fm-time-tracker-content">
        <div className="fm-time-tracker-container">
          <h3 className="fm-time-tracker-title">{title}</h3>
          <button className="fm-time-tracker-options">
            <img src="images/icon-ellipsis.svg" alt="ellipsis menu option" />
          </button>
        </div>
        <div className="fm-time-tracker-container fm-time-tracker-container-p">
          <span className="fm-time-tracker-current">{period?.current}hrs</span>
          <p className="fm-time-tracker-prev">
            Last {time === "daily" ? 'day': time === "weekly" ? 'week' : 'month'} - {period?.previous} {period?.previous  > 1 ? "hrs" : "hr"}
          </p>
        </div>
      </section>
    </article>
  )
}