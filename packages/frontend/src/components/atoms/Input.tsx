// Chakra
import { Input } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
// Helpers
import { expressions } from 'src/const/regularexpressions';

interface Props {
  type: 'mail' | 'password' | 'name' | 'user' | 'phone';
  placeholder: string;
}

interface StateInput {
  item: string;
  validation: boolean;
}

type HandleInputChange = ChangeEvent<HTMLInputElement>;

export const InputComponent: React.FC<Props> = ({ type, placeholder }) => {
  const [input, setInput] = useState<StateInput>({
    item: '',
    validation: false,
  });

  const handleChange = ({ target }: HandleInputChange) => {
    setInput({
      ...input,
      item: target.value,
    });
  };

  const handleBlur = () => {
    const expresion = Object.entries(expressions);

    expresion.forEach(([key, value]) => {
      if (key === type) {
        if (value.test(input.item)) {
          setInput({
            ...input,
            validation: true,
          });
        } else {
          setInput({
            ...input,
            validation: false,
          });
        }
      }
    });
  };

  return (
    <Input
      autoComplete="off"
      type={type}
      placeholder={placeholder}
      value={input.item}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
