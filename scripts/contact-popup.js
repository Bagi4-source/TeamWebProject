// CLASS POPUP
class PopUp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="popUpContainer">
        <button className="closeBtn" onClick={ () => { this.props.onClose && this.props.onClose(); } } >CLOSE</button>
        {this.props.children}
        </div>;
    }
}
class ParentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            materialsPopup: false
        };
    }

    render() {
    const { materialsPopup } = this.state      

    const OpenBtn = props => <div
        className="fileBtn"
        onClick={ () => { 
            this.setState({materialsPopup: !materialsPopup});
        }}
    >Open PopUp</div>;

    return <div className="root">
        <div className="header">
            <OpenBtn/>
            { materialsPopup && <div className="bg">
                <PopUp className="materialsPopUp"
                    onClose={ () => { this.setState({ materialsPopup: false });} }
                >
                    <h2>This is Pop Up</h2>
                    <p>You can close the dialog by clicking on the button or the area around the dialog box</p>
                </PopUp>
            </div>}
        </div>
    </div>;
    }
}

ReactDOM.render(<ParentComponent />, document.getElementById('ContactPopup'));