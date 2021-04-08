import { rest } from 'msw'

// gun
import karabin from './img/gun/karabin.png'
import ak47 from './img/gun/ak47.png'
import colt from './img/gun/colt.png'
import MP5 from './img/gun/MP5.png'
import karabin_maszynowy from './img/gun/karabin_maszynowy.png'
import karabin_szturm from './img/gun/karabin_szturm.png'
import magnum44 from './img/gun/magnum44.png'
import micro_uzi_mac from './img/gun/micro_uzi_mac-11.png'
import snajper from './img/gun/snajper.png'
//clothing
import jacket from './img/clothing/clothing.png'
import kamizelka from './img/clothing/kamizelka.png'
import kurtka1 from './img/clothing/kurtka1.png'
import kurtka2 from './img/clothing/kurtka2.png'

//ammunition
import ammunition from './img/ammunition/ammunition.png'
import kula from './img/ammunition/kula.png'
import nabój from './img/ammunition/nabój.png'
import pocisk from './img/ammunition/pocisk.png'

//knife
import knife from './img/knife/knife.png'
import bojowy from './img/knife/bojowy.png'
import mysliwski from './img/knife/mysliwski.png'
import survival from './img/knife/survival.png'

import glasses from './img/glasses/glasses.png'
import holster from './img/holster/holster.png'
import optics from './img/optics/optics.png'
import wardrobe from './img/wardrobe/wardrobe.png'
import vest from './img/vest/vest.png'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // const { username } = req.body
    return res(
      ctx.status(200),
      ctx.json({
        // id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        // username,
        email: 'babanarowerze5@gmail.com',
        password: 'jakiehaslo',
      })
    )
  }),
  rest.post('/orders', (req, res,ctx) => {
    return res(
      ctx.status(200),
      ctx.json({

      })
    )
  }),
  rest.get('/categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        categories:[
          {
            name: 'Home',
            category: 'all'
          },
          {
            name: 'broń',
            category: 'gun'
          },
          {
            name: 'noże',
            category: 'knife'
          },
          {
            name: 'szafy na broń',
            category: 'wardrobe'
          },
          {
            name: 'kabury',
            category: 'holster'
          },
          {
            name: 'kamizelki',
            category: 'vest'
          },
          {
            name: 'lornetki',
            category:'optics'
          },
          {
            name: 'kule',
            category:'ammunition'
          }

        ]
      })
    )
  }),
  rest.get('/recommendedProducts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data:[
          {
            id: `9bf6d375-9862-4f08-be7f-740bb36ff94c453`,
            category:'gun',
            name:'karabin mg445',
            img: karabin,
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 45,
          },
          {
            id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16a78`,
            category:'knife',
            name: 'nóż siekacz',
            img:knife,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 450,
          },
          {
            id:`f3ce4b78-c509-4d7c-bac8-d2385f5ac8a567`,
            category: 'ammunition',
            name: 'kule przelotowe',
            img:ammunition,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 550,
          },
          {
            id:`e97aee81-fe74-4fea-be88-895729f6aabd87`,
            category:'clothing',
            name: 'kurtka moro',
            img: jacket,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 200,
          },
          {
          id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16b54`,
          category:'knife',
          name: 'bojowy',
          img:bojowy,
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
          amount:1,
          price: 480,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224g7886`,
            category:'clothing',
            name: 'kamizelka',
            img:kamizelka,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 450,
          },
        
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224g8675`,
            category:'gun',
            name: 'micro_uzi_mac',
            img:micro_uzi_mac,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 450,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224h45646`,
            category:'clothing',
            name: 'kurtka komandos',
            img:kurtka2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 450,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224h456461`,
            category:'gun',
            name: 'snajper talib',
            img:snajper,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 450,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224b22`,
            category:'gun',
            name: 'Colt',
            img:colt,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 480,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224c33`,
            category:'gun',
            name: 'MP5',
            img:MP5,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 750,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224b55`,
            category:'ammunition',
            name: 'kula',
            img:kula,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 950,
          },
          {
            id:`486e76c6-cfb5-45db-b5c7-3830d3ec224d44`,
            category:'gun',
            name: 'karabin_maszynowy',
            img:karabin_maszynowy,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
            amount:1,
            price: 11200,
          },

        ]
      })
    )
  }),
  rest.get('/products',(req, res,ctx)=> {
    return res(
      ctx.status(200),
      ctx.json({
        data:[
                  {
                    id: `9bf6d375-9862-4f08-be7f-740bb36ff94c453`,
                    category:'gun',
                    name:'karabin mg445',
                    img: karabin,
                    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 45,
                  },
                  {
                    id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16a78`,
                    category:'knife',
                    name: 'nóż siekacz',
                    img:knife,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`f3ce4b78-c509-4d7c-bac8-d2385f5ac8a567`,
                    category: 'ammunition',
                    name: 'kule przelotowe',
                    img:ammunition,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 550,
                  },
                  {
                    id:`e97aee81-fe74-4fea-be88-895729f6aabd87`,
                    category:'clothing',
                    name: 'kurtka moro',
                    img: jacket,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 200,
                  },
                  {
                  id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16b54`,
                  category:'knife',
                  name: 'bojowy',
                  img:bojowy,
                  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                  amount:1,
                  price: 480,
                  },
                  {
                    id:`315a9f39-85be-4124-94c9-878b6ddb9b42123`,
                    category:'optics',
                    name: 'kolimator Specter',
                    img: optics,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 800,
                  },
                  {
                    id: `9bf6d375-9862-4f08-be7f-740bb36ff94d456`,
                    category:'gun',
                    name:'ak47 ',
                    img: ak47,
                    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 600,
                  },
                  {
                    id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16b787`,
                    category:'knife',
                    name: 'myśliwski',
                    img:mysliwski,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 150,
                    },
                  {
                    id:`08283907-18ad-4967-ad26-6e3500456eab23`,
                    category:'wardrobe',
                    name: 'szafa na broń',
                    img: wardrobe,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 1050

                  },
                  {
                    id:`aee1bd99-23b1-4aa6-9375-5a3f92c6749e786`,
                    category:'glasses',
                    name: 'okulary snajper',
                    img: glasses,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`a9999f79-c4e4-47aa-9204-5774fb794461546`,
                    category:'holster',
                    name: 'kabura ms588',
                    img: holster,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 100,
                  },
                  {
                    id: `99b9d759-6ccf-4dd2-a509-e7a949c7a16bhg878`,
                    category:'knife',
                    name: 'survival',
                    img:survival,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 750,
                    },
                  {
                    id:`3e8136b6-f74e-4ff4-8ba6-2a645712c10777`,
                    category:'vest',
                    name: 'kamizelk grom',
                    img: vest,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 1450,
                  },
                  {
                    id: `2dae2944-d5cd-45ed-a2ca-a8e9426a889388"`,
                    category:'gun',
                    name:'karabin mg445',
                    img: karabin,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 700
                  },
                  {
                    id: `9c68f73e-5f81-42bb-817e-7f9735686e9c99"`,
                    category:'knife',
                    name: 'nóż siekacz',
                    img:knife,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224a11`,
                    category:'ammunition',
                    name: 'kule przelotowe',
                    img:ammunition,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224b22`,
                    category:'gun',
                    name: 'Colt',
                    img:colt,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 480,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224c33`,
                    category:'gun',
                    name: 'MP5',
                    img:MP5,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 750,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224b55`,
                    category:'ammunition',
                    name: 'kula',
                    img:kula,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 950,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224d44`,
                    category:'gun',
                    name: 'karabin_maszynowy',
                    img:karabin_maszynowy,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 11200,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224e222`,
                    category:'gun',
                    name: 'karabin_szturm',
                    img:karabin_szturm,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224b123`,
                    category:'ammunition',
                    name: 'pocisk',
                    img:pocisk,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224h456`,
                    category:'clothing',
                    name: 'kurtka army',
                    img:kurtka1,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224f787`,
                    category:'gun',
                    name: 'magnum44',
                    img:magnum44,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224d2222`,
                    category:'ammunition',
                    name: 'pocisk',
                    img:nabój,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224g7886`,
                    category:'clothing',
                    name: 'kamizelka',
                    img:kamizelka,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224g8675`,
                    category:'gun',
                    name: 'micro_uzi_mac',
                    img:micro_uzi_mac,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224h45646`,
                    category:'clothing',
                    name: 'kurtka komandos',
                    img:kurtka2,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
                  {
                    id:`486e76c6-cfb5-45db-b5c7-3830d3ec224h456461`,
                    category:'gun',
                    name: 'snajper talib',
                    img:snajper,
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officia, et excepturi ratione libero voluptatibus sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.Sed impedit maxime, illo nam corporis accusantium unde natus voluptatum quam consequuntur molestiae? Quisquam, voluptates.',
                    amount:1,
                    price: 450,
                  },
        ]
      })
    )
  })
]