import { rest } from 'msw'
import { MOCK_DATA } from './constants'

export const handlers = [
  rest.get('/get-data', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_DATA))
  })
]
