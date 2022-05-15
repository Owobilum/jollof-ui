import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'JollofUI/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = { dimensions: 'small' };

export const Normal = Template.bind({});
Normal.args = {
  dimensions: 'normal',
};

export const Large = Template.bind({});
Large.args = { dimensions: 'large' };

export const FullWidth = Template.bind({});
FullWidth.args = { fullwidth: true };
