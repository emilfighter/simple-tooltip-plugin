# simple-tooltip-plugin

#### What for?
Simple Tooltip Plugin is a script that you can use when you need to show to the application user additional information, clarification about form fields, about labels, about incomprehensible elements. When you hover a specific item, tooltip area and its description will be shown.

#### How to use it?
First of all, you need to create HTML partial with element to hover and with attributes to be shown after hovering.
Please be noted that tooltip itself has few states.

* Tooltip which will be shown over the hovered element (mode: 'top')
* Tooltip which will be shown under the hovered element (mode: 'bottom')
* Tooltip with title (data-tip-title="some title here...")
* Basic tooltip (just text, no title given)

#### Dependencies

* jQUery -> Simple Tooltip Plugin operates on the basis of jQuery