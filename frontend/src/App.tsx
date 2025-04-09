import './App.css'

function App() {
  fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error fetching tasks:', error));

return (
  <>
    <h1>Flogger</h1>
  </>
)
}

export default App
