import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
class MainToolBar extends Component {
    state = {  }
    render() {
        return (
            <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        );
    }
}

export default MainToolBar;