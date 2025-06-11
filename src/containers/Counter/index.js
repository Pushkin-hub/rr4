import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const Counter = (props) => {


    return (
        <div>
            <h1>{props.counter}</h1>
            <button>increase</button>
            <button>descrease</button>
            <button>increase b5</button>
            <button>descrease b5</button>
        </div>
    )
}
export default connect(mapStateToProps)(Counter);