import { useState } from "react";

const HeaderHooks = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return { isLoading, setIsLoading }
}
export default HeaderHooks;