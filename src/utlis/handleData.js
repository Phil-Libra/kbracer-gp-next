// 兼容原榜单数据，处理圈速数据
const handleData = (data, modStatus) => {
    return data
        // 排序，防止源数据顺序错误
        .sort((a, b) => a.speed * 100 - b.speed * 100)
        .map((item, index) => {
            // 添加key值，直接+1并设置为排名
            if (!item.key) {
                item.key = index + 1;
            }

            // 添加B站链接
            if (item.BID) {
                item.BURL = `https://www.bilibili.com/video/${item.BID}`;
            }

            // 根据参数添加改装信息
            item.mod = modStatus;

            return item;
        });
};

export { handleData };