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
  rest.get('/products',(req, res,ctx)=> {
    return res(
      ctx.status(200),
      ctx.json({
        data:[
                  {
                    id: `9bf6d375-9862-4f08-be7f-740bb36ff94c`,
                    name:'karabin mg445',
                    img: karabin,
                    description:'zajebisty sprzęt itd'
                  },
                  {
                    id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16a`,
                    name: 'noż siekacz',
                    img:knife,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`f3ce4b78-c509-4d7c-bac8-d2385f5ac8a5`,
                    name: 'kule przelotowe',
                    img:ammunition,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`e97aee81-fe74-4fea-be88-895729f6aabd`,
                    name: 'kurtka moro',
                    img: clothing,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`315a9f39-85be-4124-94c9-878b6ddb9b42`,
                    name: 'kolimator Specter',
                    img: optics,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`08283907-18ad-4967-ad26-6e3500456eab`,
                    name: 'szafa na broń',
                    img: wardrobe,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`aee1bd99-23b1-4aa6-9375-5a3f92c6749e`,
                    name: 'okulary snajper',
                    img: glasses,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`a9999f79-c4e4-47aa-9204-5774fb794461`,
                    name: 'kabury ms588',
                    img: holster,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`3e8136b6-f74e-4ff4-8ba6-2a645712c107`,
                    name: 'kamizelk grom',
                    img: vest,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id: `2dae2944-d5cd-45ed-a2ca-a8e9426a8893"`,
                    name:'karabin mg445',
                    img: karabin,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id: `9c68f73e-5f81-42bb-817e-7f9735686e9c"`,
                    name: 'noż siekacz',
                    img:knife,
                    description: 'zajebisty sprzęt itd'
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224a`,
                    name: 'kule przelotowe',
                    img:ammunition,
                    description: 'zajebisty sprzęt itd'
                  },
        ]
      })
    )
  })
]