'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent-ls')

var Post = require('./components/Post')

var {FORUM_API_URL} = require('../constants')

var Topic = React.createClass({
  statics: {
    getTitle(props, params) {
      return `${props.topic.title} · ${props.topic.forum.name}`
    },

    loadProps(params, cb) {
      superagent.get(`${FORUM_API_URL}/topic/${params.id}`).end((err, res) => {
        cb(err, res && {topic: res.body})
      })
    }
  },

  render() {
    var {id, title, posts, forum, section} = this.props.topic
    return <div className="Topic">
      <div className="Breadcrumbs">
        <Link to="/forums">Forums</Link>
        {' → '}
        <Link to={`/forums/section/${section.id}`}>{section.name}</Link>
        {' → '}
        <Link to={`/forums/forum/${forum.id}`}>{forum.name}</Link>
      </div>
      <h2>{title}</h2>
      <div className="Topic__controls">
        <Link to={`/forums/topic/${id}/add-reply`}>Reply to this topic</Link>
      </div>
      {posts.map(post => <Post {...post}/>)}
    </div>
  }
})

module.exports = Topic
