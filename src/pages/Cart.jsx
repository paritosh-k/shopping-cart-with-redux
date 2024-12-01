import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import Swal from 'sweetalert2';

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);


  const handleRemove = (productId) => {
    // Show Swal confirmation dialog
    Swal.fire({
      title: `Are you sure you want to delete this Product?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch the remove action only if the user confirms
        dispatch(remove(productId));

        // Show a success alert after removal
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been removed from the cart.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
            <span className='cartTotal'>Total: ${totalPrice.toFixed(2)}</span>

          </div>
        ))}
      </div>
    </div>
  );
};
