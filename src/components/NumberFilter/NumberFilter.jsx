import { useState } from 'react';
import { Input, Form } from './NumberFilter.styled';

export const NumberFilter = ({ onChange }) => {
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
          maxLength="2"
          style={{ textTransform: 'uppercase' }}
          required
          onChange={e => {
            onHandleChange(e);
          }}
        />
      </label>
    </Form>
  );
};
