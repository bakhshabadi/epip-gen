export const mapper = (_enum: any, value, enumName: string): string => {
  if (!value) {
    return 'null'
  }
  if (Object.values(_enum).length && Object.values(_enum)[value]) {
    return `'${Object.values(_enum)[value] as string}'`
  } else {
    throw Error(`invalid ${enumName}[${value}].`)
  }
}
