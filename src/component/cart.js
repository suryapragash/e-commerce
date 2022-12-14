import React from "react";

function Cart({ productItem, onAdd }) {
  return (
    <div className="products d-flex">
      {productItem.map((item) => (
        <div className="card col-3">
          <div>
            <img
              className="product-image w-50"
              src={item.img}
              alt={item.name}
            />
          </div>

          <div className="product-name">
            <h3>{item.name} </h3>
          </div>

          <div className="product-price">${item.price}</div>

          <div>
            <button className="btn-danger" onClick={() => onAdd(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cart;

// <section>
//   <div className="d-flex">
//     <div class="card col-3">
//       <img
//         src="https://4.imimg.com/data4/RO/XV/MY-27070405/girls-school-bag-1000x1000.jpg"
//         class="card-img-top "
//         alt="bags"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">midi sundress with shiring details</p>
//         <p className="card-text">$29.9</p>
//         <a href="#" class="btn btn-danger" onClick={() => onAdd()}>
//           Add to cart
//         </a>
//       </div>
//     </div>
//     <div class="card col-3">
//       <img
//         src="https://5.imimg.com/data5/AS/AJ/OT/ANDROID-86453462/product-jpeg-500x500.jpeg"
//         class="card-img-top"
//         alt="shirt"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">midi sundress with ruched front</p>
//         <p className="card-text">$19.9</p>
//         <a href="#" class="btn btn-danger">
//           Add to cart
//         </a>
//       </div>
//     </div>
//     <div class="card col-3">
//       <img
//         src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png"
//         class="card-img-top"
//         alt="tshirt"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">midi dress in pink floral</p>
//         <p className="card-text">$25.9</p>
//         <a href="#" class="btn btn-danger">
//           Add to cart
//         </a>
//       </div>
//     </div>
//     <div class="card col-3">
//       <img
//         src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2017/12/Seller/17138005/Images/17138005_0_1.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3"
//         class="card-img-top "
//         alt="bags"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">midi sundress with shiring details</p>
//         <p className="card-text">$29.9</p>
//         <a href="#" class="btn btn-danger">
//           Add to cart
//         </a>
//       </div>
//     </div>
//   </div>
//   <br />
//   <br />
// </section>
