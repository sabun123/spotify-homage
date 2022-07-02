import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import SideBar from 'components/SideBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authorizeRequest, setCode } from './reducer';
import styles from './Home.module.css';
import { useEffect } from 'react';

const Home = (props) => {
  const {
    loading,
    sessionToken,
    requestAuthorization,
    spotifyCode,
    setCodeAction,
  } = props;
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    // hacky rush job implementing OAuth the spotify way
    if (spotifyCode === null && code) {
      setCodeAction(code);
      requestAuthorization();
    }
    if (sessionToken === null && spotifyCode === null && !code) {
      navigate('/authorize', { replace: true });
    }
  }, []);

  useEffect(() => {
    if (sessionToken) {
      navigate('/discover', { replace: true });
    }
  }, [sessionToken]);

  if (loading) {
    return (
      <div className={styles['Home__loading']}>
        <p>Authorizing...</p>
      </div>
    );
  }

  return (
    <div className={styles['Home__container']}>
      {sessionToken != null && <SideBar />}
      <Outlet />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.session.loading,
    sessionToken: state.session.sessionToken,
    spotifyCode: state.session.spotifyCode,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    requestAuthorization: (payload) => dispatch(authorizeRequest(payload)),
    setCodeAction: (payload) => dispatch(setCode(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Home);
