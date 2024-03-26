import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    }
    style = {
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',
        
    }
    btnStyle = {
        fontWeight: 'Bold',
        fontSize: 14
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }



    handleIncrement =() => {
        console.log('Increment Clicked',this);
        // obj.method() reference to this object
        // function() reference to window obj
    }

    render() { 
        return <>
            <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} style={this.btnStyle} className='btn btn-secondary btn-sm'>Increment</button>
        </>
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;