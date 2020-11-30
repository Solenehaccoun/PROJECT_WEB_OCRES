// YourComponent.stories.js

import React from 'react';
import  Widget1  from './Widget1';

// This default export determines where your story goes in the story list
export default {
  title: 'Widget1',
  component: Widget1,
};

const Template = (args) => <Widget1 {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};