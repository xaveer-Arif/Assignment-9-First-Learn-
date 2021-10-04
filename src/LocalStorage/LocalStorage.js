const addToLocal = id => {
    const exists = getData();
    let service_cart = {};
    if (!exists) {
      service_cart[id] = 1;
    }
    else {
      service_cart = JSON.parse(exists);
      if (service_cart[id]) {
        const newCount = service_cart[id] + 1;
        service_cart[id] = newCount;
      }
      else {
        service_cart[id] = 1;
      }
    }
    updateData(service_cart);
  }
  
  const getData = () => localStorage.getItem('service_cart');
  const updateData = cart => {
    localStorage.setItem('service_cart', JSON.stringify(cart));
  }
  
  const removeFromData = id => {
    const exists = getData();
    if (!exists) {
  
    }
    else {
      const service_cart = JSON.parse(exists);
      delete service_cart[id];
      updateData(service_cart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getData();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('service_cart');
  }
  
  export { addToLocal, removeFromData, clearTheCart, getStoredCart }
  