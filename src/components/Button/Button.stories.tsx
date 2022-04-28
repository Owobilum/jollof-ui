import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'JollofUI/Button',
  component: Button,
  //   argTypes: {
  //     label: { control: 'color' },
  //   },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  backgroundColor: 'red',
};

export const Blue = Template.bind({});
Blue.args = {
//   backgroundColor: 'blue',
  color: '#green',
  children: 'HEya',
  variant: 'outlined'
};
