import React, {
  InputHTMLAttributes,
  RefObject, useCallback, useEffect, useRef,
  useState
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import { Container, ErrorContainer, Options } from './styles';
import { Tooltip } from '../../Tooltip';

interface OptionProps {
  id: string;
  label: string;
  value: number;
}

interface SelectInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: OptionProps[]
}

type RefInputEl = RefObject<HTMLInputElement[]>

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  const [optionSelected, setOptionSelected] = useState<OptionProps>({} as OptionProps);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleContainerClick = () => {
    setIsFocused(!isFocused);
    clearError();
  };

  const handleSelect = useCallback((option: OptionProps) => {
    if (!isFilled) {
      setIsFilled(true);
    }
    setOptionSelected(option);
    setIsFocused(false);
  }, []);

  useEffect(() => {
    return registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: RefInputEl) => {
        if (refs.current) {
          return refs.current.find(input => input?.checked)?.value || '';
        }
        return '';
      },
      setValue: (refs: RefInputEl, id: string) => {
        if (refs.current) {
          const inputRef = refs.current.find(ref => ref.id === id);
          if (inputRef) inputRef.checked = true;
        }
      },
      clearValue: (refs: RefInputEl) => {
        if (refs.current) {
          const inputRef = refs.current.find(ref => ref.checked === true);
          if (inputRef) inputRef.checked = false;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      hasErrors={!!error}
    >
      <div onClick={handleContainerClick}>
        <span>{Object.keys(optionSelected).length ? optionSelected.label : label}</span>
        <FiChevronDown size={20} />
        {
          error && (
            <ErrorContainer>
              <FiAlertCircle />
              <Tooltip message={error} />
            </ErrorContainer>
          )
        }
      </div>

      <Options isFocused={isFocused}>
        {
          options.map((option, index) => (
            <label key={option.id} htmlFor={option.id} onClick={() => setIsFocused(!isFocused)}>
              <input
                type="radio"
                ref={ref => {
                  inputRefs.current[index] = ref as HTMLInputElement
                }}
                id={option.id}
                name={name}
                value={option.value}
                onChange={() => handleSelect(option)}
                {...rest}
              />
              <span>{option.label}</span>
            </label>
          ))
        }
      </Options>
    </Container>
  );
}