import React, { Component } from 'react';
import axios from 'axios';
// import ShoppingList from '../Navbar/components/ShoppingList'

import ActivitiesButton from './components/ActivitiesButton';

class Activities extends Component {

  state = {
    activities: [],
    status: "isLoading",
  }

  componentDidMount() {
    axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=1')
      .then(({ data }) => {
        this.setState({
          activities: data,
          status: 'isLoaded',
        })
      })
      .catch(err => {
        this.setState({
          status: 'Error'
        })
        console.log(err);
      })
  }

  renderActivitiesList = () => {
    return (
      this.state.activities.map(activity => (
        <div class="card-container">
        <img src={activity.cover_image_url} alt="image"/> 
        <h3 key={activity.title}>{activity.title}</h3>
        <p key={activity.description}>{activity.description}</p>
        <p key={activity.retail_price.formatted_value}> {activity.retail_price.formatted_value}</p>
        <ActivitiesButton
          // onClick={() => console.log('hola')}
        />
        </div>
      ))
    )
  }

  render() {
    const { status } = this.state;
    switch (status) {
      case 'isLoading':
        return 'Loading...';
      case 'isLoaded':
        return <div class = "activites-container">
          
            {this.renderActivitiesList()}
        
        </div>
      case 'Error':
        return 'Me espiché...';
      default:
        break;
    }
  }
}

export default Activities;