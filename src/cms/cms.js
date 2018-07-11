import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import DogPagePreview from './preview-templates/DogPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('dogs', DogPagePreview)
