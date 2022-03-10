import { FC } from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const Main: FC = () => (
  <div className="home">
    <img alt="logo" src="./logo.png" />
    <InfiniteScroll />
  </div>
);

export default Main;
