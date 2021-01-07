/*
    ./src/components/main/ExpModule.jsx
*/
import React, {Component} from 'react';
import './ExperiencesModule.css';
import { /*Container, */Row, Col } from 'reactstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class ExpModule extends Component {

    checkIconsHandler = (name) =>{
        switch (name) {
            case 'Colegio Capouilliez':
                return <i className="fa fa-bell" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            case 'Instituto Tecnico Laboral Kinal':
                return <i className="fa fa-wrench" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            case 'Universidad del Valle de Guatemala':
                return <i className="fa fa-graduation-cap" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            case 'Conservatorio Nacional de Música (Guatemala)':
                return <i className="fa fa-music" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            case 'DACSA':
                return <i className="fa fa-cog" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            case 'CELERA':
                return <i className="fa fa-cloud" style={{color: this.color6, fontSize: "24px", opacity: "0.8"}}></i>
            default:
                break;
        }
    }

    render() {
        console.log(this.props.width);
        let rowsToRender = (
            <div  className='div1-modexp'>
                <Row className='row'>
                    <Col xs="4" className='Fst-col'>
                        <p className='edu-name p-color'>{this.props.Name}</p>
                        <p className='p-normal p-color'>{this.props.Date}</p>
                        <div className='div-image-exp'>
                            <img className='image-exp' src={this.props.src} alt='img'></img>  
                        </div>
                    </Col>
                    <Col xs="6" className='Snd-col'>
                        <p className='edu-ack p-color'>{this.props.Acknowledgment}</p>
                        <p className='p-normal p-color'>{this.props.Description}</p>
                    </Col>
                </Row>
            </div>
        );
        if(this.props.width < 800){
            rowsToRender = (
                <div className='div1-modexp'>
                    <Row className='row'>
                        <Col className='Fst-col'>
                            <p className='edu-name p-color'>{this.props.Name}</p>
                            <p className='p-normal p-color'>{this.props.Date}</p>
                            {this.props.width < 500  
                            ? <div className='div-line-exp'></div>
                            : <div className='div-image-exp'>
                                <img className='image-exp' src={this.props.src} alt='img'></img>  
                            </div>}
                        </Col>
                    </Row>
                    <Row className='row'>
                        <Col  className='Snd-col'>
                            <p className='edu-ack p-color'>{this.props.Acknowledgment}</p>
                            {this.props.width < 500  
                            ? this.checkIconsHandler(this.props.Name)
                            : <p className='p-normal p-color'>{this.props.Description}</p>}
                        </Col>
                    </Row>
                </div>
            )
        }
        return (
            <Aux>
                {rowsToRender}
            </Aux>
        );
    }
}

export default ExpModule; 