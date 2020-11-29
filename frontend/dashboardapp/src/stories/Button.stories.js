import React from 'react';

import { Button } from './Button';
import { Widget1 } from '../Widgets/Widget1';

export default {
  title: 'Example/Button',
  component: Widget1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Widget1',
};
