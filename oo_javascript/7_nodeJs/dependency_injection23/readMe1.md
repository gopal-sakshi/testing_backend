DI
- design pattern that decouples dependencies from a class or module
- to decouple the <creation of objects> from their <usage>

`With DI`
Imagine a web application requiring a database connection
Instead of hardcoding the db connection details within each module or class, 
you can utilize DI to provide the necessary database connection as a dependency.

In this scenario, you can define an interface/class representing the database connection
Then, you can inject an instance of this db connection interface/class into the modules/classes that require database access.


`Without Dependency Injection`
- the modules/classes would need to 
    directly instantiate the database connection object and 
    manage the connection details themselves. 
- This tight coupling would make switching databases or performing unit testing challenging.

