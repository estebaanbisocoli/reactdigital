import React, { Component } from 'react';
import _ from 'lodash'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card/';
import Divider from 'material-ui/Divider'
import MyInput from './MyInput';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

class MyPokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue : '',
            items : [],
        }
    }
    setNewInput = (e, newValue) => {
        if (newValue.length <= 100) {
            this.setState({
                inputValue: newValue
            })
        }
    }
    cleanInput = () => {
        this.setState({
            inputValue: ''
        })
    }
    cleanArr = () => {
    
     if (window.confirm('Esta seguro?')) {
        this.setState({
            items: []
        })
     }

    }
    addPokemon = () => {
        const { inputValue, items } = this.state

        const index =_.findIndex(items, (o) => {
            return o === inputValue
        })
        if(index === -1 && inputValue !== '') {
            let newArr = items
            newArr.push(inputValue)
            this.setState({
                items: newArr
            })
            this.cleanInput()
        } else {
            alert('el nombre ya existe o no hay nada')
        }

    }

    render() {
        let inputLength = 100 - this.state.inputValue.length;
        let imputValue = this.state.inputValue
        return (
            <div>
                <Card style={{textAlign: 'left'}}>
              
                <CardText>
                    <MyInput value={this.inputValue}/>
                    {inputLength === 100 ? null : <span style={{
                        textAlign: 'center',
                        fontSize: '16px',
                        padding: '5px',
                        marginLeft: '5px'
                        }}>{inputLength}</span>}    
                </CardText>
                <CardActions style={{textAlign: 'center'}}>
                        <RaisedButton label='Agregar' primary={true} onClick={this.addPokemon} />
                        <RaisedButton label='Limpiar' secondary={true} onClick={this.cleanArr}/>
                </CardActions>
                <List>
                    {this.state.items.map(ele => {
                        return (
                            <div>
                                <Divider/>
                                <ListItem disabled primaryText={ele} />
                            </div>
                            
                        )
                    })}
                </List>
                </Card>
              
            </div>
        );
    }
}

export default MyPokemon;
