# React Ecommerce Website

Commerce.js, Stripe for card transactions, Material UI for interface, Scalable React folder structure

### Notes

Delete src folder and create new src folder and put new index.js and App.js. Test for clean initial app.
Create components folder -> Products folder -> Products.jsx

In JSX, when looping through something you always need a key/id
xs={12} means this will take full width on mobile devices
sm={6} for small devices this will take 6 spaces out of 12 or 2 will be in the same row

Create Product folder under Products folder. In Product folder, create Product.jsx and styles.js

export default makeStyles(() => ({
//this format indicates an instant return - the parenthesis around the {}
}))

For each specific component, we have a new styles component file for them. This way we have multiple files and not one file with thousands of lines for styling.

Create Navbar
Setup Commerce.js and get public API key. Place the API key in .env since this file won't be published to GitHub

Commerce.js will do all the backend stuff for us. Add the products and map correct fields.

In Product.jsx, dangerouslySetInnerHTML={{ __html: product.description }} - renders the HTML in the API under product description

Create Add To Cart functionality using Commerce.js.
In App.js, setCart(await commerce.cart.retrieve()); - retrieves and immediately setting the state

Create Cart Layout
Create Cart Items Layout

Add React Router
Add routing for logo to home and cart to cart. Use useLocation hook to determine if we'll show the cart icon or not.

Update Cart Functionality (adding quantity, removing items, empty cart)
All backend functionality of adding/removing items, changing quantity, empty cart is done by Commerce.js
Solution for prop drilling: useContext

Create base CheckoutForm
Initial checkout form include the steps (shipping address, payment details) and confirmation routing

    Create AddressForm
    	use react-hook-form for form inputs https://react-hook-form.com/
    	import { useForm, FormProvider } from 'react-hook-form'
    	Grid used for separating/spacing out all our input fields
    	Create CustomTextField.jsx
    	Create fetch countries functionality and checkoutToken
    		Why did we have to create a function if we only have to call it immediately afterwards?
    			In useEffect, you cannot use async unless it's a new function

### Copyright & Credits

Everything I learned in this project was through the help of [Adrian Hajdin](https://github.com/adrianhajdin).

Kindly visit him at [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A).

### `npx create-react-app`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm i @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-hook-form`
