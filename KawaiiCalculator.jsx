import React, { useState } from 'react';
import { Heart, Cat, Star } from 'lucide-react';

const KawaiiCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const colors = {
    background: '#BFECFF',
    button: '#CDC1FF', 
    text: '#FFF6E3',
    accent: '#FFCCEA'
  };

  const handleNumberClick = (number) => {
    setDisplay(prev => 
      prev === '0' ? number.toString() : prev + number
    );
  };

  const handleOperatorClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperator(op);
    setDisplay('0');
  };

  const calculateResult = () => {
    const current = parseFloat(display);
    
    switch(operator) {
      case '+':
        setDisplay((previousValue + current).toString());
        break;
      case '-':
        setDisplay((previousValue - current).toString());
        break;
      case '*':
        setDisplay((previousValue * current).toString());
        break;
      case '/':
        setDisplay((previousValue / current).toString());
        break;
      case '%':
        setDisplay(((previousValue / 100) * current).toString());
        break;
      default:
        break;
    }
    
    setOperator(null);
    setPreviousValue(null);
  };

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div 
      className="p-4 rounded-2xl shadow-2xl transition-all duration-300"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Comic Cat', sans-serif"
      }}
    >
      {/* Гифка (placeholder, так как внедрение внешних iframe ограничено) */}
      <div className="mb-4 flex justify-center">
        <Cat color={colors.accent} size={64} className="animate-bounce" />
      </div>

      {/* Дисплей калькулятора */}
      <div 
        className="text-right p-4 mb-4 rounded-xl text-3xl font-bold"
        style={{ 
          backgroundColor: colors.text,
          color: colors.background 
        }}
      >
        {display}
      </div>

      {/* Кнопки калькулятора */}
      <div className="grid grid-cols-4 gap-2">
        {[7,8,9,'÷',4,5,6,'×',1,2,3,'-',0,'.','%','+'].map((btn) => (
          <button
            key={btn}
            onClick={() => 
              typeof btn === 'number' ? handleNumberClick(btn) :
              btn === '÷' ? handleOperatorClick('/') :
              btn === '×' ? handleOperatorClick('*') :
              btn === '%' ? handleOperatorClick('%') :
              handleOperatorClick(btn)
            }
            className="p-4 rounded-xl text-2xl transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: colors.button,
              color: colors.text
            }}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={clearDisplay}
          className="col-span-2 p-4 rounded-xl text-2xl hover:scale-105 transition-all duration-200"
          style={{
            backgroundColor: colors.accent,
            color: colors.text
          }}
        >
          <Heart className="inline mr-2" /> Clear
        </button>
        <button
          onClick={calculateResult}
          className="col-span-2 p-4 rounded-xl text-2xl hover:scale-105 transition-all duration-200"
          style={{
            backgroundColor: colors.accent,
            color: colors.text
          }}
        >
          <Star className="inline mr-2" /> Calculate
        </button>
      </div>

      {/* Подпись */}
      <div 
        className="mt-4 text-center text-2xl animate-pulse"
        style={{ color: colors.accent }}
      >
        meeeeeowo
      </div>
    </div>
  );
};

export default KawaiiCalculator;
