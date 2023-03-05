import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import ProductRow from "./index";


jest.mock("axios");

const dummyProducts = [
    {
        colour: "Black",
        id: 1,
        img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    },
    {
        colour: "Stone",
        id: 2,
        img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    },
    {
        colour: "Black",
        id: 3,
        img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    },
    {
        colour: "Red",
        id: 4,
        img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    },
];

test("product list", async () => {
    axios.get.mockResolvedValue({ data: dummyProducts });
    render(<ProductRow />);

    const productList = await waitFor(() => screen.findAllByTestId("todo"));

    expect(productList).toHaveLength(1);
});