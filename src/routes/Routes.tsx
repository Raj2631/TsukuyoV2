import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from '../containers/Favorites/Favorites';
import FullDescription from '../containers/FullDescription/FullDescription';
import Popular from '../containers/Popular/Popular';
import SearchResults from '../containers/SearchResults/SearchResults';
import Top from '../containers/Top/Top';
import Error from '../containers/Error/Error';
import Ongoing from '../containers/Ongoing/Ongoing';

type Liked = {
  title: string;
  image_url: string;
  mal_id: number;
};

type LikeData = {
  title: string;
  image_url: string;
  mal_id: number;
}[];

interface Props {
  addToFav: (item: Liked) => void;
  removeFromFav: (id: number) => void;
  likedData: LikeData;
}

const Routes = ({ addToFav, removeFromFav, likedData }: Props) => {
  return (
    <Switch>
      <Route exact path="/" component={Ongoing} />
      <Route path="/top" component={Top} />
      <Route path="/popular" component={Popular} />

      <Route path="/favorites" render={() => <Favorites liked={likedData} />} />
      <Route exact path="/search/:query" component={SearchResults} />
      <Route
        path="/details/:id"
        render={() => (
          <FullDescription
            addToFav={addToFav}
            removeFromFav={removeFromFav}
            likedArr={likedData}
          />
        )}
      />

      <Route path="/" component={Error} />
    </Switch>
  );
};

export default Routes;
