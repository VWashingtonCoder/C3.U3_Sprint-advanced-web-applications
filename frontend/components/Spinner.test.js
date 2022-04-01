// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Spinner from "./Spinner"

test('sanity', () => {
  expect(true).toBe(true)
})

test('spinner renders correctly when on', () => {
  render(<Spinner on={true} />)
  const loading = screen.getByText('Please wait', {exact:false})
  expect(loading).toBeVisible()
  expect(loading).toBeInTheDocument()
})