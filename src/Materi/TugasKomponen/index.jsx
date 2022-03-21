import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

class TugasKomponen extends React.Component {

    render () {
        return (
            <div>
                <ClassComponent nama="Irvan" />
                <FunctionalComponent nama="Irfan" />
            </div>
        )
    }
}

export default TugasKomponen;