import React from 'react';

class Test extends React.Component {
    state = { card: [] };

    componentDidMount() {
        fetch('https://devtest.equisolve-dev.com/')
            .then(res => res.json())
            .then(json => this.setState({ card: json }))
    };

    render() {
        const { card } = this.state;
        const sorted = card.sort((a,b) => new Date(b.published_at) - new Date(a.published_at));
        
        return (
            <div>
                {console.log(sorted)}
                { card.map(i => {
                        return (
                            <div className="card">
                                <h4>{i.title}</h4>
                                <p>{i.published_at}</p>
                            </div>
                        );
                    }) }
            </div>
        );
    };
};

export default Test;