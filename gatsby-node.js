exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/en`,
    isPermanent: true,
  })
}