// AudioStream.tsx
import React, { useState } from "react";

const AudioStream: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [shouldPlay, setShouldPlay] = useState<boolean>(false);

  const playTextToSpeech = (inputText: string): void => {
    // Here you can integrate any Text-to-Speech API
    // For demonstration, we just log it to the console
    console.log('Text to speak:', inputText);
    setShouldPlay(true);
  };

  const handleAudioEnd = (): void => {
    setShouldPlay(false);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder={'q, m, l, or free text'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <br/>
      <button onClick={() => playTextToSpeech(text)}>
        Text to Speech
      </button>
      <br/>
      {shouldPlay &&
        <audio
          controls
          autoPlay
          onEnded={handleAudioEnd}
        >
          <source src={`http://localhost:3000/stream/tts?text=${encodeURIComponent(text)}`} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      }
    </div>
  );
};

export default AudioStream;
