import React, { FormEvent, InputHTMLAttributes, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Tooltip } from '../Tooltip';
import { currencyInputMask } from '../../utils/currencyInputMask';
import { numberInputMask } from '../../utils/numberInputMask';
import { percentageInputMask } from '../../utils/percentageInputMask';

import { Container } from './styles';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mask?: 'currency' | 'number' | 'percentage';
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  mask,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { 
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const BACKSPACE_KEY = 'Backspace';

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    clearError();
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
    setIsFocused(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === BACKSPACE_KEY) {
      event.currentTarget.value = event.currentTarget.value.slice(0, -1);
    }
  }, []);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;

    if (inputRef.current) {
      if (mask === 'currency') {
        inputRef.current.value = currencyInputMask(inputElement.value);
      } else if (mask === 'number') {
        inputRef.current.value = numberInputMask(inputElement.value);
      } else if (mask === 'percentage') {
        inputRef.current.value = percentageInputMask(inputElement.value);
        inputRef.current.setSelectionRange(inputRef.current.value.length - 1, inputRef.current.value.length - 1);
      }
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      hasErrors={!!error}
    >
      <input
        type="text"
        ref={inputRef}
        name={name}
        placeholder={label}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={mask === 'percentage' ? handleKeyDown : () => { }}
        {...rest}
      />

      {
        error && (
          <div>
            <FiAlertCircle />
            <Tooltip message={error} />
          </div>
        )
      }

    </Container>
  );
}