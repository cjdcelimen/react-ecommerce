# React Ecommerce Website

- Commerce.js
- Stripe for card transactions
- Material UI for interface
- Scalable React folder structure

### Notes

1. Delete src folder and create new src folder and put new index.js and App.js

   - test for clean initial app
   - create components folder -> Products folder -> Products.jsx

2. In JSX, when looping through something you always need a key/id

   - xs={12} means this will take full width on mobile devices
   - sm={6} for small devices this will take 6 spaces out of 12 or 2 will be in the same row

3. Create Product folder under Products folder. In Product folder, create Product.jsx and styles.js

   - export default makeStyles(() => ({ }))
   - this format indicates an instant return - the parenthesis around the {}

4. For each specific component, we have a new styles component file for them. This way we have multiple files and not one file with thousands of lines for styling.

5. Create Navbar, setup Commerce.js and get API key. Commerce.js will all the backend stuff for us. Add the products and map correct fields.
   - in Product.jsx, dangerouslySetInnerHTML={{ __html: product.description }}
   * renders the HTML in the API under product description
6. Create Add To Cart functionality using Commerce.js.

   - in App.js, setCart(await commerce.cart.retrieve()); - retrieves and immediately setting the state

7. Create Cart Layout and Cart Items Layout
8. Add React Router
   - add routing for logo to home and cart to cart. Use useLocation hook to determine if we'll show the cart icon or not.
9. Update Cart Functionality
   - adding quantity, removing items, empty cart)
   - all backend functionality of adding/removing items, changing quantity, empty cart is done by Commerce.js
   - solution for prop drilling: useContext
10. Create base CheckoutForm
    - initial checkout form include the steps (shipping address, payment details) and confirmation routing
11. Create AddressForm

    - use react-hook-form for form inputs https://react-hook-form.com/

12. Create CustomTextField.jsx
    create fetch countries functionality and checkoutToken

### Copyright & Credits

Everything I learned in this project was through the help of [Adrian Hajdin](https://github.com/adrianhajdin).

Kindly visit him at [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A).

#### `npx create-react-app`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### `npm i @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-hook-form`

Initial dependencies

#### `import { useForm, FormProvider } from 'react-hook-form'`
