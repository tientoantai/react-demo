import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

class FormatDate extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return <div className="Comment-date">
            {this.props.date.toLocaleString()}
        </div>
    }
}

class Clock extends React.Component{
    constructor(){
        super();
        this.state = {date : new Date()}
    }

    tick (){
        return setInterval(() => {
            this.setState({date:new Date()});
        },1000)
    }
    componentDidMount() {
        this.timerID = this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    alertTest(){
        console.log(this.state);
    }

    render (){
        return (
            <div>
                <FormatDate date={this.state.date}/>
                <button onClick={this.alertTest.bind(this)}>test</button>
            </div>
        );
    }

}

class Avatar extends React.Component{
    render (){
        return (
            <img
                className="Avatar"
                src={this.props.avatarUrl}
                alt={this.props.name}
            />
        )
    }
}

class UserInfo extends React.Component{
    render(){
        return (
            <div className="UserInfo">
                <Avatar avatarUrl={this.props.avatarUrl} name={this.props.name}/>
                <div className="UserInfo-name">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

class Comment extends React.Component {
    render (){
        return (
            <div className="Comment">
                <UserInfo avatarUrl={this.props.author.avatarUrl} name={this.props.author.name} />
                <div className="Comment-text">{this.props.text}</div>
                <Clock />
            </div>
        );
    }
}

const comment = {
        // date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};
// var show = function(){
    ReactDOM.render(
        <Comment
            date={new Date()}
            text={comment.text}
            author={comment.author}
        />,
        document.getElementById('root')
    )
// };
// setInterval(
//     show
//     , 1000
// );

