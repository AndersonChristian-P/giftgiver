import React from "react"
import { shallow } from "enzyme"
import App from "./App"

// create a local copy of the App component
// by shallowly rendering it
// The shallow function takes in JSX as an
// argument. It then returns an object
// that represents our App component in
// our test environment

const app = shallow(<App />)

// unit test - one test that checks a very
// small piece of behavior on the app for
// proper behavior

it("renders correctly", () => {
  expect(app).toMatchSnapshot()
})
