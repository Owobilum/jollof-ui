import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal from './Modal';

export default {
  title: 'JollofUI/Modal',
  component: Modal,
} as Meta;

export const Basic: Story = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal open={open} setOpen={setOpen} {...args}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            enim?
          </p>
        </div>
      </Modal>
    </>
  );
};
