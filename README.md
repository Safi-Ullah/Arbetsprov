This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Problem statement
Mind, the specification was created by a team of management consultants, sold by a dedicated and customer-pleasing team of salespersons lacking in nothing but their total disregard of realistic deadlines and developer frustration levels, to a customer now chomping at the bit to release the feature to thousands of customers. Failure is not an option, and it is up to you to ship this feature and save the world by doing so.

## The task
Build a task tracking application. Add any feature that might enhance this simple application and staple of programming lore. There are a few requirements for you to follow. See below for instructions. 

## Specification

Below is the basic layout of the application you have to create. 

### Minimum functionality
Create, display, complete, update, assign and delete tasks. 

### Story points 
Each task should have an assigned complexity index from 0-10

### States
A task can have the following states: 
created, active, completed, onhold and deleted. 

The status can only be changed according to the following rules.
- A task can only be completed after being set to active.
- A task can only become active after being assigned a dev
- A task can only go from onhold to active or deleted 

### Basic layout
The tasks should be presented in columns representing the available states. Deleted tasks should not be presented in a column but rather have a separate view. It should be possible to sort the tasks in a column according to level of complexity, see story points. 

### UI/UX
The designer is on vacation, it is up to you to imagine and construct a neat and customer facing interface. 

## Requirements
- All logic must reside in a single HOC component.
- Use Hooks.
- All components must be functional components.
- The application must be deterministic.
- All components other than the HOC component housing the logic must be stateless at all times.
- Use Jest to test your components.
- GIT is to be used at all times, it is essential that your development process can be followed through your commits.  

## Focus
Performance, performance, performance and more performance. Keep it simple, keep it smart, make it fast, make it fun and for [insert deity of choice] don't use libraries.

## Demo

App demo can be found here [here](https://task-tracking-demo.herokuapp.com).

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
