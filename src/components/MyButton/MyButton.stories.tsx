import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton from './MyButton';

export default {
  title: 'JollofUI/MyButton',
  component: MyButton,
  //   argTypes: {
  //     label: { control: 'color' },
  //   },
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello World',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click Me',
};
