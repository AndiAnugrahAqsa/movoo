import { useState } from "react"

const useShowModal = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const toggle = () => setIsShowModal(!isShowModal);

    return {
        isShowModal, toggle
    }
}

export default useShowModal;