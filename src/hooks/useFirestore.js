import {useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/Firebase.config"

export default function useFirestore() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [projects, setProjects] = useState({
        "webprojects": undefined,
        "appprojects": undefined
    })
    const [loading, setLoading] = useState(false)

    const readProjects = async (category) => {
        if(!projects[category]) {
            setLoading(true)
            const coll = collection(db, category)
            const snapshot = await getDocs(coll)
            const projectItems = snapshot.docs.map(doc => ({
                name: doc.id,
                ...doc.data()
            }))

            const tmp = {
                ...projects
            }
            tmp[category] = projectItems
            setProjects(tmp)
            setLoading(false)
        }
    }

    return {
        readProjects,
        projects,
        loading
    }
}