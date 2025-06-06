# 03a [Individual] Data parsing server - Part III

**Type**: Individual

This is a continuation of the assignment: Data parsing server - Part I and Part II

Create a new server in another language than previously. 

Create endpoints for each data parsing task that serves the data. 

There should be an endpoint for each: XML, CSV, YAML, TXT and JSON. 

Make the two servers communicate. 

Let's call the server from the assignment Part II (Server A) and the one here (Server B).

If I make a GET request to Server A, it should act as a client for Server B, get the response from Server B and give it to me as a response. 

...and...

If I make a GET request to Server B, it should act as a client for Server A, get the response from Server A and give it to me as a response.

Avoid making extra work such as creating frontends for the servers.

If you are pressed for time then a full setup is not required as long as you show that you can make two servers communicate.

<img src="./Data_parsing_server_Part_III.png">



I decided to make a data parsing server A in Python and the data parsing server B in JavaScript. 
Remember to start start both servers to be able to communicate with them both.



**Base Javascript URL**: 127.0.0.1:8080


# Endpoints to get the data from Server B (JavaScript_Server)


* **/csv/js**
* **/json/js**
* **/txt/js**
* **/xml/js**
* **/yaml/js**


# Endpoints to get data through Server A (Python_Server)

* **/csv/py**
* **/json/py**
* **/txt/py**
* **/xml/py**
* **/yaml/py**



# Python Server A GitHub Link
https://github.com/Marcus-K-Thorsen/02a._Data_parsing_server_part_2.git

