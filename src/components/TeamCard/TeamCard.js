import React from 'react';
import {Avatar} from '@material-ui/core';
const TeamCard = (props) => {
return (
<div className="cardStyle">
          <Avatar alt="Remy Sharp" className="avatarStyle" src={props.item.WikipediaLogoUrl} />
          <div className="descStyle">
            <p>{props.item.City} {props.item.Name}</p>
              <div className="otherDescStyle">
                    <p>{props.item.Key}H</p>
              </div>
          </div>
          </div>
);
}

export default TeamCard;