import ReactDOM from "react-dom/client";
import "./index.css";
// 导入 provider
import { RouterProvider } from 'react-router-dom'
import { router } from "./router/index.tsx";

// 测试接口

import { fetchChannelAPI } from '@/apis/list.ts'
fetchChannelAPI().then(res => {
    console.log(res);
    
})
ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
