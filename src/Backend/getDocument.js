import { doc, getDoc } from "firebase/firestore";
import { db } from "Backend/firebase";

const getDocument = async (docId, collectionName, setRoomDetails) => {
  if (docId) {
    const docRef = doc(db, collectionName || "rooms", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setRoomDetails({ id: docSnap.id, ...docSnap.data() });
      //   console.log("roomDetails: ", { id: docSnap.id, ...docSnap.data() });
    }
  }
};

export default getDocument;
