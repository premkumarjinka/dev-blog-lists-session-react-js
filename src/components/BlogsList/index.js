import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

/* const blogsData = [
  {
    id: 1,
    title: 'Blog 1',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
  {
    id: 2,
    title: 'Blog 2',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
] */

class BlogsList extends Component {
  state = {blogsList: [], isSpinner: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const fetchedData = await fetch('https://apis.ccbp.in/blogs')
    const Data = await fetchedData.json()

    const frontData = Data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: frontData, isSpinner: false})
  }

  render() {
    const {blogsList} = this.state
    const {isSpinner} = this.state
    return (
      <div className="blog-list-container">
        {isSpinner ? (
          <Loader type="TailSpin" height={50} width={50} color="#00BFFF" />
        ) : (
          blogsList.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
