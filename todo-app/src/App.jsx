import { useEffect, useState } from "react"
import { ListElement } from "./ListElement"
import "./css/App.css"

export function App(){
  const [icon, setIcon] = useState('src/assets/images/icon-sun.svg')
  const [data, setData] = useState([]);

  function handleClick(){
    const text = document.querySelector(".fm-add-to-list").value;
    if (text.trim() !== '') {
      setData([...data, text]);
      document.querySelector(".fm-add-to-list").value = '';
    }
  }

  return(
    <main className="fm-content">
      <section className="fm-title-content">
        <h1 className="fm-app-title">todo</h1>
        <img src={icon} alt="toggle theme icon" className="fm-app-theme-icon" />
      </section>

      <section className="fm-container">
        <div className="fm-circle"></div>
        <input className="fm-add-to-list" type="text" placeholder="Create a new todo.."/>
        <button className="fm-add-btn" onClick={handleClick}>Add</button>
      </section>

      <section className="fm-todo-list">
        {
          data.map((content, index)=>{
            return (
              <ListElement key={index} id={index} content={content} />
            )
          })
        }
      </section>

      <section className="fm-status-bar">
        <ul className="fm-filter-menu">
          <li className="fm-filter-item">all</li>
          <li className="fm-filter-item">active</li>
          <li className="fm-filter-item">completed</li>
        </ul>
      </section>

      <footer className="fm-footer">
        <p>Drag and drop to reorder list</p>
      </footer>
    </main>
  )
}