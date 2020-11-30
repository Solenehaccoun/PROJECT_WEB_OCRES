// YourComponent.stories.js

import React from 'react';
import  Piechart  from './Piechart';

// This default export determines where your story goes in the story list
export default {
  title: 'Piechart',
  component: Piechart,
};

const Template = (args) => <Piechart {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};