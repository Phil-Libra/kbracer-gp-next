import { useMemo, useEffect, useState } from 'react';
import { Outlet, useOutletContext, useLocation } from 'react-router-dom';
import { Input } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';

import { handleData } from '../utlis';

import speed from '../speed.json';
import speed_mod from '../speed_mod.json';
import bilibili from '../assets/img/bilibili.png';
import weibo from '../assets/img/weibo.png';
import github from '../assets/img/github.png';
import logo from '../assets/img/logo.png';

import 'antd/dist/antd.min.css';

import styles from './index.module.css';

const Home = () => {
    const speedData = handleData(speed, false);
    const speedDataMod = handleData(speed_mod, true);

    // 根据两个榜单数据生成总榜数据
    const totalSpeedData = useMemo(() => speedData.concat(speedDataMod)
        .sort((a, b) => a.speed * 100 - b.speed * 100)
        .map((item, index) => (
            {
                ...item,
                key: index + 1
            }
        )), [speedData, speedDataMod]);

    // 展示数据源state
    const [rankData, setRankData] = useState(speedData);
    const [rankDataMod, setRankDataMod] = useState(speedDataMod);
    const [totalData, setTotalData] = useState(totalSpeedData);

    // 说明书显示状态
    const [descStatus, setDescStatus] = useState(false);

    const { pathname } = useLocation();

    // 切换榜单重新获取数据；不需要监听speedData, speedDataMod, totalSpeedData这三个常量的变化。
    useEffect(() => {
        setRankData(speedData);
        setRankDataMod(speedDataMod);
        setTotalData(totalSpeedData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <div className={styles.main}>
                <Title >
                    <Input
                        addonBefore="搜索："
                        placeholder="车型关键字"
                        onChange={(e) => {
                            const dataFilter = (data) => data.filter((item) => {
                                const reg = new RegExp(e.target.value, 'i');
                                return reg.test(item.car);
                            });

                            // 根据当前榜单来筛选数据
                            switch (pathname) {
                                case '/original':
                                    setRankData(dataFilter(speedData));
                                    break;
                                case '/mod':
                                    setRankDataMod(dataFilter(speedDataMod));
                                    break;
                                case '/total':
                                    setTotalData(dataFilter(totalSpeedData));
                                    break;
                                default:
                                    throw new Error('数据错误！');
                            }
                        }}
                        allowClear
                    />

                </Title>

                <Outlet context={{ rankData, rankDataMod, totalData }} />

                <Description
                    descStatus={descStatus}
                    setDescStatus={setDescStatus}
                />
            </div>

            <Footer />
        </>
    );
};

const Title = (props) => (
    <div className={styles.title}>
        <div className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.desc}>
                <h1>键盘车神教易车金港圈速榜</h1>
                <p>传说中的偶像派车评人教主的真实圈速榜单</p>
                <p>本榜单只做技术展示，日常请使用原易车金港榜单</p>
            </div>
        </div>
        <div className={styles.search}>
            {props.children}
        </div>
    </div>
);

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.left}>
            <div>
                关注教主：
                <a href="https://space.bilibili.com/49576477">
                    <img src={bilibili} alt="bilibili" />
                    @键盘车神教
                </a>
                &nbsp;
                &nbsp;
                <a href="https://space.bilibili.com/1772592840">
                    <img src={bilibili} alt="bilibili" />
                    @易车圈速榜
                </a>
                &nbsp;
                &nbsp;
                <a href="https://www.weibo.com/u/5934299797">
                    <img src={weibo} alt="weibo" />
                    @键盘车神教教主
                </a>
            </div>

            <div>
                教主的锐思榜单：
                <a href="https://kbracer.github.io/">
                    <img src={logo} alt="kbracer" />
                    键盘车神教锐思圈速榜
                </a>
            </div>
        </div>

        <div className={styles.right}>
            <div>
                本页面模仿教主原锐思榜单样式，基于
                &nbsp;<a href="https://github.com/facebook/react/">React</a>&nbsp;
                和
                &nbsp;<a href="https://github.com/ant-design/ant-design/">Ant-Design</a>&nbsp;
                实现。
            </div>
            <div>
                作者：
                <a href="https://github.com/Phil-Libra">Phil_Libra</a>
                &nbsp;
                源代码：
                <a href="https://github.com/Phil-Libra/kbracer-gp-next">
                    <img src={github} alt="github" />
                    GitHub
                </a>
            </div>

        </div>
    </div>
);

