// Import the required modules
const express = require('express');

// Import the Database
const connection = require('./database');

// Create an instance of the Express application
const app = express();

connection.connect((err) => {
    if (err){
        console.log("Error ouccer to MySQL database");
        console.log(err);
        return ;
    }
    
    console.log('Connected to MySQL database');
});

function Stoi(a)
{
    let ans = 0;
    for(let i=0; i<a.length; ++i)
    {
        ans = ans*10 + a.charCodeAt(i)-48;
    }

    return ans;
}

app.get('/v1/get_player_average', async (req, res) => {
    
    connection.query('SELECT * FROM abcd', (error, result, fields) => {
       
        if (error) {
            console.log(error);
            res.send("Better Luck Next Time");
        }
        
        
        let scoreArray = [];
    
        for(var i=0; i<result.length; ++i)
        {
            let name = result[i].p_name;
            let count = 0;
            let sum = 0;
            
            delete result[i].p_name;
            var keys = Object.keys( result[i] );
            keys.sort( function ( a, b ) { 

                let numa = a.substring(5);
                let numb = b.substring(5);
                return Stoi(numb)-Stoi(numa); 
            });


            for(var j = 0; j<5 && j<keys.length; ++j)
            {
                sum += result[i][keys[j]];
                count++;
            }
        
            averegescore = sum/count;
            scoreArray.push({name,averegescore});
            
        }

        return res.json(scoreArray);
    });
    
});

app.get('/', async (req, res) => {
    
    connection.query('SELECT * FROM abcd', (error, result, fields) => {
       
        if (error) {
            console.log(error);
            res.send("Better Luck Next Time");
        }
        
        
        let scoreArray = [];
    
        for(var i=0; i<result.length; ++i)
        {
            let name = result[i].p_name;
            let count = 0;
            let sum = 0;
            
            delete result[i].p_name;
            var keys = Object.keys( result[i] );
            keys.sort( function ( a, b ) { 

                let numa = a.substring(5);
                let numb = b.substring(5);
                return Stoi(numb)-Stoi(numa); 
            });


            for(var j = 0; j<5 && j<keys.length; ++j)
            {
                sum += result[i][keys[j]];
                count++;
            }
        
            averegescore = sum/count;
            scoreArray.push({name,averegescore});
            
        }

        return res.json(scoreArray);
    });
    
});

// Start the server
app.listen(3000, (req,res) => {
  console.log('Server started on port 3000');
});




// Link : https://subtlerrr-assignment.onrender.com/v1/get_player_average;
