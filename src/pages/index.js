import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: dogs } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Our Dogs</h1>
          </div>
          <div className="row">

            {dogs
              .map(({ node: dog }) => (
                <div className="col">
                  <div className="card" key={dog.id}>
                    <div className="card-image" style={{backgroundImage: `url('${dog.frontmatter.image}')`}}></div>
                    <div className="card-body">
                      {dog.frontmatter.title}
                      <br/>
                      Breed: {dog.frontmatter.breed}
                      <br/>
                      DOB: {dog.frontmatter.dob}
                      <br/>
                      {dog.description}
                      <p>
                        <Link className="button is-small">
                          YouTube
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
            ))}

          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { fileAbsolutePath: {regex : "\/dogs/"} },
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            gender
            dob
            breed
            description
            image
          }
        }
      }
    }
  }
`
