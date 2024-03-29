# V0.1.0 - Initial Public Release

## Minimum Viable Product

### Goal: Jan 1, 2021

#### Public Features
- Users can play at least 2 Exercises to practice words
- App easily available to the public on android, iOS, and web platforms (defer to MVP 2)
- Users can search for words
- Users can hear pronunciations for all words
- Word Count increased from approximately 35 to 100

#### Admin Features
- Admin panel on web application accessible through secure login
- Permission controls to limit what admin panel users can edit
- Admins can add or edit words in the application
- Admins can record pronunciations in the app
- Admins can add photographs in the app

#### Future Feature Requests:
- the audio files are inconsistent in terms of volume and clarity.
- grammar lessons
- <https://paddle.com/blog/why-we-created-an-email-system-using-react/>
- Export data as .csv file
- Refactor media queries into theme queries
- Add custom image url to edit/new word
- Consolidate batch-upload & word-upload APIs...should presuume an Array of length > 0
- handle multiple images and multiple recordings and multiple translations and multiple etc
- Sanitize data so that strings don't begin or end with ' '
- Get permission before recording
   1. Recording symbol is permanent
- add 30 more words (currently 112)
   1. Reintroduce way to see that data easily on admin panel

# Opinions 👽

### React App File Structure

The `/app/src` folder follows the Folder/File structure used in Sara Vieira's _THE OPINIONATED GUIDE TO REACT_

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

### Styles

Although the app currently uses Material-ui design system/components for quick prototyping, which comes with its own 'styled' functionality, components should be styled using the styled-components pacakge. The syntax is much more intuitive for CSS users than re-learning CSS properties as JS Object properties (which is what Material UI requires).
Examples:

```javascript
// use . syntax for any native HTML elements
const RedCircle = styled.div`
  background-color: red;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`
// Declare styled component outside the body of the react component
const ColorfulComponent = () => {
  // Declare styled components just like you would any other react component
  return <RedCircle />
}
```

styled-components also make it easy to extend styles.
For example (continuing earlier example):

```javascript
// Use ( ) syntax for any non-native html components, such as custom made components and Material UI components
const BlueCircle = styled(RedCircle)`
  background-color: #0000ff;
`

const ColorfulComponents = () => {
  return (
    <div>
      <RedCircle />
      <BlueCircle />
    </div>
  )
}
```

styled-components have a lot of other features including SASS style nesting & changing style properties based on props passed to the component. check it out at: (https://styled-components.com/docs/basics#adapting-based-on-props)

# Working with this repo

## First time downloading project:

`git clone https://github.com/delesslin/language-project.git`

## Updating local repository

`git pull origin master`

## Updating GitHub Master

`git pull origin master`
(To merge any changes to Master branch before adding your updates to ensure no conflicts)
`git push origin master`
