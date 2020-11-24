import React, {Component} from 'react'


class List extends Component () {
    constructor (props) {
        super(props)

        this.state= {
            value: [
                'Apple',
                'Orange', 
                'Banana',
                'Pomegranat',
            ]
        }
    }


    render() {
        return(
            <div>
            {
                this.state.value.map(fruit => {
                    return(
                        <div>
                            <p>{druit}</p>
                        </div>
                    );
                })
            }
            </div>
        )
    }
 
}


export default List