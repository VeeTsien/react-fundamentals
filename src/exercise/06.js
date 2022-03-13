// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputName = React.useRef('')
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const [error, setError] = React.useState('')
  const [isDisabled, setDisabled] = React.useState(false)
  const [username, setUsername] = React.useState()

  function handleChange(event) {
    var inputValue = event.target.value
    const isValid = inputValue === inputValue.toLowerCase()

    setDisabled(isValid ? false : true)

    if (!isValid) {
      setError('Username must be lower case')
      alert(error)
    }
  }

  function handleNameChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit} dis>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          ref={inputName}
          type="text"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lowercaseUsername">Lowercasified Username:</label>
        <input
          id="lowercaseUsername"
          value={username}
          type="text"
          onChange={handleNameChange}
        />
      </div>
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
