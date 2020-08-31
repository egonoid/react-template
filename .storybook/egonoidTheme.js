import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#2f74bb', // $color-primary
  colorSecondary: '#79acd4', // $color-primary-4

  // UI
  appBg: '#fff', // $white
  appContentBg: '#fff', // $white
  appBorderColor: '#10396e', // $color-primary-8
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#262626', // $color-gray-10
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff', // $white
  barSelectedColor: '#e0d0aa', // $color-secondary
  barBg: '#10396e', // $color-primary-8

  // Form colors
  inputBg: '#fff', // $white
  inputBorder: '#79acd4', // $color-primary-4
  inputTextColor: '#262626', // $color-gray-10
  inputBorderRadius: 8,

  brandTitle: 'egonoid storybook',
  brandUrl: 'https://www.egonoid.com',
  brandImage: 'images/egonoid-logo.png',
});
