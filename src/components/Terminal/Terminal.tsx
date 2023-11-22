import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import resumeUrl from '../../assets/Resume.pdf';
import classes from './Terminal.module.css';

interface OutputItem {
  type: 'input' | 'output';
  text: string;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<OutputItem[]>([]);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialMessage =
      'Welcome to my personal website. My name is Joe King and I am a Fullstack Software engineer at Cynergy Wellness. Type --help for a list of commands';
    let rollingTextIndex = 0;

    const rollingTextInterval = setInterval(() => {
      setOutput((prevOutput) => {
        const updatedOutput = [...prevOutput];
        if (updatedOutput.length === 0) {
          // Initial case, add a new output item
          updatedOutput.push({ type: 'output', text: initialMessage.slice(0, rollingTextIndex + 1) });
        } else {
          // Update the text of the existing output item
          const lastItem = updatedOutput[updatedOutput.length - 1];
          updatedOutput[updatedOutput.length - 1] = {
            ...lastItem,
            text: initialMessage.slice(0, rollingTextIndex + 1),
          };
        }
        return updatedOutput;
      });

      rollingTextIndex += 1;

      if (rollingTextIndex === initialMessage.length) {
        clearInterval(rollingTextInterval);
      }
    }, 10);

    return () => {
      clearInterval(rollingTextInterval);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOutput([...output, { type: 'input', text: input }]);

    // Process the input command and execute the corresponding function
    processCommand(input);

    setInput('');
  };

  const processCommand = (command: string) => {
    const commands: Record<string, () => void> = {
      '--help': showHelp,
      clear: clearTerminal,
      resume: downloadResume,
      github: navigateGithub,
      linkedin: navigateLinkedIn,
      about: aboutCommand,
    };

    const commandFunction = commands[command.toLowerCase()];
    if (commandFunction) {
      commandFunction();
    } else {
      setOutput([...output, { type: 'output', text: `Command not found: ${command}` }]);
    }
  };

  const showHelp = () => {
    setOutput([
      ...output,
      { type: 'output', text: 'Available commands: --help, clear, resume, linkedin, github, about, blog-post --$id' },
    ]);
  };

  const aboutCommand = () => {
    setOutput([
      ...output,
      {
        type: 'output',
        text: 'Well! I am glad you asked. I graduated from Messiah University in 2021. I am passionate about software engineering and love to experiment with new tools. I also am married and have a dog named Mazie.',
      },
    ]);
  };

  const clearTerminal = () => {
    setOutput([]);
  };

  const downloadResume = () => {
    window.open(resumeUrl, '_blank');
    setOutput([...output, { type: 'output', text: 'Opening resume...' }]);
  };

  const navigateGithub = () => {
    window.open('http://github.com/jk1551', '_blank');
    setOutput([...output, { type: 'output', text: 'Opening github...' }]);
  };

  const navigateLinkedIn = () => {
    window.open('https://www.linkedin.com/in/joseph-king-218765115/', '_blank');
    setOutput([...output, { type: 'output', text: 'Opening linkedin...' }]);
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the terminal when new output is added
    if (inputRef.current) {
      inputRef.current.scrollTop = inputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className={classes.terminal} ref={inputRef}>
      {output.map((item, index) => (
        <div key={index} className={item.type}>
          {item.text}
        </div>
      ))}
      <form onSubmit={handleInputSubmit} className={classes.form}>
        <span className={classes.prompt}>$</span>
        <input type="text" value={input} onChange={handleInputChange} className={classes.inputField} />
      </form>
    </div>
  );
};

export default Terminal;
