import { toast } from "react-toastify";

const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    // already exists. do not add it
    console.log(id, "already exists in the read list");
    toast("This book already exists in the read list")
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);

    // idelly triger toast from the components
    toast("This book is added to your read list.")
    
    
  }
};

// wish-list
const getStoredWishList = () => {
  const storedWishStr = localStorage.getItem("wish-list");
  if (storedWishStr) {
    const storedWish = JSON.parse(storedWishStr);
    return storedWish;
  } else {
    return [];
  }
};
const addToStoredWishList = (wId) => {
  const storedWish = getStoredWishList();
  if (storedWish.includes(wId)) {
    // already exists, do not add it
    console.log(wId, "already exists in the wish list");
    toast("This book already exists in the wish list")
  } else {
    storedWish.push(wId);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem("wish-list", storedWishStr);
    toast("This book is added to your wish list.");
    
  }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
