import React, { FC } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InformationText from './InformationText';

describe('InformationText', () => {
  test('renders error type with red', () => {
    const { getByRole, getByText } = render(
      <InformationText type="error">Error Message</InformationText>
    );

    const informationText = getByRole('alert');
    const informationTextContent = getByText(/Error Message/);
    expect(informationText).toHaveStyle('border: 1px solid red');
    expect(informationTextContent).toBeTruthy();
  });

  test('renders info type with blue', () => {
    const { getByRole, getByText } = render(
      <InformationText type="info">Info Message</InformationText>
    );

    const informationText = getByRole('alert');
    const informationTextContent = getByText(/Info Message/);

    expect(informationText).toHaveStyle('border: 1px solid blue');
    expect(informationTextContent).toBeTruthy();
  });
});
