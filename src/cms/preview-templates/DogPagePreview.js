import React from 'react'
import PropTypes from 'prop-types'
import { DogTemplate } from '../../templates/dog-page'

const DogPagePreview = ({ entry, widgetFor }) => (
  <DogTemplate
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

DogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DogPagePreview
