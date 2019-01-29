

const takeItDown = (state, payload) => {
  console.log("I'm the reducerer")
  console.log(state)
  return !state
}

export {takeItDown};