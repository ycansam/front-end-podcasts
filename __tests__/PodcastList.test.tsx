import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import PodcastsList from '@/components/TopPodcastsSection/PodcastsList/PodcastsList';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('PodcastsList component', () => {
    const podcasts: any = [
        {
            id: { attributes: { 'im:id': '1' } },
            'im:image': [{ label: 'image1' }, { label: 'image2' }, { label: 'image3' }],
            'im:name': { label: 'Podcast 1' },
            'im:artist': { label: 'Artist 1' },
        },
        {
            id: { attributes: { 'im:id': '2' } },
            'im:image': [{ label: 'image4' }, { label: 'image5' }, { label: 'image6' }],
            'im:name': { label: 'Podcast 2' },
            'im:artist': { label: 'Artist 2' },
        },
    ];

    const setup = () => {
        const container = render(<PodcastsList podcasts={podcasts} />, { wrapper: MemoryRouterProvider })
        const ul = screen.getByTestId('test-ul');
        const listElements = screen.getAllByTestId('test-li');
        return { ul, listElements, ...container, }
    }

    it('should render a list of podcasts', () => {
        const { ul, listElements, container } = setup();
        const links = screen.getAllByRole('link');
        expect(ul).toBeInTheDocument();
        expect(container).toBeInTheDocument();
    });

    it('should go to podcast/1', () => {
        const { container } = setup();
        const links = screen.getAllByRole('link');
        fireEvent.click(links[0]);
        expect(mockRouter.asPath).toEqual('/podcast/1')
    });
});