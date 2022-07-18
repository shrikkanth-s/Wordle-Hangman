import React, { useState, useEffect } from 'react';
import Header from './components/Head';
import Figure from './components/Fig';
import WrongLetters from './components/WrongLetters';
import Word from './components/word';
import Popup from './components/Popup';
import Notification from './components/Notification';

import {showNotification as show} from './helpers/helpers';

import './App.css';
const words = ['ability',
'absence',
'academy',
'account',
'accused',
'achieve',
'acquire',
'address',
'advance',
'adverse',
'advised',
'adviser',
'cabinet','caliber','calling','capable','capital','captain','caption','capture',
'backing','balance',
'banking',
'barrier',
'battery',
'bearing',
'beating',
'because',
'bedroom',
'believe',
'careful',
'carrier',
'caution',
'ceiling',
'central',
'centric',
'century',
'certain',
'chamber',
'council',
'counsel',
'counter',
'country',
'crucial',
'crystal',
'culture',
'current',
'dispute',
'distant',
'diverse',
'divided',
'drawing',
'driving',
'example',
'excited',
'exclude',
'exhibit',
'expense',
'explain',
'explore',
'express',
'fitness',
'foreign',
'forever',
'formula',
'fortune',
'forward',
'founder',
'freedom',
'further',
'gallery',
'gateway',
'general',
'genetic',
'genuine',
'gigabit',
'herself',
'highway',
'himself',
'history',
'holding',
'holiday',
'housing',
'however',
'hundred',
'initial',
'inquiry',
'insight',
'install',
'instant',
'instead',
'intense',
'interim',
'involve',
'jointly',
'journal',
'journey',
'justice',
'justify',
'keeping',
'killing',
'liberal',
'liberty',
'library',
'license',
'limited',
'listing',
'mission',
'mistake',
'mixture',
'monitor',
'monthly',
'network',
'neutral',
'notable',
'nothing',
'nowhere',
'nuclear',
'nursing',
'obvious',
'offense',
'officer',
'ongoing',
'opening',
'operate',
'opinion',
'optical',
'organic',
'outcome',
'outdoor',
'outlook',
'percent',
'perfect',
'perform',
'perhaps',
'phoenix',
'program',
'project',
'promise',
'promote',
'protect',
'protein',
'protest',
'provide',
'publish',
'purpose',
'pushing',
'qualify',
'quality',
'quarter',
'release',
'removal',
'removed',
'replace',
'request',
'require',
'reserve',
'resolve',
'respect',
'respond',
'restore',
'retired',
'revenue',
'reverse',
'service',
'serving',
'session',
'setting',
'seventh',
'several',
'sitting',
'sixteen',
'skilled',
'smoking',
'somehow',
'society',
'somehow',
'someone',
'speaker',
'special',
'species',
'sponsor',
'station',
'storage',
'strange',
'surplus',
'survive',
'suspect',
'sustain',
'teacher',
'telecom',
'telling',
'tension',
'theatre',
'therapy',
'thereby',
'thought',
'through',
'tonight',
'totally',
'touched',
'towards',
'traffic',
'trouble',
'turning',
'typical',
'uniform',
'unknown',
'unusual',
'upgrade',
'upscale',
'utility',
'variety',
'various',
'vehicle',
'venture',
'version',
'veteran',
'victory',
'viewing',
'village',
'violent',
'virtual',
'visible',
'waiting',
'walking',
'wanting',
'warning',
'warrant',
'wearing',
'weather',
'webcast',
'website',
'wedding',
'weekend',
'welcome',
'welfare',
'western',
'whereas',
'whereby',
'whether',
'willing',
'winning',
'without',
'witness',
'working',
'writing',
'written'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);
  
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }


  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
       
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} /> 
      <Notification showNotification={showNotification} /> 
    </>
  );
}

export default App;