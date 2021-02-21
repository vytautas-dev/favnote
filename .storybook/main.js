module.exports = {
  stories: ['../src/components/**/*.stories.*@(js|md)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@storybook/addon-knobs/register',
  ],
};
