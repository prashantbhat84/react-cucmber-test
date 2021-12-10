import {screen,render} from '@testing-library/react';
import {defineFeature,loadFeature} from 'jest-cucumber'
import userEvent from '@testing-library/user-event';
import App from '../../App';

const feature= loadFeature('./src/features/Counter.feature');

defineFeature(feature, test=>{
    test("Showing 0 initially",({given,when,then})=>{
        given('mount counter',()=>{
            render(<App/>)
        });
        when("Initially",()=>{
            //do nothing
        });
        then("Counter should show 0",()=>{
            const counter=screen.getByText('0');
          expect(counter).toBeInTheDocument();
        })

    })
    test("Clicking Increment increments the counter",({given,when,then})=>{
        given('mount counter',()=>{
            render(<App/>)
        });
        when("Clicking Increment",()=>{
           
            userEvent.click(screen.getByText("Increment"))
        });
        then("Counter should show 1",()=>{
            const counter=screen.getByText('1');
          expect(counter).toBeInTheDocument();
        })

    })
    test("Clicking Decrement decrements the counter",({given,when,then})=>{
        given('mount counter',()=>{
            render(<App/>)
        });
        when("Clicking Decrement",()=>{
           
            userEvent.click(screen.getByText("Decrement"))
        });
        then("Showing -1",()=>{
            const counter=screen.getByText('-1');
          expect(counter).toBeInTheDocument();
        })

    })
})