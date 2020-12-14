import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


let nbTot=0;
let Taille =0;

export default class Chiffres extends React.Component {
    componentDidMount()
    {
        //Requetes
        axios.get('http://localhost:4000/music')
        .then(res => {
            Taille=res.data.length;
            for(let i=0;i<Taille;i++)
            {
                nbTot+=res.data[i].nombreecoute;
            }
            this.setState({nbTot})
        })

    }
    render() {

        return (
            <div id="container_tab">
                <div id="container_tab2">
                    <table className="table">
                        <ul id="ul1">
                            <td><strong>Nombre d'ecoutes total :</strong></td>
                            <td>{nbTot} </td>
                        </ul>
                        
                    </table>
                    
                </div>
            </div>
          
        );
      }
}


