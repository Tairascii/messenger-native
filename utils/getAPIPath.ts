interface GetApiPathParams {
  version: string
  service: string
  path: string
}

export const getApiPath = ({
  version,
  service,
  path,
}: GetApiPathParams): string => {
  //TODO add service
  const finalPath = `${service}api/${version}${path}`

  return finalPath
}
