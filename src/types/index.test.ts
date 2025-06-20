import { SumCalculatorProps } from './index';

describe('SumCalculatorProps interface', () => {
    it('should accept an onCalculate function that takes a number and returns void', () => {
        // This function matches the interface
        const props: SumCalculatorProps = {
            onCalculate: (sum: number) => {
                // do something with sum
            },
        };
        expect(typeof props.onCalculate).toBe('function');
        // TypeScript will enforce the type at compile time
    });

    // Type-level test: Uncommenting the following should cause a TypeScript error
    // it('should not accept an onCalculate function with wrong signature', () => {
    //   // @ts-expect-error
    //   const props: SumCalculatorProps = {
    //     onCalculate: (sum: string) => {},
    //   };
    // });

    it('should call onCalculate with a number', () => {
        const mockFn = jest.fn();
        const props: SumCalculatorProps = {
            onCalculate: mockFn,
        };
        props.onCalculate(42);
        expect(mockFn).toHaveBeenCalledWith(42);
    });
});