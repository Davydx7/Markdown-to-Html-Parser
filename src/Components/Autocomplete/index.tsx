import { InputHTMLAttributes, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormValues } from '../../Routes/Details';

import './autocomplete.scss';

type Props = UseControllerProps<FormValues> & InputHTMLAttributes<HTMLInputElement>;

const Autocomplete: React.FC<Props> = ({ placeholder, ...props }) => {
  const { field, fieldState } = useController(props);
  // const {
  //   field: { onChange, onBlur, name, value, ref },
  //   fieldState: { invalid, isTouched, isDirty },
  //   formState: { touchedFields, dirtyFields }
  // } = useController({
  //   name,
  //   control,
  //   rules: { required: true },
  //   defaultValue: "",
  // });

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

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    field.onChange(e.currentTarget.innerText);
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
      field.onChange(filteredSuggestions[activeSuggestionIndex]);
      setShowSuggestions(false);
    }
  };

  const myChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.currentTarget.value);

    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filtered = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // setInput(e.target.value);
    setFilteredSuggestions(filtered.slice(0, 5));
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  return (
    <label className="suggestionWrapper">
      <span className="label">
        {field.name}
        <i>*</i>
      </span>
      <input
        onChange={myChange}
        onKeyDown={onKeyDown}
        type="text"
        placeholder={placeholder}
        value={field.value}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          field.onBlur();
          setShowSuggestions(false);
        }}
        ref={field.ref}
      />

      {filteredSuggestions.length ? (
        <ul className={`suggestions ${showSuggestions && 'show'}`}>
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
      )}
      {fieldState.error && <span className="error">{fieldState.error.message}</span>}
    </label>
  );
};
export default Autocomplete;
