import { useEffect } from "react";

function useTitle(title){

    useEffect(() => {
        document.title = "news site | " + title;
      }, [title])

}

export default useTitle;