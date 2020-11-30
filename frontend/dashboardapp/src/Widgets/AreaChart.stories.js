// YourComponent.stories.js

import React from 'react';
import  AreaChart from './AreaChart' ;

// This default export determines where your story goes in the story list
export default {
  title: 'AreaChart',
  component: AreaChart,
};

const Template = (args) => <AreaChart {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};