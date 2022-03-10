import React, { useState, useEffect } from "react";
import { auth } from "Backend/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    setLoading(false);
    return () => unsub();
  }, [currentUser]);

  return { currentUser, loading };
}
