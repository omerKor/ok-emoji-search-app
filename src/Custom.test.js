import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react"
import Header from "./Header"


describe(`checkıngSıte`, () => {
    let input
    beforeEach(() => {


    })

    test("Header check", () => {
        render(<Header />);
        const headerText = screen.getByText(/Emoji Search/i);
        expect(headerText).toBeInTheDocument();
    });

    test("Emoji list must be rendered while filtering", () => {
        render(<App />);
        const inputText = screen.getByText("1234");
        expect(inputText).toBeInTheDocument("1234");
    });

    test("Emoji list must be rendered successfully", () => {
        render(<App />);
        const items = screen.getAllByTestId("row");
        expect(items.length).toEqual(20);
    });

    test("it click on emoji  must be copied", () => {
        render(<App />);
        const clicks = screen.getAllByTestId("row");
        expect(clicks[0]).toHaveAttribute("data-clipboard-text");
    });

})