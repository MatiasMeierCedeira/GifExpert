import { render } from "@testing-library/react";
import { GiftItem } from "../../src/Components/GiftItem";

describe('Pruebas en GiftItem.jsx', () => {
    test('Debe hacer match con el snapshot', () => {
        render(<GiftItem />);
    });
});