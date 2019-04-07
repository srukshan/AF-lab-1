// Q2
const os = require('os');

console.log('Architecture '+ os.arch())
console.log('CPUs '+ os.cpus().length)
console.log('OS '+ os.platform())

// Q3
const fs = require('fs')
const filename = __dirname + '/test.txt'

fs.readFile(filename, (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log(data.toString())
    }
})

const data = fs.readFileSync(filename)
console.log(data.toString())

// Q4
const outfilename = __dirname + '/test_copy.txt'

const inputstream = fs.createReadStream(filename)
const outstream = fs.createWriteStream(outfilename)

inputstream.pipe(outstream)

// Q5

const http = require('http')

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    switch(req.method){
    case 'GET':
        res.write('<h1>Hello World</h1>')
        break
    case 'POST':
        req.on('data', data => {
            res.write('<h1>Hello, ' + data + '</h1>')
        })
    }
    res.end();
}).listen(3000, err => {
    console.log('Server is listening to port 3000')
});