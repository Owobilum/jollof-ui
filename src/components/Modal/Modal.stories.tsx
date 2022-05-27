import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal from './Modal';

export default {
  title: 'JollofUI/Modal',
  component: Modal,
} as Meta;

export const Basic: Story = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal open={open} handleClose={handleClose} {...args}>
        <div>
          <p style={{ textAlign: 'right' }}>
            <button onClick={handleClose}>X</button>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            enim?
          </p>
        </div>
      </Modal>
    </>
  );
};
