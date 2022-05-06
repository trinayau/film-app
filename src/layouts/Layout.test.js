/** @jest-environment jsdom */

import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '.';

describe('Layout', () => {

    beforeEach(() => {
        render(<MemoryRouter><Layout /></MemoryRouter>);
    });

    test("Displays a nav bar", () => {
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();;
    })

    test("Displays 3 links", () => {
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(3);
    })

    test("Displays an about link", () => {
        const link = screen.getByRole("link", {name: "About"});
        expect(link.getAttribute("href")).toEqual("/about");
        expect(link).toBeInTheDocument();
    })
});