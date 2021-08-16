### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON web token, used liike session in flask to pass information around the browser
- What is the signature portion of the JWT?  What does it do?
the signiature portion is used to add security so people cant find the pattern and get into routes they arent supposed to
- If a JWT is intercepted, can the attacker see what's inside the payload?
yes they can but if they dont have the secret key they be able to do anything with it
- How can you implement authentication with a JWT?  Describe how it works at a high level.
you can use middleware to see if a certain user is signed in or an admin by passong those variables in the payload
- Compare and contrast unit, integration and end-to-end tests.
unit- specific tests for each function
intgration- used to see how certain things work together
end to end- used to test the full function of the application
- What is a mock? What are some things you would mock?
a mock is when something you are testing has external dependencies. these would be good for functions that calls an api and all you want to find out if the function is working correctly
- What is continuous integration?
automating the code chanegs on a project from multiple people
- What is an environment variable and what are they used for?
variables set in a seperate text file that you want to include in the code but in sensitive information
- What is TDD? What are some benefits and drawbacks?
Test Driven Development
benefits- know that your code works as you are going along
drawbacks- takes extra time
- What is the value of using JSONSchema for validation?
the value is being able to have a fast validation for what is required when you pass in json to create or update
- What are some ways to decide which code to test?
test the main functions
- What does `RETURNING` do in SQL? When would you use it?
returning lets you see if the information that was added or updated was done correctly, then you can use the new information without making another query
- What are some differences between Web Sockets and HTTP?
web sockets are bi directional. https needs a requiest from the client to work each time while web sockets can send information form the server to the client and voce versa
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  i enjoyed flask because of the syntax and wording of python.
  i enjoy express because its all js for an application so it wont screw you up
  overall i enjoy express more mainly because i dont have to switch between languages but i can see the use cases for flask and python
