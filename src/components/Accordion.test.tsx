import Accordion from './Accordion'
import { render, screen } from '@testing-library/react'

describe('Accordion', () => {
    test('should show the accordion component', () => {
        render(<Accordion title='hello'>
            <h3>My content</h3>
            <p>some content</p>
        </Accordion>)
        expect(screen.getByText('hello')).toBeDefined()
    });
})