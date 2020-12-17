import React from 'react';
import DummyLolly from '../components/dummyLolly';

export default {
    title: 'dummy-vlolly',
    component: DummyLolly,
 };


  const Template = (args) => <DummyLolly {...args} />;

  export const Default = Template.bind({});
  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
 };