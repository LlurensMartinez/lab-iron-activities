import React, { Component } from 'react';
import axios from 'axios';

class Activities extends Component {

  state = {
    activities: [],
    status: "isLoading",
  }

  componentDidMount() {
    axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=1')
      .then(({ data }) => {
        console.log(data);
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
        <p key={activity.descprition}>{activity.description}</p>
        <button>Add to card</button>
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