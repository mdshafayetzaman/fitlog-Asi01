export const getLibrary = async () => {
  const response = await fetch('http://localhost:3000/data.json')

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data
}
