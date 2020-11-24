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
                    ret
                })
            }
            </div>
        )
    }
 
}


export default List