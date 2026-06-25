import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

interface ScrambleInProps {
  text: string;
  delay: number;
  triggered: boolean;
}

export default function ScrambleIn({ text, delay, triggered }: ScrambleInProps) {
  const [display, setDisplay] = useState<string>(text.replace(/./g, '\u00A0'));
  const frameRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    frameRef.current = 0;

    if (!triggered) {
      setDisplay(text.replace(/./g, '\u00A0'));
      return;
    }

    const startTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        frameRef.current += 1;
        const revealCount = frameRef.current * 0.5;
        const next = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < revealCount) return char;
            if (i < revealCount + 3) return randChar();
            return '\u00A0';
          })
          .join('');
        setDisplay(next);
        if (revealCount >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplay(text);
        }
      }, 25);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay, triggered]);

  return <>{display}</>;
}
