// YourComponent.stories.js

import React from 'react';
import Widget2  from './Widget2';

// This default export determines where your story goes in the story list
export default {
  title: 'Widget2',
  component: Widget2,
};

const Template = (args) => <Widget2 {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};