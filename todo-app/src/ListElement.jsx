export function ListElement({content, id}){
  return(
    <article className={`fm-container fm-list-container fm-list-container-${id}`}>
      <div className="fm-todo-check">
        <div className="fm-circle fm-list-circle"></div>
        <p className="fm-todo-item">{content}</p>
      </div>
      <button className="fm-add-btn"><img src="src/assets/images/icon-cross.svg" alt="close icon" className="fm-close-icon" /></button>
    </article>
  )
}