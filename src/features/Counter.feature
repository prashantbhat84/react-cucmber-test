Feature: Counter
It displays increment /decrement counter starting at 0

Scenario: Showing 0 initially
    Given  mount counter
    When  initially
    Then Counter should show 0

Scenario: Clicking Increment increments the counter
    Given mount counter
    When Clicking Increment
    Then Counter should show 1

Scenario: Clicking Decrement decrements the counter
    Given mount counter
    When Clicking Decrement
    Then showing -1
    