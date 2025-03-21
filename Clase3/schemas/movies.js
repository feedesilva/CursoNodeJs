const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(0),
  poster: z.string().url({ message: 'Poster must be a valid URL' }),
  genre: z.array(
    z.enum(['Action', 'Crime', 'Comedy', 'Drama', 'Horror', 'Sci-fi', 'Thriller']),
    {
      invalid_type_error: 'Genre must be an array of strings',
      required_error: 'Genre is required',
      invalid_enum_error:
        'Genre must be one of action, comedy, drama, horror, sci-fi, thriller'
    }
  )
})

function validateMovie (input) {
  return movieSchema.safeParse(input)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports =
{
  validateMovie,
  validatePartialMovie
}
