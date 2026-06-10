import React, { useState } from "react";
import "./E_Catering.css"; // Add CSS file for styling

const E_Catering = () => {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");

  // Function to handle adding items to the cart
  const addToCart = (name, price) => {
    setCart((prevCart) => [...prevCart, { name, price }]);
  };

  // Calculate total amount from the cart items
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  // Handle form submission

   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!email) {
       alert("Please enter an email.");
       return;
     }

     if (cart.length === 0) {
       alert("Your cart is empty.");
       return;
     }

     try {
       const response = await fetch("http://localhost:8080/send-email", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           email,
           cart,
           totalAmount,
         }),
       });

       const result = await response.json();

       if (response.ok) {
         alert("Email sent successfully!");
         setCart([]); // Clear the cart
         setEmail(""); // Clear email field
         document
           .querySelectorAll(".Food_Form input")
           .forEach((input) => (input.value = "")); // Clear other fields
       } else {
         alert(result.error || "Failed to send email.");
       }
     } catch (error) {
       console.error("Error sending email:", error);
       alert("Something went wrong.");
     }
   };

  return (
    <div className="MainFoodContainer">
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1 className="hero_header">Order Your Best Food Anytime</h1>
            <button className="btn222 btn-primary">Learn More</button>
          </div>

          <div className="hero-image">
            <img src="/images/img4.png" alt="Hero" />
          </div>
        </section>

        {/* Form Section */}
        <div className="form_Container">
          <form className="Food_Form" onSubmit={handleSubmit}>
            <label>
              <i className="fas fa-user"></i> Passenger Name:
            </label>
            <input
              type="text"
              className="Food_Form_Train_Name"
              placeholder="Enter Train Name"
            />
            <label>
              <i className="fas fa-envelope"></i> Passenger Email:
            </label>
            <input
              type="email"
              className="Food_Form_Passenger_Email"
              placeholder="Enter Passenger Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>
              <i className="fas fa-phone"></i> Phone Number:
            </label>
            <input
              type="text"
              className="Food_Form_Number"
              placeholder="Enter Phone Number"
            />
            <input type="submit" className="Food_Submit" value="Submit Order" />
          </form>
        </div>

        {/* Popular Dishes Section */}
        <section className="popular-dishes">
          <h2>Popular Dishes</h2>

          <div className="dishes">
            <div className="dish" data-img="5.png">
              <img src="images/img88.jpg" alt="Paneer Tikka" />
              <h3>Panner Tikka</h3>
              <p>Cheese and Butter</p>
              <span className="price">Rs.200/-</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart("Panner Tikka", 200)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="dish" data-img="4.png">
              <img src="images/img11.jpg" alt="Veg Briyani" />
              <h3>Veg Briyani</h3>
              <p>Potato wedges</p>
              <span className="price">Rs.250/-</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart("Veg Briyani", 250)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="dish" data-img="2.png">
              <img src="images/img22.jpg" alt="Misal Pav" />
              <h3>Misal Pav</h3>
              <p>Onion with butter</p>
              <span className="price">Rs.80/-</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart("Misal Pav", 80)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="dish" data-img="1.png">
              <img src="images/img33.jpg" alt="Vada Pav" />
              <h3>Vada Pav</h3>
              <p>Roasted Potato</p>
              <span className="price">Rs.20/-</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart("Vada Pav", 20)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Cart Details Section */}
        {cart.length > 0 && (
          <section className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span> <span>Rs.{item.price}/-</span>
                </div>
              ))}
            </div>
            <div className="total">
              <h3>Total: Rs.{totalAmount}/-</h3>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default E_Catering;
