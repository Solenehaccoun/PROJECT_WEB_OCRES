// YourComponent.stories.js

import React from 'react';
import  DonnutCharts  from './DonnutCharts';

// This default export determines where your story goes in the story list
export default {
  title: 'DonnutCharts',
  component: DonnutCharts,
};

const Template = (args) => <DonnutCharts {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};