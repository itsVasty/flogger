import { useEffect, useState } from "react";
import Post from "../utils/Post";

export default function HomePage(){
    const [intro, setIntro] = useState(null);

    const getHome = () => {
        fetch('http://localhost:8000/flogger')
          .then(response => response.json())
          .then(data => setIntro(data.flogger))
          .catch(error => console.error('Error fetching posts:', error));
      };

    useEffect(getHome, [])
    // console.log(intro)

    return (
        <div>
            {intro ? (<Post post={intro}/>) : (<></>)}
        </div>
    )
}