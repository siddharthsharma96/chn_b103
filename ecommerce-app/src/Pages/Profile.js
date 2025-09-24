import "./../Styles/Profile.css";
const Profile = () => {
  return (
    <div className="profile__container">
      <h2 className="profile__title">User Profile</h2>
      <div className="profile__card">
        <p>
          <strong>Name:</strong> asd
        </p>
        <p>
          <strong>Email:</strong> asd@gmail.com
        </p>
        <p>
          <strong>Role:</strong> user
        </p>
      </div>

      <table className="products__table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order Id</th>
            <th>Total Price</th>
            <th>Order Status</th>
            <th>Payment Status</th>
            <th>Order Date</th>
            <th>Payment Id</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="dashboard__product__info">
                <img className="dashboar__image" src={"a"} alt={"a"} />
                <div>
                  <div className="product__name">MacBook Pro M3</div>
                  <div className="product__desc">
                    Apple MacBook Pro with M3 chip, 14-inApple MacBook Pro with
                    M3 chip, 14-in
                  </div>
                </div>
              </div>
            </td>
            <td>688b522103c531dc99279bb9</td>
            <td>₹230</td>
            <td>
              <span className={"status in-stock"}>processing</span>
            </td>
            <td>pending</td>
            <td>31/07/2025</td>
            <td>12212</td>
          </tr>
          <tr>
            <td>
              <div className="dashboard__product__info">
                <img
                  className="dashboar__image"
                  src={
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
                  }
                  alt={"a"}
                />
                <div>
                  <div className="product__name">MacBook Pro M3</div>
                  <div className="product__desc">
                    Apple MacBook Pro with M3 chip, 14-inApple MacBook Pro with
                    M3 chip, 14-in
                  </div>
                </div>
              </div>
            </td>
            <td>688b522103c531dc99279bb9</td>
            <td>₹230</td>
            <td>
              <span className={"status in-stock"}>processing</span>
            </td>
            <td>pending</td>
            <td>31/07/2025</td>
            <td>12212</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
