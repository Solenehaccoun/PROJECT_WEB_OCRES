import React, { Component } from 'react';
import "./Form.css"
//import Form from 'react-bootstrap/Form'
//import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends Component {

    render() {
        return (
            <div className="container_fullDisplay" id="section">

                <h1>Ajouter un morceaux</h1>
                <br></br>
     
                <form id="container_form">
                    <table id="container_table" style={{ height:"50px"}}>
                        <tr id="qu1_titre">
                            <td>Titre du Morceaux : </td>
                            <td><input type="text" name="titre"></input></td>
                        </tr>
                        <tr id="qu2_artiste">
                            <td>Artiste : </td>
                            <td><input type="text" name="artiste"></input></td>
                        </tr>
                        <tr id="qu3_album">
                            <td>Album : </td>
                            <td><input type="text" name="album"></input></td>
                        </tr>
                        <tr id="qu4_genre4">         
                            <td>Genre Musical : </td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
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
                                        <input class="form-control" type="date" value="2019-07-21" id="example-date-input"/>
                                </div>
                            </td>
                        </tr>
                        <tr id="qu6_audio">
                            <td> Fichier audio (.mp3) : </td>
                            <td>
                                <div class="form-group">
                                    <input type="file" id="myFile" name="filename"/>
                                </div>
                            </td>
                        </tr>
                        <tr id="qu7_couverture">
                            <td> Couverture (.jpg) : </td>
                            <td>
                                <div class="form-group">
                                    <input type="file" name="picture" id="picture" />
                                </div>
                            </td>
                        </tr>
                    <br></br>
                        <tr>
                            <td id="btn"><input type="submit" value="Valider" name="Valider"></input></td>
                        </tr>
                    </table>
                </form>
                            
            </div> 
        )
    }
}

export default Form;
