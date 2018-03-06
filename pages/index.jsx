import React from 'react'
import styled from 'styled-components'
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react'
import { initStore } from '../stores';
import Layout from '../components/Layout';

export default class App extends React.Component {
  static getInitialProps({ req }) {
    console.log('req', req);
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}><Layout /></Provider>
    )
  }
}
