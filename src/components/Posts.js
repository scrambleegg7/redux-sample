
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts(); 
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
 
    } 


    render() {

        const postitems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h4>{post.userId} {post.id}</h4>
                <p>{post.body}</p>
            </div>
            )
        );

        return (
            <div>
                <h1>Posts</h1>
                {postitems }
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
} 

const mapStateToProps = state => (
    {
        posts:state.posts.items,
        newPost:state.posts.item

    }
);

export default connect(mapStateToProps, {fetchPosts})(Posts) ;
