import React from 'react';
import { text } from '@storybook/addon-knobs';

import Splash from '.';

export default {
  title: 'Components/Splash',
  component: Splash,
  parameters: {
    backgrounds: {
      default: 'Primary',
    },
  },
};

const data = {
  title: 'Splash Component',
  claim: 'Just a simple example',
  website: 'https://www.example.com',
};

export const Default = () => <Splash {...data} />;

export const Custom = () => (
  <Splash
    title={text('Title', data.title)}
    claim={text('Claim', data.claim)}
    website={text('Website', data.website)}
  />
);
