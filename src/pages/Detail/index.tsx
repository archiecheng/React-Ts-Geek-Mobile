import { DetailDataType, fetchDetailAPI } from "@/apis/detail";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NavBar } from "antd-mobile";

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null);

  //   获取路由参数
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!);
        setDetail(res.data.data)
      } catch (error) {
        throw new Error("fetch detail error");
      }
    };
    getDetail()
  }, [id]);

  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }

  // 数据返回前用loading渲染
  if (!detail) {
    return <div>loading....</div>
  }

  // 数据返回后，正式渲染内容
  return <div>
    <NavBar onBack={back}>{detail?.title}</NavBar>
    <div dangerouslySetInnerHTML={{
      __html:detail?.content
    }}></div>
  </div>;
};

export default Detail;
