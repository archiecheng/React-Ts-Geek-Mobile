import { useEffect, useState } from "react";
import "./style.css";
import { Tabs } from "antd-mobile";
import { fetchChannelAPI, ChannelItem } from "@/apis/list";
const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel error");
      }
    };
    getChannels();
  }, []);
  return (
    <div>
      <div className="tabContainer">
        {/* tab区域 */}
        <Tabs>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list 组件 */}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
