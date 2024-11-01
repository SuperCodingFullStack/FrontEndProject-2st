import axios from "axios";

export const registerProduct = (product) => {
  const formData = new FormData();
  product.images.forEach((image) => formData.append("images", image));
  formData.append("name", product.name);
  formData.append("price", product.price);

  return axios.post("http://localhost:5000/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
