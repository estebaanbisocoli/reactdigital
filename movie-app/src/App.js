import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListLayout from './Layout/ListLayout'
import MainToolbar from './Layout/MainToolbar'

const Container = styled.div`width: '90%';
                    margin-top: 20px;
                    margin-left: 5%;
                    margin-right: 5%;
                    display: inline-block;
                    text-align: center;

`
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <MainToolbar />
          <Container>
          <ListLayout  />
          </Container>
          
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
