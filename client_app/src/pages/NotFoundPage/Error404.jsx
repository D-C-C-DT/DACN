import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";


const Error404 = () => {
    const navigate = useNavigate();

    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, Trang bạn truy cập không tồn tại."
                extra={<Button onClick={() => navigate(-1)} style={{ padding: "0 15px" }} type="primary">Quay lại</Button>}
            />
        </>
    );
}

export default Error404;