import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Overlay from './Overlay';

export default {
  title: 'JollofUI/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  //   children: 'click me',
  //   variant: 'contained',
};
