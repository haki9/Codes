import React from 'react'
import Photo from './Photo'
import Comment from './Comment'

const Single = React.createClass({
  render(){
    const {postID} = this.props.params
    const i = this.props.posts.findIndex((post)=> post.code === postID)
    const post = this.props.posts[i];
    const postComments = this.props.comments[postID] || []
    return(
      <div className='single-photo'>
        <Photo i={i} post={post} {...this.props} />
        <Comment postComments={postComments} {...this.props}/>
      </div>

    )
  }
})

export default Single
