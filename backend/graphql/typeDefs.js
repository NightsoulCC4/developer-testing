const { gql } = require("apollo-server");

const typeDefs = gql`
  type image_gallery {
    id_image_gallery: Int
    imageUrl: String
    id_real_estate: Int
  }

  type real_estate {
    id_real_estate: Int
    project_name: String
    area: String
    bed_count: Int
    price: Float
    short_description: String
    type: String
    images: [image_gallery]
  }

  type Query {
    real_estates: [real_estate]
    search_real_estates(
      type: String
      min_price: Int
      max_price: Int
      bed_count: Int
      area: String
    ): [real_estate]
  }
`

module.exports = { typeDefs }