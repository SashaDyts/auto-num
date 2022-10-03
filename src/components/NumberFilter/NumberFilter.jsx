import { useState } from 'react';
import { Input, Form } from './NumberFilter.styled';

export const NumberFilter = ({
  onChange,
  maxLength = 20,
  textTransform = 'none',
}) => {
  const [filter, setFilter] = useState('');

  const onHandleChange = e => {
    setFilter(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <label>
        <Input
          value={filter}
          type="text"
          maxLength={maxLength}
          style={{ textTransform: textTransform }}
          required
          onChange={e => {
            onHandleChange(e);
          }}
        />
      </label>
    </Form>
  );
};
