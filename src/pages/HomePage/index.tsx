import React from "react";
import { Advantages } from "./components/Advantages";

import { MainSlider } from "./components/MainSlider";
import { Products } from "./components/Products";

let text = "kawdkwakd <b>hello</b> hyayya";

export const HomePage: React.FC = () => {
    const paginationRef = React.useRef<HTMLDivElement>(null);
    const [start, setStart] = React.useState(1);

    return (
        <div>
            {/* <p dangerouslySetInnerHTML={{ __html: text }} /> */}
            <MainSlider />
            <Advantages />
            <Products />
        </div>
    );
};
