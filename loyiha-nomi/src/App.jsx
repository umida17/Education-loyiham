import React, { useState } from 'react';
import Header from './Companent/Header/Header';
import Hero from './Companent/Hero/Hero';

function App() {
   const [lang, setLang] = useState('uz');

  return (
    <div>
       <Header lang={lang} setLang={setLang} />
      
       <Hero lang={lang} />
    </div>
  );
}

export default App;