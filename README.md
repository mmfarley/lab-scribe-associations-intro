# Querying for Associated Resources

1. Clone down this repo: https://github.com/TriFrame/lab-scribe-associations-intro
2. cd into the repository, then install dependencies using `npm install`
3. Open the repository in your code editor
4. Start the project by running `npm start`
5. Open `src/models/User.js` and `src/models/Pet.js` in your code editor
	* Notice that these files contain the same code we've been writing in FormativeEducation
6. Open `src/App.js
7. Pass a template literal into `User.list()`.
	* Select the user's name
    * Select the users's pets
    	* Select the name of the user's pets
```js
User.list(`
	name,
	pets {
		name
	}
`)
```
8. On line 11, replace the empty array with `user.pets`
9. At this point, you should be able to see a list of pets under the name 'Melissa' in the browser