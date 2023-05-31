import React from "react";

class TestClassCompo extends React.Component {

    constructor() {
        super();
        this.state = {                     //this is intisl State define  
            name: "test",
            counter: 0
        }
        console.log("Cunstrutor call")
    }
    incrementCounter = () => {
        this.setState((prev) => ({
            counter: prev.counter + 1
        }))
    }
    componentWillMount() {  //run befor render
        setTimeout(this.incrementCounter, 1000)
        console.log("call componentWillMount")
    }
    // componentDidMount() {     //first run after rander
    //     setTimeout(this.incrementCounter, 1000)
    //     console.log("call componentDidMount")
    // }
    componentDidUpdate() {  //second run
        setTimeout(this.incrementCounter, 1000)

    }

    componentWillUnmount() {  //third run 
        console.log("call componentWillUnmount")
    }
    render() {
        const { name, counter } = this.state
        console.log(counter, name)
        //console.log("call render")
        return (
            <div>

                <h1>Count: {counter}</h1>

            </div>
        )
    }
}
export default TestClassCompo;