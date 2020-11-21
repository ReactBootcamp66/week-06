import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
 
import InformationText from './InformationText';
import Button, { ButtonTypes } from '../Button';


storiesOf("InformationText", module)
  .add(
    "Error",
    () => (
      <InformationText type="error">
        Error message
      </InformationText>
    )
  )
  .add(
    "Error with Component",
    () => (
      <InformationText type="error">
        <Button type={ButtonTypes.Button} text="Click me!" />
      </InformationText>
    )
  )
  .add(
    "Info",
    () => (
      <InformationText type="info">
        Information message
      </InformationText>
    )
  )
