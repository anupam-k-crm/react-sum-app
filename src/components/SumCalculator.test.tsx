import React from 'react';
import { render, screen } from '@testing-library/react';
import SumCalculator from './SumCalculator';

test('renders SumCalculator component', () => {
    render(<SumCalculator />);
    const linkElement = screen.getByText(/sum calculator/i);
    expect(linkElement).toBeInTheDocument();
});

test('calculates sum correctly', () => {
    render(<SumCalculator />);
    const input1 = screen.getByLabelText(/first number/i);
    const input2 = screen.getByLabelText(/second number/i);
    const button = screen.getByRole('button', { name: /calculate/i });

    input1.value = '5';
    input2.value = '10';
    button.click();

    const result = screen.getByText(/result: 15/i);
    expect(result).toBeInTheDocument();
});