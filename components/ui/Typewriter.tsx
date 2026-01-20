import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex % words.length];
      const isFullWord = text === currentWord;
      const isEmpty = text === '';

      if (isDeleting) {
        // Apagando
        setText(currentWord.substring(0, text.length - 1));
        setDelay(deletingSpeed);
      } else {
        // Digitando
        setText(currentWord.substring(0, text.length + 1));
        setDelay(typingSpeed);
      }

      // Lógica de transição
      if (!isDeleting && isFullWord) {
        // Terminou de digitar a palavra, pausa antes de apagar
        setDelay(pauseTime);
        setIsDeleting(true);
      } else if (isDeleting && isEmpty) {
        // Terminou de apagar, passa para a próxima palavra
        setIsDeleting(false);
        setCurrentWordIndex((prev) => prev + 1);
        setDelay(200); // Pausa mínima antes de começar a próxima
      }
    };

    timer = setTimeout(handleTyping, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime, delay]);

  return (
    <span className={`${className} inline-flex items-baseline whitespace-nowrap`}>
      <span>{text}</span>
      <span className="ml-1 w-[2px] h-[0.9em] bg-primary animate-[pulse_0.8s_infinite]"></span>
    </span>
  );
};

export default Typewriter;