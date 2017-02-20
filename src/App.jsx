import React, { Component } from 'react';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Info from './patient7.json'
// Because I am using Webpack Version2, JSON files are automatically parsed


class App extends Component {
  render() {
  console.log(Info)
  const fullName = Info.name.map((person)=> {
    return (
      `${person.family}, ${person.given}`
    )  
  })

  const patientID = `Patient ID: ${Info.id}`

  const Organization=Info.managingOrganization.display

    return (
      <div className="patient-container">
        <Card containerStyle={{width:'100%'}}>
          <CardHeader
            title={fullName}
            subtitle={patientID}
            avatar='http://semantic-ui.com/images/avatar2/large/matthew.png'
          />
          <CardMedia
            style={{width:"100%"}}
          >
            <img src="http://semantic-ui.com/images/avatar2/large/matthew.png"/>
          </CardMedia>
          <CardTitle title={fullName} titleStyle={{fontSize:'40px'}} className="patientName"/>
          <CardText className="patientText">
            <table className="patientTable">
              <tr>
                <th>Gender:</th>
                <td>{Info.gender}</td>
              </tr>
              <tr>
                <th>Organization Name:</th>
                <td>{Organization}</td>
              </tr>
              <tr>
                <th>Number of Conditions:</th>
                <td>{Info.conditions.length}</td>
              </tr>
              <tr>
                <th>List of Conditions:</th>
                <td>
                  <ul>
                    {
                      Info.conditions.map((condition,index)=> {
                        return (
                          <li>{condition}</li>
                        )
                      })
                    }
                  </ul>
                </td>
              </tr>
            </table>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default App;
