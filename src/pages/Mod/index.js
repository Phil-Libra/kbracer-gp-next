import { useState } from 'react';

import { useData } from '../index';
import Table from '../../components/Table';
import SwitchBox from '../../components/SwitchBox';

import 'antd/dist/antd.min.css';

import styles from '../index.module.css';

const Mod = () => {
  // 获取数据
  const { speedMod } = useData();

  // 每个表格的分页状态单独控制
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <SwitchBox
        styles={styles}
        path_1={process.env.REACT_APP_URL}
        switchText1={'切换到总榜'}
        path_2={`${process.env.REACT_APP_URL}original`}
        switchText2={'切换到原厂榜'}
        handleClick={() => setPagination(prevState => !prevState)}
        pagination={pagination}
      />
      <Table
        styles={styles}
        rankData={speedMod}
        title={<span>改装榜</span>}
        pagination={pagination}
      />
    </>
  );
};

export default Mod;
