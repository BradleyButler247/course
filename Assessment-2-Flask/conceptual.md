### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript? 
	- Javascripts flexibility makes it more difficult to read
	- Python is commonly used for server-side scripting, javascript is commonly used for client-side scripting
	- Python typically requires an interpreter, javascript's ability to run is typically built in to browsers

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming crashing.
	- .get(key) & try-except(key error) block

- What is a unit test?
	- Testing an individual function

- What is an integration test?
	- Testing the interaction between multiple functions

- What is the role of web application framework, like Flask?
	- It allows developers to easily start project as well as scal them into apps. It also makes apps easier to deploy and test

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  -  Query parameters are best used when sorting/filtering resources, route parameters are typically used to identify a specific resource

- How do you collect data from a URL placeholder parameter using Flask?
	- @app.route('/< placeholder >') will create a url for all values that placeholder is set to. Next pass 'placeholder' into the route function. Then, if 'placeholder' = 'birds' it will direct the user to /birds which, if valid, will display all data on the '/birds' page.
	- You can use request.form.get('key') to get all data associated to a specified key that may or may not exist 
	
- How do you collect data from the query string using Flask?
	- request.args['key'] will get the data associated to the requested key, if you are unsure the key you are requesting exists you can use request.args.get('key')
	
- How do you collect data from the body of the request using Flask?
	- If the data can't be parsed as form data, then use request.data

- What is a cookie and what kinds of things are they commonly used for?
	- Text files containing data about your computer/you as a user on the server of a website. An example is storing a username/password so that a user can remain logged in even after closing and reopening a website. It is also how companies are able to store items "in your cart" when online shopping, or score data for online games and apps.

- What is the session object in Flask?
	- It is essentially a cookie; it tracks session data in a key-value pair that is associated to a user so that it can be accessed the next time a user accesses a site.

- What does Flask's `jsonify()` do?
	- It converts json data from json format to an output response object. It allows python to return json data.