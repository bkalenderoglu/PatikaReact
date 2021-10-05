import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");      
    });

    test("Default 3 object should be rendered", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test("Input and button should be exist", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("After clicking button string input shoul be listed", () => {
        // fill the input
        const name = "Beyza";
        userEvent.type(input, name);

        //click button
        userEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    });
});