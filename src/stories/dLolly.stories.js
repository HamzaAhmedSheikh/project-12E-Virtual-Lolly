import React from 'react';
import Lolly from '../components/Lolly';


export default {
    title: 'Default-Lolly',
    component: Lolly,
 };


  const Template = (args) => <Lolly {...args} />;

  export const Default = Template.bind({});
  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
 };