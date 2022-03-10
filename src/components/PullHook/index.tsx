import { FC, useEffect, useState } from 'react';

import ComicElement from '@/components/ComicElement';
import { Comic } from '@/types';

import './styles.scss';

const PullHook: FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  const fetchComics = async () => {
    const newComics = [];

    for (let i = 211; i < 215; i++) {
      const response = await fetch(`https://xkcd.now.sh/?comic=${i}`);
      const data = await response.json();
      newComics.push(data);
    }

    setComics(newComics);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div>
      <h1>Random Comics</h1>
      {comics.map((comic: Comic) => (
        <ComicElement comic={comic} key={comic.num} />
      ))}
    </div>
  );
};

export default PullHook;
