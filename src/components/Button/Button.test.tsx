import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

test('button renders on page', () => {
  render(<Button />);
});
