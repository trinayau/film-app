/** @jest-environment jsdom */

import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import WorkPage from '.';

jest.mock('axios');

describe('WorkPage', () => {

    let component;

    beforeEach(() => {
        jest.resetAllMocks();
    });

    test("Calls the API", async () => {
        act(() => {
            axios.get.mockResolvedValue({ name: "Heavy Object", summary: "Debugging" });
            render(<MemoryRouter><WorkPage /></MemoryRouter>);
        });
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith("https://api.tvmaze.com/singlesearch/shows?q=Heavy Object");
        const heading = await screen.findByRole("heading");
        expect(heading.textContent).toEqual("Heavy Object")
    })
});