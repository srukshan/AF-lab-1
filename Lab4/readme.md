##Objective: Teach main features of NodeJS runtime + JavaScript library
####1.  Hello world.
    1.  Check the node version of the machine by issuing the following command.
        ```
        node –version
        ```
    2.  Create a file named app.js.
    3.  Use default console log command to print string to the console.
        ```
        console.log('Hello World');
        ```
    4.  Type the following command in the command prompt (Command should be opened in the working directory).
        ```
        node app.js
        ```
####2.  Use OS system library.
    1.  Import the OS system module to your file.
        ```
        const os = require('os');
        ```
    2.  Obtain System architecture, platform and number of CPUs from the OS module and print them to the console.
        ```
        console.log('Architecture ' + os.arch());
        console.log('CPUs ' + os.cpus().length);
        console.log('OS ' + os.platform());
        ```
    3.  Run application and check the output.
####3.  Read a file.
    1.  Create a file named test.txt and add the following content.
        NodeJS is awesome.
    2.  Import the fs system module to read the file.
        ```
        const fs = require('fs');
        ```
    3.  Use the system variable __dirname to set the file location.
        ```
        const fileName = __dirname + '/test.txt';
        ```
    4.  Read the file using readFileasynchronous method and print the content of the file to console.
        ```
        fs.readFile(fileName, (err, data) => {
            if (err) {
                console.error(err);
            }
            
            console.log(data.toString());
        });
        ```
    5.  Try printing the value of data without toString method.
    6.  Use the readFileSync method to read the file synchronously.
        ```
        const data = fs.readFileSync(fileName);
        console.log(data.toString());
        ```
####4.  Use streams to copy content of a file.
    1.  Add two variables containing path to the source and destination files.
        ```
        const fileName = __dirname + '/test.txt';
        const outFileName = __dirname + '/test-copy.txt';
        ```
    2.  Create read stream and write stream from the source file and destination file respectively.
        ```
        const readStream = fs.createReadStream(fileName);
        const writeStream = fs.createWriteStream(outFileName);
        ```
    3.  Pipe the read stream to write stream.
        ```
        readStream.pipe(writeStream);
        ```
    4.  Verify the file named test-copy.txt is being created with the same content as the test.txt.
    5.  Optionally listen to the data event of the read stream and print the output.
        ```
        readStream.on('data', data => {
            console.log(data.toString());
        });
        ```
####5.  Http Server
    1.  Import the http module from the core libraries.
        ```
        const http = require('http');
        ```
    2.  Create a httpServerthat listens to port 3000 and return HTML with Hello World text in h1 header upon GET request.
        ```
        http.createServer((req, res) => {
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>Hello World</h1>');
            res.end();
        }).listen(3000);
        ```
    3.  Check the output of the code by running the code and accessing http://localhost:3000 in browser.
    4.  Optionally add a POST request that accepts form field name and return HTML with Hello {name}.