import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import template from '../themes/default';
import { MenuItem, AppBar, Drawer } from 'material-ui';

class App extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={template.muiTheme}>
        <div>
          <Drawer className="sideMenu" open={true}>
            <AppBar title="Menu" showMenuIconButton={false} />
            <MenuItem primaryText="Menu1" />
            <MenuItem primaryText="Menu2" />
            <MenuItem primaryText="Menu3" />
          </Drawer>
          <div className="main">
            <AppBar title="Main" showMenuIconButton={false} />
            <div className="contents">
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
