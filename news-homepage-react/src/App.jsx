import './css/App.css'

function toggleMenu(){
  
}

export function App(){
  return(
    <>
      <header className="header">
        <img src="images/logo.svg" alt="news homepage logo" width="40px"/>
        <img src="images/icon-menu.svg" alt="menu icon" width="40px"/>
        <nav className="nav">
          <img src="images/icon-menu-close.svg" alt="close menu icon" width="30px" onClick={toggleMenu}/>
          <ul className="menu" >
            <li className="menu-item">Home</li>
            <li className="menu-item">New</li>
            <li className="menu-item">Popular</li>
            <li className="menu-item">Trending</li>
            <li className="menu-item">Categories</li>
          </ul>
        </nav>
      </header>

      <main className="main">

      </main>
    </>
  )
}