const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if(response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch puzzle')
      }
    }).then((data) => {
      return data.puzzle
    })
}


const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  
      if(response.status === 200) {
        const data = await response.json()
        const country = await data.find((c) => c.alpha2Code === countryCode)
        return country.name
      } else {
        throw new Error('Unable to fetch data')
      }
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//       const countries = JSON.parse(e.target.responseText)
//       const country = countries.find((c) => c.alpha2Code === countryCode)
//       resolve(country.name)
//     } else if(e.target.readyState === 4) {
//       reject('Unable to fetch data')
//     }
//   })
  
//   countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })