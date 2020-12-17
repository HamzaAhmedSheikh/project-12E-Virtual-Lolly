import React from 'react';
import Header from '../components/Header';


export default {
    title: 'vLollyHeader',
    component: Header,
  };


  const Template = (args) => <Header {...args} />;

  export const Default = Template.bind({});
  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
 };