import { FC } from 'react';
import { Comic } from 'src/types';

import './styles.scss';

const ComicElement: FC<{ comic: Comic }> = ({ comic }) => (
  <div className="comic">
    <div className="comic__avatar">
      <img src={comic.img} />
    </div>
    <div className="comic__details">
      <ul>
        <li>
          <strong>Title:</strong> {comic.title}
        </li>
        <li>
          <strong>Transcript:</strong> {comic.transcript.slice(0, 100)}
        </li>
      </ul>
    </div>
  </div>
);

export default ComicElement;
