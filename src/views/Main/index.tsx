import { FC } from 'react';

// import PullHook from '@/components/PullHook';
import InfiniteScroll from '@/components/InfiniteScroll';

import './styles.scss';

const Main: FC = () => (
  <div className="home">
    <img alt="logo" src="./logo.png" />
    <InfiniteScroll />
    {/* <PullHook /> */}
  </div>
);

export default Main;
