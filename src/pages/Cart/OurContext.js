import { createContext, useContext, useState } from "react";
// 컨텍스트 기능 사용을 위해 생성과 사용을 가져옴, 상태도 같이
const OurContext = createContext();
// 컨텍스트 생성

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // 제품에 대해 받아오기
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  // 선택한 제품에 대해 받아오기 ID?를 받아오는거라고 gpt는 말함

  const toggleSelectProduct = (id) => {
    const newSelected = new Set(selectedProducts);
    // 기존의 선택된 것을 가지고 있는 Set을 만든다.
    if (newSelected.has(id)) {
      newSelected.delete(id);
      // 입력받은 id가 존재하면 취소해서 지우고
    } else {
      newSelected.add(id);
      // id가 존재하지 않으면 추가한다.
    }
    setSelectedProducts(newSelected); // 그래서 다시 최신화한다.
  };

  const calculateTotal = () => {
    return [...selectedProducts].reduce((total, id) => {
      // Set을 배열로 바꾸어 reduce 사용
      const product = products.find((p) => p.id === id); // 제품들의 배열에서 id가 같은 제품 찾아서
      return total + product.price * product.quantity; // 제품의 가격과 수량을 더한 값을 전체 값에 더하고 반환한다.
    }, 0); // 처음부터 순회해서 동작한다.
  };

  return (
    <OurContext.Provider
      value={{
        products,
        setProducts,
        selectedProducts,
        toggleSelectProduct,
        calculateTotal,
      }}
    >
      {children}
    </OurContext.Provider>
    // 제공하는 것들을 사용할 수 있게  감싼다?
  );
};

export default ContextProvider;

export const useOur = () => useContext(OurContext);
