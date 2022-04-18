import React from 'react';
import { render } from '@testing-library/react';

import MyButton from './MyButton';

test('button renders on page', () => {
  render(<MyButton label="howdy" />);
});
