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
        fontSize: 15
    }
    render() { 
        return <>
            {/* <img src={this.state.imageUrl} alt="Random Images" /> */}
            <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button style={this.btnStyle} className='btn btn-secondary btn-sm'>Increment</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
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

