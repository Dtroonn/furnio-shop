import React from "react";

let text = "kawdkwakd <b>hello</b> hyayya";

export const HomePage: React.FC = () => {
    return (
        <div>
            <div>home page</div>
            <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};
