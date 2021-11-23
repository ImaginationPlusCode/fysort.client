import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import {App} from './index';

afterEach(() => cleanup);

describe("<App/>", () => {
    it('renders', async () => {
        render(<App audience="Jared"/>);

    });

    it("has correct audience", () => {
        const audience = 'Jared';
        const {findByText} = render(<App audience="Jared"/>);
        findByText(new RegExp('Hello, '+ audience, 'i'));
    })
});