function configtojson(args = '') {
    const fs = require('fs')

    const regexpcomment = /#.+[A-Z]/gm
    const regexpSpace = /([^=\n\r]+)/gm

    file = args[2]
    let result = '{\n'

    let data = fs.readFileSync(file, 'utf8').replace(regexpcomment, '')
    data = data.match(regexpSpace)
    for (let i = 0; i < data.length; i += 2) {
        result += `\t"${data[i]}" : "${data[i + 1]}",\n`
    }

    fs.appendFile(file + '.json', result + '}', function (err) {
        if (err) {
            console.log('error')
        } else {
            console.log('File ' + file + '.json has been successfully created')
        }
    })
    return;
}

console.log(configtojson(process.argv))