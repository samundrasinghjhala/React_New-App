import React from "react";

class APIfatch extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2").then((res) => {
            res.json().then((result) => {
                this.setState({ users: result.data })
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.users ? this.state.users.map((item, i) =>
                        <div>{i}.
                            {item.first_name}
                            ---
                            {item.last_name}
                            ---
                            {item.email}
                        </div>) : null
                }
            </div>

        )
    }
}
export default APIfatch;
