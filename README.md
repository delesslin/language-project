# First time downloading project:

`git clone https://github.com/delesslin/language-project.git`

# Updating local repository

`git pull origin master`

# Updating GitHub Master

`git pull origin master`
(To merge any changes to Master branch before adding your updates to ensure no conflicts)
`git push origin master`

# Minimum Viable Project

### Goal: Jan 1, 2021

#### Public Features

- App easily available to the public on android, iOS, and web platforms
- Word Count increased from approximately 35 to 100
- Users can hear pronunciations for all words
- Users can search for words
- Users can play at least 2 games to practice words

#### Admin Features

- Admin panel on web application accessible through secure login
- Permission controls to limit what admin panel users can edit
- Admins can add or edit words in the application
- Admins can record pronunciations in the app
- Admins can add photographs in the app

# Opinions 👽
### React App File Structure
The `/app/src` folder follows the Folder/File structure used in Sara Vieira's *THE OPINIONATED GUIDE TO REACT*

Example:
```
├── src
| ├── index.js
| ├── Components/
| ├──── Button/
| ├────── index.js
| ├── Pages/
| ├──── Homepage/
| ├──── Screens/
| ├────── Hero/
| ├────── index.js
| ├──── index.js
| ├── index.js
| ├── utils/
| ├──── hooks/
| ├────── useLocalStorage.js
| ├──── date.js
| ├── assets/
| ├──── icons/
| └──── images/
```
### React File Naming
Every high-level Component or Page gets its own folder with an expressive name and inside that folder there will be in `index.js` file which is the only way that exterior files should be accessing the contents of the folder. Other contents of the folder are flexible.

Example:
```
| ├──── Login/
| ├────── index.js
| ├────── Buttons/
| |--------index.js
| |--------RegisterButton.js
```
React understands these three import statements the same way, assuming the above file structure:
```javascript
import Login from './Login/index.js'
```
vs
```javascript
import Login from './Login/index'
```
vs
```javascript
import Login from './Login
```


# TODOs 📎
1. Refactor React app state to only use the native react Context and State
