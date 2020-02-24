import React, {Component, Fragment} from 'react';
import './dashLayout.css';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import SearchIcon from '@material-ui/icons/Search';
import PlayerCard from '../../components/playerCard/PlayerCard';
import TeamCard from '../../components/TeamCard/TeamCard';
import GamesCard from '../../components/GamesCard/GamesCard';
import axios from 'axios';
import {AppBar,Tabs,Tab,Typography, Box, Avatar, FormControl, Input,InputAdornment} from '@material-ui/core';
function TabPanel(props){
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
class DashLayout extends Component {
    
      
      
      state = {
          players:[],
          teams:[],
          games:[],
        value: 0
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };
      componentDidMount() {
        axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Players?key=709f9424d49b485e9e0b702ba7024194`)
          .then(res => {
            const players = res.data;
            this.setState({ players });
          });
          axios.get(`https://api.sportsdata.io/v3/nba/scores/json/teams?key=709f9424d49b485e9e0b702ba7024194`)
          .then(res => {
            const teams = res.data;
            this.setState({ teams });
          })
      }

render() {
    /*
    const style = {
        background: {
            backgroundImage: `url(${this.props.backGround})`
        }
      }
      */
     
    return(
        <Fragment>
      <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          onChange={(event, value) => this.handleChange(event, value)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Players" {...a11yProps(0)} />
          <Tab label="Teams" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={this.state.value} className="swipeStyle"
        onChangeIndex={(index) => this.handleChangeIndex(index)}
      >
        <TabPanel value={this.state.value} index={0} >
            <div className="tabPanelStyle">
            {this.state.players.slice(0, 40).map(player =>
            <PlayerCard key={player.PlayerID} item={player}/>
            )
            }
            </div>
            
          
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
        <div className="tabPanelStyle">
            {this.state.teams.map(team =>
            <TeamCard key={team.TeamID} item={team}/>
            )
            }
            </div>
        </TabPanel>
      </SwipeableViews>
                
        </Fragment>
    );
}
}

export default DashLayout;