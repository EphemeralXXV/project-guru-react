import Collapsible from "@/components/Collapsible";

import Favo from "@/resources/favo.gif"

const Misc = () => {
    return (
        <>
            <p>Welcome to the Misc page!</p>
            <Collapsible heading = "Hello world">
                <img src = {Favo} />
                <p>Ya like my car?</p>
            </Collapsible>
        </>
    );
}

export default Misc;