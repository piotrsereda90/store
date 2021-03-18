import { rest } from 'msw'
import karabin from './img/karabin.png'
import clothing from './img/clothing.png'
import glasses from './img/glasses.png'
import holster from './img/holster.png'
import knife from './img/knife.png'
import ammunition from './img/ammunition.png'
import optics from './img/optics.png'
import wardrobe from './img/wardrobe.png'
import vest from './img/vest.png'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // const { username } = req.body
   

    return res(
      ctx.status(200),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        // username,
        email: 'babanarowerze5@gmail.com',
        password: 'jakiehaslo',
      })
    )
  }),
  rest.get('/accessories',(req, res,ctx)=> {
    return res(
      ctx.status(200),
      ctx.json({
        data:[
                  {
                    name:'broń',
                    img: karabin,

                  },
                  {
                    name: 'noże',
                    img:knife,
                  },
                  {
                    name: 'amunicja',
                    img:ammunition
                  },
                  {
                    name: 'odzież',
                    img: clothing,
                  },
                  {
                    name: 'optyka',
                    img: optics,
                  },
                  {
                    name: 'szafy na broń',
                    img: wardrobe,
                  },
                  {
                    name: 'ochrona słuchu i oczu',
                    img: glasses
                  },
                  {
                    name: 'kabury',
                    img: holster,
                  },
                  {
                    name: 'kamizelki',
                    img: vest,
                  },
                  {
                    name:'broń',
                    img: karabin,

                  },
                  {
                    name: 'noże',
                    img:knife,
                  },
                  {
                    name: 'amunicja',
                    img:ammunition
                  },
        ]
      })
    )
  })
]