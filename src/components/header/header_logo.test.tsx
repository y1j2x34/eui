/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';

import { EuiHeaderLogo } from './header_logo';

describe('EuiHeaderLogo', () => {
  test('is rendered', () => {
    const component = render(<EuiHeaderLogo {...requiredProps} />);

    expect(component).toMatchSnapshot();
  });

  test('renders href', () => {
    const component = render(<EuiHeaderLogo href="#" />);

    expect(component).toMatchSnapshot();
  });

  test('renders href with rel', () => {
    const component = render(<EuiHeaderLogo href="#" rel="noreferrer" />);

    expect(component).toMatchSnapshot();
  });

  test('renders optional props', () => {
    const component = render(
      <EuiHeaderLogo
        iconType="error"
        iconTitle="Moby Dick"
        style={{ color: 'red' }}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
