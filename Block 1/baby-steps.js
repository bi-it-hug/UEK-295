function calcSum() {
    return process.argv.slice(2).map(Number).reduce((acc, val) => acc + val)
}

console.log(calcSum())
