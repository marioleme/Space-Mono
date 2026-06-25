import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

export default function ScrambleText({ text, isHovered, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isHovered) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    intervalRef.current = setInterval(() => {
      frame += 1;
      const revealCount = Math.floor(frame / 4);
      const next = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < revealCount) return char;
          return randChar();
        })
        .join('');
      setDisplay(next);
      if (revealCount >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 25);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, isHovered]);

  return <span className={className}>{display}</span>;
}
