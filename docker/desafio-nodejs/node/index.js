const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio-fc'
}

const mysql = require('mysql2');
const CREATE_TABLE_QUERY = `
    CREATE TABLE IF NOT EXISTS people (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );
`;


const CREATE_PEOPLE_QUERY = `
    INSERT INTO people (name) VALUES ('Matheus Moreira');
`;


let connection;
    const con = mysql.createConnection(config);
    connection = con
    connection.connect((err) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
    connection.query(CREATE_TABLE_QUERY);

const GET_PEOPLE_QUERY = `
    SELECT * FROM people;
`;


app.get('/', async (req, res) => {
    connection.query(CREATE_PEOPLE_QUERY, (err, rows) => {
        if (err) throw err;
        console.log('1 record inserted');
    });

    // get people and return it
    connection.query(GET_PEOPLE_QUERY, (err, rows) => {
        if (err) throw err;
        peopleFormatted = ""
        console.log("rows", rows)
        for (let i = 0; i < rows.length; i++) {
            peopleFormatted += `
                <p>${rows[i].name}</p>
            `;
        }
        res.send('<h1>Full Cycle Rocks!</h1>'+ peopleFormatted);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
