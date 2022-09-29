import { useState } from 'react';

export const NumberFilter = ({ onChange }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <label>
        type number
        <input
          type="text"
          maxLength="2"
          style={{ textTransform: 'uppercase' }}
          required
          onChange={e => {
            onChange(e.target.value);
          }}
        />
      </label>
    </form>
  );
};
