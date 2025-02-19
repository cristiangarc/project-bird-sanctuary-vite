import { useState } from "react";

const Checkout = ({ clearCart, cartLength }) => {
  const [userDetails, setUserDetails] = useState({
    firstName:"",
    lastName:"",
    email:"",
    zip:""
  });

  const reset = () => {
    // reset the form/state
    setUserDetails({
      firstName:"",
      lastName:"",
      email:"",
      zip:""
    })
  }

  const handleTextChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartLength > 0) {
      alert("You have successfully adopted birds. Thank you!");
      clearCart();
      reset();
    } else {
      alert("Please at least one bird to the cart!")
    }
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
          value={userDetails.firstName}
          onChange={handleTextChange}
          type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
          value={userDetails.lastName}
          onChange={handleTextChange}
          type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="email">
          Email:
          <input
          value={userDetails.email}
          onChange={handleTextChange}
          type="email" name="email" id="email" />
        </label>
        <label htmlFor="zip">
          Zip code:
          <input
          value={userDetails.zip}
          onChange={handleTextChange}
          type="number" name="zip" id="zip" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
