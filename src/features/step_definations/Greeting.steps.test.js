import { screen, render } from '@testing-library/react'
import Greeting from '../../Components/Greeting';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/Greeting.feature');

defineFeature(feature, (test) => {
    describe("Greeting", () => {
        test("Shows Hello World initially", ({ given, then }) => {

            given("component Mount", () => {
                render(<Greeting />)
            });
            then("shows Hello World", () => {
                const helloWorldEL = screen.getByText("Hello World", { exact: false });
                expect(helloWorldEL).toBeInTheDocument();
            })

        })
    })
})