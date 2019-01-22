import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts)
        return (
            <div>Post List</div>
        )
    }
}

const mapStateoProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateoProps, { fetchPosts })(PostList);