import { useEffect, useState } from "react";
import Post from "../Post";

export default function HomePage(){
    const [intro, setIntro] = useState(null);

    const getHome = () => {
        fetch('http://localhost:8000/')
          .then(response => response.json())
          .then(data => setIntro(data.posts))
          .catch(error => console.error('Error fetching posts:', error));
      };

    useEffect(getHome, [])
    console.log(intro)

    return (
        <div>
            {intro ? (<Post post={intro}/>) : (<></>)}
        </div>
    )
}