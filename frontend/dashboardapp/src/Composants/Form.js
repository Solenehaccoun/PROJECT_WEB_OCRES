import React, { Component } from 'react';
import "./Form.css"
//import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../api"


class Form extends Component {
    constructor() { 
        super()
        this.state={ titre :"", artiste:"", album:"", genre:"", date:"",nombreecoute:"", continent:"", pictureUrl:"",
            }

    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
     handleSubmit= async (event) =>{
      event.preventDefault()
      await  API.post("/music", this.state)
    }

    render() {
        console.log(process.env.REACT_APP_BASE_URL)
        return (          
            <div>
                <div className="container_fullDisplay" id="section">
                    <header className="form-header">
                        {/* <h1>Ajouter un morceaux</h1> */}
                        <br></br>
        
                        <form id="container_form">
                            <table id="container_table" style={{ height:"50px"}}>
                                <tr id="qu1_titre">
                                    <td>Titre du Morceaux : </td>
                                    <td><input type="text" name="titre" onChange={this.handleChange} value={this.state.titre}></input></td>
                                </tr>
                                <tr id="qu2_artiste">
                                    <td>Artiste : </td>
                                    <td><input type="text" name="artiste" onChange={this.handleChange} value={this.state.artiste}></input></td>
                                </tr>
                                <tr id="qu3_album">
                                    <td>Album : </td>
                                    <td><input type="text" name="album" onChange={this.handleChange}value={this.state.album}></input></td>
                                </tr>
                                <tr id="qu4_genre4">         
                                    <td>Genre Musical : </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" name="genre" onChange={this.handleChange} value={this.state.genre} id="exampleFormControlSelect1">
                                                <option>Pop</option>
                                                <option>Jazz/Blues</option>
                                                <option>Classique</option>
                                                <option>Rap</option>
                                                <option>Rock</option>
                                                <option>RnB</option>
                                                <option>Métal</option>
                                                <option>Electro</option>
                                                <option>Afro</option>
                                                <option>Country</option>
                                                <option>Disco</option>
                                                <option>Folk</option>
                                                <option>K-pop</option>
                                                <option>Oriental</option>
                                                <option>Divers</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="qu5_date">
                                    <td>Date de Sortie : </td>
                                    <td>
                                        <div class="form-group">
                                                <input class="form-control" name="date" onChange={this.handleChange} value={this.state.date} type="date" value="2019-07-21" id="example-date-input"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="qu6_nbr_ecoute">
                                    <td>Nombre d'écoute: </td>
                                    <td>
                                        <div class="form-group">
                                                <input class="form-control" name="nombreecoute" onChange={this.handleChange} value={this.state.nombreecoute} type="Number" id="example-nmbr-ecoute"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="qu7_continent">         
                                    <td>continent : </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" name="continent" onChange={this.handleChange} value={this.state.continent} id="examplecontinent">
                                                <option>Europe</option>
                                                <option>Asie</option>
                                                <option>Afrique</option>
                                                <option>Océanie</option>
                                                <option>Amérique Latine</option>
                                                <option>Amérique du Nord</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
  
                                {/* <tr id="qu6_audio">
                                    <td> Fichier audio (.mp3) : </td>
                                    <td>
                                        <div class="form-group">
                                            <input type="file" id="myFile" name="filename"/>
                                        </div>
                                    </td>
                                </tr> */}
                                 <tr id="qu8_couverture">
                                    <td> Couverture (url) : </td>
                                    <td>
                                        <div class="form-group">
                                            <input type="text" name="pictureUrl" onChange={this.handleChange} value={this.state.pictureUrl} id="picture" />
                                        </div>
                                    </td>
                                </tr> 
                            <br></br>
                                <tr>
                                    <td id="btn"><button value="Valider" name="Valider" onClick={this.handleSubmit}> valider </button></td>
                                </tr>
                            </table>
                        </form>
                                    
                    </header>
                </div> 
            
            </div>
        )
    }
}

export default Form;
