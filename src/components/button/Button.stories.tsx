import { Meta, StoryFn } from '@storybook/react';
import { Button, IButtonProps } from '.';
import { buttonMockData } from './Button.mock';

export default {
  title: 'Components/Button',
} as Meta;

export const buttonStory: StoryFn<IButtonProps> = (args) => {
  return <Button {...args} />;
};

buttonStory.storyName = 'Default';
buttonStory.args = buttonMockData;
