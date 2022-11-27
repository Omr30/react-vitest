import Accordion from './Accordion'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Accordion', () => {

    beforeEach(() => {
        render(
            <Accordion title='hello'>
                <h3>My content</h3>
                <p>some xyz</p>
            </Accordion>)
    });

    test('should show title all the time', () => {
        expect(screen.getByText('hello')).toBeDefined()
    })

    test('should nott show  the content at the start', () => {
        expect(screen.queryByText(/content/i)).toBeNull()
    })

    test('should show the content when title is clicked', () => {
        const button =  screen.getByText(/Open/i);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeDefined()
    })

    test('should hide the content when title is clicked', () => {
        const button =  screen.getByText(/Open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeNull()
    })

})