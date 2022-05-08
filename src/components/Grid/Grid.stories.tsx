import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from './Grid';

export default {
  title: 'JollofUI/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  //   children: 'click me',
};

export const Items = Template.bind({});
Items.args = {
  // children: <><div>One</div><div>Two</div></>,
};
