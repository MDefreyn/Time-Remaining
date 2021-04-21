const View = {

  render({ mins, secs }) {
    const timer = document.getElementById('timer')
    timer.innerHTML = (
      `<p>Próximo Post em:</p>
      <span>${mins}:${secs}</span>`
    )
  }

}

export { View }