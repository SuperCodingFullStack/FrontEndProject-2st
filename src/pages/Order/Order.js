import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Order.css";
import Delivery_destination from "./Delivery_destination";
import Order_Navigation from "./Order_Navigation";
import Order_product_list from "./Order_product_list";

const Order = () => {
  return (
    <>
      <div className="order_all">
        <Order_Navigation />
        <Delivery_destination />
        <Order_product_list />
      </div>
    </>
  );
};

export default Order;
