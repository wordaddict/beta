import React,{Component} from 'react';

class MeshTutorial extends Component {

    render() {
        const getUrl = window.location;
        const baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
        return(
            <div className="mesh-tutorial">
                <div className="title row col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <h2 style={{fontStyle:"italic", marginTop: 0}}>Quick tutorial:</h2>
                    <hr/>
                </div>
                <div className="tutorial">
                    <div style={{padding:0}} className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="img-container">
                            <img className="img img-responsive"
                                src={baseUrl+"assets/images/mesh_tutorial_1.png"}/>
                        </div>
                        <div className="mesh-panel">
                            {this.props.meshPanel}
                        </div>
                        <div className="linkedInfo">
                            {this.props.linkedinPanel}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                    <hr/>
                    <a className="btn btn-primary got-it-btn" onClick={this.props.onGotIt}>
                        <span>Got it!</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default MeshTutorial;