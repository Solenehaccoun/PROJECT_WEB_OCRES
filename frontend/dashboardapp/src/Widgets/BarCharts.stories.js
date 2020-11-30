// YourComponent.stories.js

import React from 'react';

import  BarCharts from './BarCharts';

// This default export determines where your story goes in the story list
export default {
  title: 'BarCharts',
  component: BarCharts,
};

const Template = (args) => <BarCharts {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};