const Description = (
    {
        descStatus,
        setDescStatus
    }
) => (
    <>
        <div className={styles.buttonBox}>
            <button
                className={styles.descButton}
                onClick={() => setDescStatus((prevState) => !prevState)}
            >
                <span>圈 速 榜 说 明 书</span>
            </button>
        </div>

        <div
            className={styles.description}
            style={{ display: descStatus ? 'block' : 'none' }}
        >
            <CloseCircleTwoTone
                style={
                    {
                        overflow: 'visible',
                        position: 'fixed',
                        top: '-5px',
                        left: '-5px',
                        fontSize: 16
                    }
                }
                twoToneColor="#aaa"
                onClick={() => setDescStatus((prevState) => !prevState)}
            />
            <div className={styles.manual}>
                <h3>1.改装</h3>
                <p>不同于锐思榜单，易车金港榜单中，单独轮胎的改装仍然计入原厂榜单（尽量选择改装街胎车型）。</p>

                <h3>2.气温</h3>
                <p>最出圈速的气温是轮胎能够起温，且进气温度低。我会尽量选在10-25℃进行测试。</p>
                <p>气温过高：空气密度低。马力小于200ps的自然吸气引擎，或者高温衰减严重的涡轮买菜车，圈速会变慢。30℃以上区间会非常明显，相比10℃，这些车圈速在锐思会有0.X秒的差距。甚至有些极端车型有超过1s的差距，请大家自行脑补修正。</p>
                <p>气温过低：如果使用热熔胎在低温环境中测试，会因为轮胎无法进入工作温度而大幅影响圈速。而普通运动轮胎普遍可以在0℃的情况下正常工作。</p>
                <p>相对而言，散热较好且马力较大的宝马S55车型、保时捷911车型，受到高温影响较小；而搭载四驱的高性能车，如奥迪RS系列，对轮胎起温的要求较低、受到低温影响较小，0℃以下依然能发挥威力。</p>

                <h3>3.轮胎磨损</h3>
                <p>我的测试车辆大多数来自白嫖。有的车借来时轮胎已经有严重磨损或者年份过久，会影响圈速，我都会在节目中说明（如S3轮胎已经石化）。</p>

                <h3>4.尾速</h3>
                <p>赛道尾速是指一条赛道中能达到的最高速度，一般在赛道最长的直线中诞生。尾速和01加速一样是动力水准的重要指标，但又有所不同。</p>
                <p>01加速不仅是对动力的检验，还需要考虑起步时的驱动效率，以及弹射程序的聪明与否。影响尾速的最大因素的仍然是动力水准，如我100ps的原厂菱帅只有112的尾速。但是450ps的911s（992）则是163的尾速。第二影响因素是弯道性能，也就是操控，因为直线上一个弯道出的快不快，直接影响直线部分的起始速度。</p>

                <h3>5.为什么我要动态起步</h3>
                <p>Hot lap，一般被称为飞行圈或者飞驰圈（我喜欢叫飞行圈，因为比较中二）。指得是非静止起步的全力最快圈，也是大家约定俗称进行圈速测试的方式。</p>
                <p>有人可能会有疑问，因为每台车起始速度不同，但这由车辆性能差异导致，本就应该对圈速产生影响。</p>
                <p>而静态起步圈速测试和驱动形式关系较大，意义不大，一般不采用。</p>
            </div>
        </div>
    </>
);

export default Home;

// 导出Outlet传递的数据
export const useData = () => useOutletContext();
