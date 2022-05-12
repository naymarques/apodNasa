$(document).ready(function () {
  $('#btn').click(function (e) {
    e.preventDefault()
    sendApiRequest()
  })

  async function sendApiRequest() {
    const apiKey = 'YUlbchH22m4eQP4T3ldCkw8E7hWmqOHaLyKmcyjt'
    const inData = $('#dataInput').val()
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inData}`
    )
    console.log(response)
    const data = await response.json()
    console.log(data)

    document.querySelector('#tituloImg').innerHTML = data.title
    document.querySelector('#explica').innerHTML = data.explanation

    if (data.media_type == 'image') {
      document.querySelector(
        '#imgNasa'
      ).innerHTML = `<br><img width="700px" height="450px" src="${data.url}">`
    } else {
      document.querySelector(
        '#imgNasa'
      ).innerHTML = `<br><iframe width="700px" height="450px" src="${data.url}">`
    }
  }
})
