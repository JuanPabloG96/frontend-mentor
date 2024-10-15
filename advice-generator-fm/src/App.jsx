import { useState, useEffect, useCallback } from 'react';
import './css/App.css'

export function App() {
  //manage image src
  const [src, setSrc] = useState('');
  function updateSrc() {
    const newSrc = window.innerWidth > 768
      ? 'images/pattern-divider-desktop.svg'
      : 'images/pattern-divider-mobile.svg';
    setSrc(newSrc);
  }

  useEffect(() => {
    updateSrc();
    window.addEventListener('resize', updateSrc);
    return () => {
      window.removeEventListener('resize', updateSrc);
    };
  }, []);

  //get api information
  const API_URL = 'https://api.adviceslip.com/advice'

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const useFetch = useCallback((url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, [])

  useEffect(() => {
    setLoading(true);
    useFetch(API_URL);
  }, []);

  //manage button behavior 
  const handleRandomizeAdvice = () => {
    useFetch(API_URL);
  };

  return (
    <article className='fm-advice-card'>
      <span className="fm-advice-number">
        {loading && 'Loading..'}
        {`advice #${data?.slip.id}`}
      </span>
      <p className="fm-advice-text">
        {loading && 'Loading..'}
        {`"${data?.slip.advice}"`}
      </p>
      <img src={src} alt="mobile" className="fm-advice-divider-img" />
      <button onClick={handleRandomizeAdvice} className='fm-advice-randomize-button'>
        <img src="images/icon-dice.svg" alt="dice icon" />
      </button>
    </article>
  )
}