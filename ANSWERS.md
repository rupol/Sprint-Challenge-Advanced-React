- [x] Why would you use class component over function components (removing hooks from the question)?

Before hooks, class components were the best way to deal with state in an application. In class components, you can use this.state and setState to set and change state in a class component and can tap into a component's lifecycle using componentDidMount, componentWillUnmount, etc., which you couldn't do in functional components before React 16.8.

- [x] Name three lifecycle methods and their purposes.

componentDidMount() - is called when the component is rendered for the first time; used for loading data, API calls, etc.

componentDidUpdate() - is called when changes have been committed to the DOM; used to access prevState and set state.

componentWillUnmount() - is called just before a component is removed from the DOM; used for any cleanup associated with the component (removing event listeners, network requests, etc)

- [x] What is the purpose of a custom hook?

By combining several hooks into one custom hook, you are keeping your stateful logic DRY and are able to reuse the custom hook over and over.

- [x] Why is it important to test our apps?

Automated testing of apps during development helps developers write better code and surfaces bugs while also acting as a documentation for the codebase for future developers to be able to parse the codebase easier.
