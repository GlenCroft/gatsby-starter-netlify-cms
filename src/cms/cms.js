import CMS from 'netlify-cms'

import DogPagePreview from './preview-templates/DogPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('dogs', DogPagePreview)
