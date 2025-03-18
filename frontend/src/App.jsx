import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Teste a rota /api/test do backend
    fetch('/api/test')
      .then(response => response.json())
      .then(data => console.log('Resposta do backend:', data))
      .catch(error => console.error('Erro:', error))
  }, [])

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-blue-600">HemoWeb</h1>
      <p>Frontend + Backend integrados!</p>
    </div>
  )
}

export default App