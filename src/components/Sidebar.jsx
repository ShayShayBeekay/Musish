import React from 'react';
import cx from 'classnames';
import {Link, Route} from 'react-router-dom';

class MenuItem extends React.Component {
  render() {
    return (
        <Route path={this.props.to} exact children={({match}) => (
          <li className={cx({active: !!match})}>
            <Link to={this.props.to}>
                {this.props.label}
            </Link>
          </li>
        )}/>
    );
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
        <aside id="main-sidebar">
          <div className="menu">
            <ul>
              <MenuItem to={'/library'} label={'Library'}/>
              <MenuItem to={'/playlists'} label={'Playlists'}/>
              <MenuItem to={'/artists'} label={'Artists'}/>
              <MenuItem to={'/albums'} label={'Albums'}/>
              <MenuItem to={'/songs'} label={'Songs'}/>
            </ul>
          </div>
        </aside>
    );
  }
}
