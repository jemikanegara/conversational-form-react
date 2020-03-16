# Conversational Form with React

Notes: 
- Conditional things must be included in children tags, fieldset has no effect (<https://space10-community.github.io/conversational-form/docs/1.0.0/functionality/conditionals-and-branching/>). Falsy children will be disabled, if you want to hide the question then you should put the conditional inside all children tags.

- External Integration could be done inside flowStepCallback (<https://space10-community.github.io/conversational-form/docs/1.0.0/functionality/flowStepCallback/>)

- Create welcome message or any message using <cf-robot-message> tag (<https://space10-community.github.io/conversational-form/docs/1.0.0/functionality/cf-robot-message/>)

- There's some problem with react hooks useState to store the conversation-form, submitCallback will result to the initial value (just copying the value not the reference)