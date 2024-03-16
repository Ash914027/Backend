//put method
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world");
});

// POST method
app.post('/', (req, res) => {
    res.send("This is a POST request");
});

// DELETE method
app.delete('/', (req, res) => {
    res.send("This is a DELETE request");
});

// PATCH method
app.patch('/', (req, res) => {
    res.send("This is a PATCH request");
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});



//post method
//delete method
//patch method
//


