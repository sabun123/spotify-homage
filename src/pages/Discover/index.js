import { useEffect } from 'react';
import { connect } from 'react-redux';
import HeroBanner from 'components/HeroBanner';
import List from 'components/List';
import Loading from 'components/Loading';
import { featuredRequest, releasedRequest } from './reducer';
import styles from './Discover.module.css';

const Discover = (props) => {
  const {
    loadingFeatured,
    loadingPlaylists,
    releasedThisWeek,
    featuredPlaylists,
    featuredRequestAction,
    releasedRequestAction,
  } = props;

  useEffect(() => {
    featuredRequestAction();
    releasedRequestAction();
  }, []);

  const renderReleases = () => {
    return releasedThisWeek ? (
      <List
        listData={{
          title: 'Released this week',
          data: releasedThisWeek,
        }}
      />
    ) : (
      <Loading />
    );
  };

  const renderFeatured = () => {
    return featuredPlaylists ? (
      <List
        listData={{
          title: 'Featured playlists',
          data: featuredPlaylists,
        }}
      />
    ) : (
      <Loading />
    );
  };

  return (
    <div className={styles['Discover__container']}>
      <HeroBanner />
      {renderReleases()}
      {renderFeatured()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingFeatured: state.discover.loadingFeatured,
    loadingPlaylists: state.discover.loadingPlaylists,
    releasedThisWeek: state.discover.releasedThisWeek,
    featuredPlaylists: state.discover.featuredPlaylists,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    featuredRequestAction: (payload) => dispatch(featuredRequest(payload)),
    releasedRequestAction: (payload) => dispatch(releasedRequest(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Discover);
