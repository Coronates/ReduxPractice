import React from "react";
import { connect } from "react-redux";
//The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. It comes from the reducer:
const mapStateToProps = state => {
    return {articles: state.articles}
};
const ConnectedList = ({articles}) => (
    <ul>
        {articles.map((elem1,index) => (
            <li key={index}>{elem1.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
//Finally the component gets exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.
export default List;