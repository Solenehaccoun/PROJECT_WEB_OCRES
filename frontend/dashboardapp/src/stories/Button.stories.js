import React from 'react';

import { Button } from './Button';
<<<<<<< HEAD

export default {
  title: 'Example/Button',
  component: Button,
=======
import { Widget1 } from '../Widgets/Widget1';

export default {
  title: 'Example/Button',
  component: Widget1,
>>>>>>> c61ff8ae8871fd74b2a648385e244ab6abd7a1d2
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
<<<<<<< HEAD
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
=======
  label: 'Widget1',
>>>>>>> c61ff8ae8871fd74b2a648385e244ab6abd7a1d2
};
