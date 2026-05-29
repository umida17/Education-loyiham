import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main  from './Companent/Main/Main'; 

function App() {
  const [lang, setLang] = useState('uz');

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      
        <Hero lang={lang} />
        <Main lang={lang} />
    
    </div>
  );
}

export default App;