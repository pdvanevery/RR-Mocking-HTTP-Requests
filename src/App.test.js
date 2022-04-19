import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import App from "./App.js"

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })



test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
  })


test('link to GitHub button', async () => {
    fetch.mockResponseOnce(JSON.stringify({url: 'www.myfakegithubprofileurl.com'}))
    render(<App />)
    
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', 'www.myfakegithubprofileurl.com')
})