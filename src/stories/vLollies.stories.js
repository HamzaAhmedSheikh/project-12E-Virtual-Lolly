import React from 'react';
import Lollies from '../pages/index';

export default {
    title: 'Lollies',
    component: Lollies,
 };


  const Template = (args) => <Lollies {...args} />;

  export const Default = Template.bind({});
  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
 };