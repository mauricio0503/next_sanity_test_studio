import {type SchemaTypeDefinition} from 'sanity'
import intentPage from './intentPage'
import brandSection from './brandSection'
import brand from './brand'
import trustSection from './trustSection'
import mobileExperienceTableSection from './mobileExperienceTableSection'
import mobileBrands, { mobileBrowserInfo, mobilePlatformInfo } from './mobileBrand'
import heroSection from './heroSection'
import header from './header'

export const schemaTypes: {types: SchemaTypeDefinition[]} = {
  types: [
    brandSection, 
    brand, 
    heroSection,
    header,
    trustSection, 
    intentPage, 
    mobileExperienceTableSection, 
    mobileBrands, 
    mobileBrowserInfo, 
    mobilePlatformInfo
  ],
}