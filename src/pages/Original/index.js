import { useState } from 'react';

import { useData } from '../index';
import { BASE_URL } from '../../utlis';
import Table from '../../components/Table';
import SwitchBox from '../../components/SwitchBox';

import 'antd/dist/antd.min.css';

import styles from '../index.module.css';

const Original = () => {
  // 获取数据
  const { rankData } = useData();

  // 每个表格的分页状态单独控制
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <SwitchBox
        styles={styles}
        path_1={`${BASE_URL}/total`}
        switchText1={'切换到总榜'}
        path_2={`${BASE_URL}/mod`}
        switchText2={'切换到改装榜'}
        handleClick={() => setPagination(prevState => !prevState)}
        pagination={pagination}
      />
      <Table
        styles={styles}
        rankData={rankData}
        title={<span>原厂榜</span>}
        pagination={pagination}
      />
    </>
  );
};

export default Original;
