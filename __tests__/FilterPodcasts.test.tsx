
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterPodcasts from '../src/components/TopPodcastsSection/FilterPodcasts/FilterPodcasts'

describe('FilterPodcasts', () => {

    var filter: string = "";
    const setFilter = jest.fn();
    const podcasts = ["hola", "hole", "aloh"]
    const podcastsFiltred = () => podcasts.filter(podcast => podcast.includes(filter));

    const setup = () => {
        const container = render(<FilterPodcasts filter={filter} setFilter={setFilter} podcastsLength={podcastsFiltred().length} />)
        const input = screen.getByTestId('test-input') as HTMLInputElement;
        const span = screen.getByTestId('test-span').textContent as string;
        return { input, span, ...container, }
    }

    it('Renders a FilterPodcasts width', () => {
        const { container, span } = setup();
        expect(container).toBeInTheDocument();
        expect(span).toBe("3");
    })

    it('Should change input value', () => {
        const { input } = setup();
        input.value = 'test';
        fireEvent.change(input);
        expect(input.value).toBe("test");
    });


    it('Should render component with changed length', () => {
        filter = "ho"
        const { container, span } = setup();
        expect(container).toBeInTheDocument();
        expect(span).toBe("2");
    })

})