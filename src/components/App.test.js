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

it('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([])
})

// the use of back ticks denotes a special variable within the context of the App

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click')

  expect(app.state().gifts).toEqual([{ id: 1 }])
})