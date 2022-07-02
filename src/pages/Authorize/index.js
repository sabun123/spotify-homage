import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setClient } from 'pages/Home/reducer';
import styles from './Authorize.module.css';

const Authorize = (props) => {
  const { setClientAction } = props;
  const [clientID, setClientID] = useState('6786c4edd5ba49c8a09e031320ae9da0');
  const [clientSecret, setClientSecret] = useState(
    'd9e3ed682f9049dda3378f32f5691022'
  );

  let params = `response_type=code&client_id=${clientID}&scope=&redirect_uri=http://localhost:3000/&state=`;
  let redirect_uri = 'https://accounts.spotify.com/authorize?' + params;

  useEffect(() => {
    setClientAction({ clientID, clientSecret });
  }, [clientID, clientSecret]);

  return (
    <div className={styles['Authorize__container']}>
      <label>Client ID</label>
      <input
        type='text'
        id='clientId'
        placeholder={clientID}
        onChange={(event) => {
          setClientID(event.target.value);
        }}
      />
      <label>Client Secret</label>
      <input
        type='text'
        id='clientSecret'
        placeholder={clientSecret}
        onChange={(event) => {
          setClientSecret(event.target.value);
        }}
      />
      <p>
        Enter your spotify developer account Client ID and Client secret here.
      </p>
      <button onClick={() => (window.location.href = redirect_uri)}>
        Authorize
      </button>
      <p>
        Notes: <br />
        You may use the default Client ID and Client Secret that is already
        pre-filled.
      </p>
      <p>
        You will then be redirected to Spotify's OAuth login before you can
        continue to test this app. If you are already logged into Spotify Web,
        it will simply ask you to agree to authorize this app. Otherwise you
        will need to login first.
      </p>
      <p>
        **Data is persisted after first authorization. Use a private window or
        hard clear cache. Logout/Unauthorized mechanism has not been setup**
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clientID: state.session.clientID,
    clientSecret: state.session.clientSecret,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setClientAction: (payload) => dispatch(setClient(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Authorize);
