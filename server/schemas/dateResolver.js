const { GraphQLScalarType, Kind } = require('graphql');

const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar type',
  parseValue(value) {
    // Logic to parse a Date value from the client
    return new Date(value);
  },
  serialize(value) {
    // Logic to serialize a Date value to send to the client
    return value.toISOString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Logic to parse a Date value from an AST string literal
      return new Date(ast.value);
    }
    return null;
  },
});

module.exports = DateScalar;