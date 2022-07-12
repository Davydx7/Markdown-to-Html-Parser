import { useState } from 'react';

import './autocomplete.scss';

const Autocomplete: React.FC<{ reg: {} }> = ({ reg }) => {
  const suggestions: string[] = [
    'Amsterdam',
    'Barcelona',
    'Berlin',
    'London',
    'Madrid',
    'New york',
    'Paris',
    'Prague',
    'Rome',
    'Vienna'
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(suggestions.slice(0, 5));
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState('');

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      } else {
        setActiveSuggestionIndex(0);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      } else {
        setActiveSuggestionIndex(filteredSuggestions.length - 1);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setShowSuggestions(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filtered = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(filtered.slice(0, 5));
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  return (
    <div className="suggestionWrapper">
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="To(Destination)"
        value={input}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        // {...reg}
        // {...register('To(Destination)', { required: true, maxLength: 100 })}
      />
      {showSuggestions &&
        (filteredSuggestions.length ? (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;
              // Flag the active suggestion with a class
              if (index === activeSuggestionIndex) {
                className = 'suggestion-active';
              }
              return (
                <li tabIndex={-1} className={className} key={suggestion} onMouseDown={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="suggestions">
            <span>Destination not available</span>
          </div>
        ))}
    </div>
  );
};
export default Autocomplete;
