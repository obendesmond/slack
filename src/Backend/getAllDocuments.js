import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "Backend/firebase";

const getAllDocuments = (collectionName, setItems, orderOptions) => {
  const q = query(
    collection(db, collectionName)
    // orderBy(orderOptions.name, orderOptions.value)
  );

  const unsub = onSnapshot(q, querySnapshot => {
    let postArray = [];
    querySnapshot.forEach(doc => {
      postArray.push({ ...doc.data(), id: doc.id });
    });
    setItems(postArray);
    console.log("Array: ", postArray);
  });

  return () => unsub();
};

export default getAllDocuments;
