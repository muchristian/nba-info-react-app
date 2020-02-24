import React from 'react';
import {Avatar} from '@material-ui/core';
const PlayerCard = (props) => {
return (
<div className="cardStyle">
          <Avatar alt="Remy Sharp" className="avatarStyle" src={props.item.PhotoUrl} />
          <div className="descStyle">
            <p>{props.item.FirstName} {props.item.LastName}</p>
              <div className="otherDescStyle">
                    <p>{props.item.Height}H</p>
                    <p>{props.item.Weight}W</p>
                    <p>{props.item.Team}</p>
              </div>
          </div>
          </div>
);
}

export default PlayerCard;