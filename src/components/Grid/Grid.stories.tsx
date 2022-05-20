import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid from "./Grid";

export default {
  title: "JollofUI/Grid",
  component: Grid,
} as Meta;

export const Basic: Story = (args) => (
    <Grid
      container
      alignItems="center"
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:'blue'}}>
      Hello
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:'yellow'}}>
      Hello
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:'green'}}>
      Hello
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:'purple'}}>
      Hello
      </Grid>
    </Grid>
);









// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import Grid from './Grid';

// export default {
//   title: 'JollofUI/Grid',
//   component: Grid,
// } as ComponentMeta<typeof Grid>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

// export const Container = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Container.args = {
//   //   children: 'click me',
// };

// export const Items = Template.bind({});
// Items.args = {
//   // children: <><div>One</div><div>Two</div></>,
// };
