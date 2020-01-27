- [ ] Why would you use class component over function components (removing hooks from the question)?
      Class components are helpful when you need to maintain state and control state in that component. Doing so, gives you more control in the lifecycle method.

- [ ] Name three lifecycle methods and their purposes.
      Mounting Phase: This processess the intial data that is defined in the constructor, thus the render method is invoked. If stated the componentDidMount will be invoked as well.
      Updating Phase: setState can be used to change the state to rerender to component, shouldComponentUpdate will stop a component a render if necessary.
      Unmounting Phase: The component is removed, component WillUnmount can clean up anything else.

- [ ] What is the purpose of a custom hook?
      The purpose of custom hook is to manage state inside of a hook. This hook is reusable among the app. It also keeps components light weight.

- [ ] Why is it important to test our apps?
      It's important to test our app for edge cases; if we build out our apps without testing; with that our apps can become faulty as time progresses; troubelshooting will be difficult as the project grows bigger.
