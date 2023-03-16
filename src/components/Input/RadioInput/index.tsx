import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useRef,
} from 'react';
import { Container, Option } from './styles';

interface OptionProps {
  id: string;
  label: string;
  value: string;
}

interface SelectInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: OptionProps[]
}

type RefInputEl = RefObject<HTMLInputElement[]>

export const RadioInput: React.FC<SelectInputProps> = ({
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
    <Container>
      <span>{label}</span>

      {error && <p>{error}</p>}

      <section>
        {options.map((option, index) => (
          <Option key={option.id}>
            <label htmlFor={option.id}>
              <input
                type="radio"
                ref={ref => {
                  inputRefs.current[index] = ref as HTMLInputElement
                }}
                name={name}
                id={option.id}
                value={option.value}
                onClick={clearError}
                {...rest}
              />
              <div />
            </label>

            <span>{option.label}</span>
          </Option>
        ))}
      </section>
    </Container>
  );
}