import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList"
import Item from './Item';

it("renders without crashing", function () {
    render(<ShoppingList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add a new item", function () {
    // extracting our query selectors for the testing
    const { queryByText, getByLabelText } = render(<ShoppingList />);
    // we are checking only product so lets use the get LabelText
    const input = getByLabelText("Product");
    // grabbing our button by the text
    const btn = queryByText("Add Item");
    // we are making sure that the product we want to check is not in the form
    expect(queryByText("Product Name: Chocolate Milk")).not.toBeInTheDocument();
    // this is basically us filling out the form , we are selecting the field and adding in the value
    fireEvent.change(input, { target: { value: "Chocolate Milk" } });
    // now we submit 
    fireEvent.click(btn);
    expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
    // and we can follow the same steps for quantity
})

