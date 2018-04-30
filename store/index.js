import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      indexedUser: 0,
      indexedProduct: 0,
      users: [
        {
          name: 'Sophia Gonzalez',
          img: '/profile2.jpg',
          location: 'San Francisco',
          currentPrice: 99.28,
          onSale: true,
          sku: 'A1928',
          bio:
            'Had a brief careerwith jack-in-the-boxes in Phoenix, AZ. Spent several months managing squirt guns and implementing toy elephants.',
          following: 789,
          followers: 2748,
          photos: 94,
          days: 32,
          trips: ['Honolulu', 'Burmuda', 'Los Cabos', 'San Antonio']
        },
        {
          name: 'Ben Allen',
          img: '/profile3.jpg',
          location: 'Boston',
          bio:
            'Bacon nerd. Freelance twitter practitioner. Social media nerd. Pop culture junkie. Proud alcohol advocate. Food geek.',
          following: 140,
          followers: 789,
          photos: 32,
          days: 5,
          trips: ['Honolulu', 'Peru', 'San Francisco']
        },
        {
          name: 'Jill Fernandez',
          img: '/profile4.jpg',
          location: 'Seattle',
          bio:
            'Prone to fits of apathy. Writer. Devoted gamer. Web scholar. Hipster-friendly music advocate. Problem solver. Student. Twitter fanatic.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel1',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel2',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel3',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel4',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthias Obel5',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel6',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel7',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel8',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        }
      ],
      products:[
        {
          "sku": "FC5549",
          "name": "Pork - Hock And Feet Attached",
          "img": "https://placeimg.com/200/200/tech?i=FC5549",
          "currentPrice": 1979.52,
          "onSale": false,
          "copy": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          "isActive": true,
          "shipping": 24.31,
          "inStock": true
        },
        {
          "sku": "FC9859",
          "name": "Sausage - Blood Pudding",
          "img": "https://placeimg.com/200/200/tech?i=FC9859",
          "currentPrice": 2127.73,
          "onSale": true,
          "copy": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "isActive": true,
          "shipping": 22.52,
          "inStock": false
        },
        {
          "sku": "FC2473",
          "name": "Spice - Onion Powder Granulated",
          "img": "https://placeimg.com/200/200/tech?i=FC2473",
          "currentPrice": 242.89,
          "onSale": false,
          "copy": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          "isActive": true,
          "shipping": 12.9,
          "inStock": true
        },
        {
          "sku": "FC2563",
          "name": "Silicone Parch. 16.3x24.3",
          "img": "https://placeimg.com/200/200/tech?i=FC2563",
          "currentPrice": 899.34,
          "onSale": true,
          "copy": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
          "isActive": false,
          "shipping": 39.75,
          "inStock": false
        },
        {
          "sku": "FC0999",
          "name": "Oyster - In Shell",
          "img": "https://placeimg.com/200/200/tech?i=FC0999",
          "currentPrice": 506.77,
          "onSale": false,
          "copy": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "isActive": false,
          "shipping": 78.27,
          "inStock": false
        },
        {
          "sku": "FC6214",
          "name": "Corn - Cream, Canned",
          "img": "https://placeimg.com/200/200/tech?i=FC6214",
          "currentPrice": 1906.13,
          "onSale": true,
          "copy": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          "isActive": false,
          "shipping": 14.14,
          "inStock": true
        },
        {
          "sku": "FC0624",
          "name": "Yoghurt Tubes",
          "img": "https://placeimg.com/200/200/tech?i=FC0624",
          "currentPrice": 256.89,
          "onSale": true,
          "copy": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          "isActive": true,
          "shipping": 10.16,
          "inStock": true
        },
        {
          "sku": "FC8026",
          "name": "Brandy Apricot",
          "img": "https://placeimg.com/200/200/tech?i=FC8026",
          "currentPrice": 771.03,
          "onSale": false,
          "copy": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          "isActive": false,
          "shipping": 95.15,
          "inStock": true
        },
        {
          "sku": "FC6264",
          "name": "Squid Ink",
          "img": "https://placeimg.com/200/200/tech?i=FC6264",
          "currentPrice": 1925.01,
          "onSale": false,
          "copy": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": false,
          "shipping": 79.63,
          "inStock": true
        },
        {
          "sku": "FC6141",
          "name": "Beer - Heinekin",
          "img": "https://placeimg.com/200/200/tech?i=1FC6141",
          "currentPrice": 839.23,
          "onSale": true,
          "copy": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "isActive": true,
          "shipping": 49.29,
          "inStock": true
        },
        {
          "sku": "FC2000",
          "name": "Cheese - Cambozola",
          "img": "https://placeimg.com/200/200/tech?i=1FC2000",
          "currentPrice": 922.03,
          "onSale": false,
          "copy": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          "isActive": false,
          "shipping": 4.39,
          "inStock": true
        },
        {
          "sku": "FC2266",
          "name": "Beef - Eye Of Round",
          "img": "https://placeimg.com/200/200/tech?i=1FC2266",
          "currentPrice": 1528.76,
          "onSale": false,
          "copy": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          "isActive": true,
          "shipping": 72.41,
          "inStock": true
        },
        {
          "sku": "FC6246",
          "name": "Chocolate - Milk Coating",
          "img": "https://placeimg.com/200/200/tech?i=1FC6246",
          "currentPrice": 2416.25,
          "onSale": true,
          "copy": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          "isActive": true,
          "shipping": 97.66,
          "inStock": false
        },
        {
          "sku": "FC0404",
          "name": "Sea Bass - Fillets",
          "img": "https://placeimg.com/200/200/tech?i=FC0404",
          "currentPrice": 523.49,
          "onSale": true,
          "copy": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          "isActive": true,
          "shipping": 37.67,
          "inStock": false
        },
        {
          "sku": "FC3671",
          "name": "Containter - 3oz Microwave Rect.",
          "img": "https://placeimg.com/200/200/tech?i=FC3671",
          "currentPrice": 1176.28,
          "onSale": true,
          "copy": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          "isActive": true,
          "shipping": 17.96,
          "inStock": false
        },
        {
          "sku": "FC2796",
          "name": "Filter - Coffee",
          "img": "https://placeimg.com/200/200/tech?i=1FC2796",
          "currentPrice": 1033.1,
          "onSale": true,
          "copy": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "isActive": false,
          "shipping": 11.7,
          "inStock": false
        },
        {
          "sku": "FC8653",
          "name": "Tart - Raisin And Pecan",
          "img": "https://placeimg.com/200/200/tech?i=FC8653",
          "currentPrice": 1833.86,
          "onSale": true,
          "copy": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "isActive": true,
          "shipping": 37.55,
          "inStock": true
        },
        {
          "sku": "FC3380",
          "name": "Duck - Whole",
          "img": "https://placeimg.com/200/200/tech?i=FC3380",
          "currentPrice": 2154.81,
          "onSale": true,
          "copy": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          "isActive": false,
          "shipping": 1.08,
          "inStock": true
        },
        {
          "sku": "FC8041",
          "name": "Flour - Teff",
          "img": "https://placeimg.com/200/200/tech?i=FC8041",
          "currentPrice": 283.01,
          "onSale": false,
          "copy": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
          "isActive": true,
          "shipping": 84.6,
          "inStock": false
        },
        {
          "sku": "FC6725",
          "name": "Wine - Charddonnay Errazuriz",
          "img": "https://placeimg.com/200/200/tech?i=FC6725",
          "currentPrice": 569.68,
          "onSale": false,
          "copy": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          "isActive": true,
          "shipping": 97.93,
          "inStock": false
        },
        {
          "sku": "FC3131",
          "name": "Bread - Raisin Walnut Oval",
          "img": "https://placeimg.com/200/200/tech?i=FC3131",
          "currentPrice": 501.55,
          "onSale": false,
          "copy": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          "isActive": true,
          "shipping": 51.82,
          "inStock": true
        },
        {
          "sku": "FC7089",
          "name": "Wine - Red, Antinori Santa",
          "img": "https://placeimg.com/200/200/tech?i=FC7089",
          "currentPrice": 928.0,
          "onSale": false,
          "copy": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          "isActive": false,
          "shipping": 24.16,
          "inStock": true
        },
        {
          "sku": "FC6672",
          "name": "Pomegranates",
          "img": "https://placeimg.com/200/200/tech?i=FC6672",
          "currentPrice": 246.79,
          "onSale": false,
          "copy": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "isActive": true,
          "shipping": 44.26,
          "inStock": true
        },
        {
          "sku": "FC5403",
          "name": "Cocoa Powder - Dutched",
          "img": "https://placeimg.com/200/200/tech?i=FC5403",
          "currentPrice": 2218.35,
          "onSale": true,
          "copy": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "isActive": true,
          "shipping": 62.34,
          "inStock": true
        },
        {
          "sku": "FC5654",
          "name": "Maple Syrup",
          "img": "https://placeimg.com/200/200/tech?i=FC5654",
          "currentPrice": 1100.2,
          "onSale": false,
          "copy": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "isActive": true,
          "shipping": 69.23,
          "inStock": false
        },
        {
          "sku": "FC2830",
          "name": "Shichimi Togarashi Peppeers",
          "img": "https://placeimg.com/200/200/tech?i=FC2830",
          "currentPrice": 2490.58,
          "onSale": false,
          "copy": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          "isActive": false,
          "shipping": 77.82,
          "inStock": true
        },
        {
          "sku": "FC7779",
          "name": "Crab - Meat",
          "img": "https://placeimg.com/200/200/tech?i=FC7779",
          "currentPrice": 1468.15,
          "onSale": false,
          "copy": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          "isActive": true,
          "shipping": 15.31,
          "inStock": false
        },
        {
          "sku": "FC8664",
          "name": "Extract - Vanilla,artificial",
          "img": "https://placeimg.com/200/200/tech?i=FC8664",
          "currentPrice": 1094.56,
          "onSale": false,
          "copy": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          "isActive": true,
          "shipping": 31.19,
          "inStock": false
        },
        {
          "sku": "FC5111",
          "name": "Soup - Campbells, Butternut",
          "img": "https://placeimg.com/200/200/tech?i=FC5111",
          "currentPrice": 2125.93,
          "onSale": false,
          "copy": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          "isActive": false,
          "shipping": 89.25,
          "inStock": false
        },
        {
          "sku": "FC2204",
          "name": "Crab - Back Fin Meat, Canned",
          "img": "https://placeimg.com/200/200/tech?i=FC2204",
          "currentPrice": 2341.82,
          "onSale": true,
          "copy": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          "isActive": false,
          "shipping": 94.46,
          "inStock": true
        },
        {
          "sku": "FC6564",
          "name": "Bread - Onion Focaccia",
          "img": "https://placeimg.com/200/200/tech?i=FC6564",
          "currentPrice": 703.41,
          "onSale": true,
          "copy": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          "isActive": true,
          "shipping": 6.95,
          "inStock": true
        },
        {
          "sku": "FC7867",
          "name": "Carbonated Water - Lemon Lime",
          "img": "https://placeimg.com/200/200/tech?i=FC7867",
          "currentPrice": 875.07,
          "onSale": false,
          "copy": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          "isActive": false,
          "shipping": 12.51,
          "inStock": true
        },
        {
          "sku": "FC8175",
          "name": "Table Cloth 54x72 Colour",
          "img": "https://placeimg.com/200/200/tech?i=1FC8175",
          "currentPrice": 2128.47,
          "onSale": true,
          "copy": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          "isActive": true,
          "shipping": 27.64,
          "inStock": true
        },
        {
          "sku": "FC9140",
          "name": "Sobe - Cranberry Grapefruit",
          "img": "https://placeimg.com/200/200/tech?i=FC9140",
          "currentPrice": 1693.21,
          "onSale": false,
          "copy": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          "isActive": false,
          "shipping": 48.48,
          "inStock": true
        },
        {
          "sku": "FC7474",
          "name": "Curry Powder Madras",
          "img": "https://placeimg.com/200/200/tech?i=FC7474",
          "currentPrice": 1366.42,
          "onSale": false,
          "copy": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          "isActive": true,
          "shipping": 79.87,
          "inStock": false
        },
        {
          "sku": "FC0165",
          "name": "Guava",
          "img": "https://placeimg.com/200/200/tech?i=FC0165",
          "currentPrice": 150.02,
          "onSale": false,
          "copy": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          "isActive": false,
          "shipping": 85.95,
          "inStock": false
        },
        {
          "sku": "FC5861",
          "name": "Kiwano",
          "img": "https://placeimg.com/200/200/tech?i=1FC5861",
          "currentPrice": 443.7,
          "onSale": false,
          "copy": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          "isActive": true,
          "shipping": 56.94,
          "inStock": false
        },
        {
          "sku": "FC4006",
          "name": "Bagel - 12 Grain Preslice",
          "img": "https://placeimg.com/200/200/tech?i=FC4006",
          "currentPrice": 2087.09,
          "onSale": false,
          "copy": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "isActive": true,
          "shipping": 35.01,
          "inStock": true
        },
        {
          "sku": "FC6963",
          "name": "Yogurt - Blueberry, 175 Gr",
          "img": "https://placeimg.com/200/200/tech?i=1FC6963",
          "currentPrice": 2409.92,
          "onSale": true,
          "copy": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          "isActive": true,
          "shipping": 54.09,
          "inStock": false
        },
        {
          "sku": "FC0724",
          "name": "Wine - Red, Mosaic Zweigelt",
          "img": "https://placeimg.com/200/200/tech?i=FC0724",
          "currentPrice": 326.03,
          "onSale": true,
          "copy": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          "isActive": false,
          "shipping": 41.63,
          "inStock": true
        },
        {
          "sku": "FC0812",
          "name": "Olives - Nicoise",
          "img": "https://placeimg.com/200/200/tech?i=1FC0812",
          "currentPrice": 3.54,
          "onSale": false,
          "copy": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          "isActive": false,
          "shipping": 48.41,
          "inStock": false
        },
        {
          "sku": "FC4000",
          "name": "Wine - Puligny Montrachet A.",
          "img": "https://placeimg.com/200/200/tech?i=FC4000",
          "currentPrice": 1743.73,
          "onSale": false,
          "copy": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          "isActive": true,
          "shipping": 24.37,
          "inStock": true
        },
        {
          "sku": "FC5303",
          "name": "Brandy - Orange, Mc Guiness",
          "img": "https://placeimg.com/200/200/tech?i=FC5303",
          "currentPrice": 876.86,
          "onSale": false,
          "copy": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          "isActive": false,
          "shipping": 13.39,
          "inStock": true
        },
        {
          "sku": "FC6395",
          "name": "Hand Towel",
          "img": "https://placeimg.com/200/200/tech?i=FC6395",
          "currentPrice": 1834.83,
          "onSale": true,
          "copy": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          "isActive": false,
          "shipping": 90.67,
          "inStock": false
        },
        {
          "sku": "FC2923",
          "name": "Beef Ground Medium",
          "img": "https://placeimg.com/200/200/tech?i=FC2923",
          "currentPrice": 488.94,
          "onSale": true,
          "copy": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          "isActive": true,
          "shipping": 60.88,
          "inStock": false
        },
        {
          "sku": "FC2659",
          "name": "Cactus Pads",
          "img": "https://placeimg.com/200/200/tech?i=FC2659",
          "currentPrice": 250.22,
          "onSale": true,
          "copy": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          "isActive": false,
          "shipping": 30.08,
          "inStock": false
        },
        {
          "sku": "FC2349",
          "name": "Mussels - Frozen",
          "img": "https://placeimg.com/200/200/tech?i=1FC2349",
          "currentPrice": 1866.23,
          "onSale": true,
          "copy": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          "isActive": false,
          "shipping": 47.15,
          "inStock": false
        },
        {
          "sku": "FC5534",
          "name": "Spring Roll Wrappers",
          "img": "https://placeimg.com/200/200/tech?i=1FC5534",
          "currentPrice": 2227.47,
          "onSale": true,
          "copy": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "isActive": false,
          "shipping": 78.18,
          "inStock": true
        },
        {
          "sku": "FC6943",
          "name": "Carrots - Jumbo",
          "img": "https://placeimg.com/200/200/tech?i=1FC6943",
          "currentPrice": 1328.74,
          "onSale": false,
          "copy": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": true,
          "shipping": 37.74,
          "inStock": false
        },
        {
          "sku": "FC1507",
          "name": "Calypso - Black Cherry Lemonade",
          "img": "https://placeimg.com/200/200/tech?i=1FC1507",
          "currentPrice": 1992.43,
          "onSale": false,
          "copy": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": true,
          "shipping": 73.13,
          "inStock": false
        },
        {
          "sku": "FC8629",
          "name": "Tabasco Sauce, 2 Oz",
          "img": "https://placeimg.com/200/200/tech?i=FC8629",
          "currentPrice": 568.9,
          "onSale": false,
          "copy": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          "isActive": true,
          "shipping": 25.53,
          "inStock": false
        },
        {
          "sku": "FC8743",
          "name": "Cocoa Butter",
          "img": "https://placeimg.com/200/200/tech?i=1FC8743",
          "currentPrice": 274.33,
          "onSale": true,
          "copy": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": true,
          "shipping": 82.05,
          "inStock": true
        },
        {
          "sku": "FC8526",
          "name": "Cheese - Cheddar, Medium",
          "img": "https://placeimg.com/200/200/tech?i=1FC8526",
          "currentPrice": 806.5,
          "onSale": false,
          "copy": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
          "isActive": true,
          "shipping": 84.56,
          "inStock": true
        },
        {
          "sku": "FC6700",
          "name": "Appetizer - Escargot Puff",
          "img": "https://placeimg.com/200/200/tech?i=FC6700",
          "currentPrice": 2345.06,
          "onSale": true,
          "copy": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": true,
          "shipping": 54.62,
          "inStock": false
        },
        {
          "sku": "FC4028",
          "name": "Hersey Shakes",
          "img": "https://placeimg.com/200/200/tech?i=FC4028",
          "currentPrice": 1921.14,
          "onSale": false,
          "copy": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          "isActive": true,
          "shipping": 90.19,
          "inStock": false
        },
        {
          "sku": "FC1459",
          "name": "Bread Foccacia Whole",
          "img": "https://placeimg.com/200/200/tech?i=FC1459",
          "currentPrice": 23.87,
          "onSale": false,
          "copy": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          "isActive": false,
          "shipping": 59.9,
          "inStock": false
        },
        {
          "sku": "FC1371",
          "name": "Pastry - Baked Scones - Mini",
          "img": "https://placeimg.com/200/200/tech?i=FC1371",
          "currentPrice": 1941.21,
          "onSale": true,
          "copy": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          "isActive": true,
          "shipping": 54.05,
          "inStock": true
        },
        {
          "sku": "FC8928",
          "name": "Lettuce - Green Leaf",
          "img": "https://placeimg.com/200/200/tech?i=FC8928",
          "currentPrice": 213.0,
          "onSale": false,
          "copy": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "isActive": false,
          "shipping": 13.94,
          "inStock": false
        },
        {
          "sku": "FC5631",
          "name": "Hickory Smoke, Liquid",
          "img": "https://placeimg.com/200/200/tech?i=1FC5631",
          "currentPrice": 2359.19,
          "onSale": false,
          "copy": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "isActive": false,
          "shipping": 16.47,
          "inStock": false
        },
        {
          "sku": "FC6650",
          "name": "Lamb - Leg, Diced",
          "img": "https://placeimg.com/200/200/tech?i=FC6650",
          "currentPrice": 1533.43,
          "onSale": true,
          "copy": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
          "isActive": true,
          "shipping": 32.67,
          "inStock": false
        },
        {
          "sku": "FC6843",
          "name": "Soup - Campbells, Minestrone",
          "img": "https://placeimg.com/200/200/tech?i=1FC6843",
          "currentPrice": 736.75,
          "onSale": false,
          "copy": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          "isActive": false,
          "shipping": 33.81,
          "inStock": false
        },
        {
          "sku": "FC1575",
          "name": "Marjoram - Fresh",
          "img": "https://placeimg.com/200/200/tech?i=1FC1575",
          "currentPrice": 1096.06,
          "onSale": false,
          "copy": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          "isActive": false,
          "shipping": 13.18,
          "inStock": true
        },
        {
          "sku": "FC7022",
          "name": "Tray - 12in Rnd Blk",
          "img": "https://placeimg.com/200/200/tech?i=FC7022",
          "currentPrice": 1461.73,
          "onSale": true,
          "copy": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          "isActive": true,
          "shipping": 21.65,
          "inStock": true
        },
        {
          "sku": "FC7861",
          "name": "Flower - Commercial Spider",
          "img": "https://placeimg.com/200/200/tech?i=1FC7861",
          "currentPrice": 130.24,
          "onSale": true,
          "copy": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          "isActive": true,
          "shipping": 20.93,
          "inStock": true
        }],
      places: [
        {
          name: 'Honolulu',
          stars: 4,
          rating: 8.9,
          img: '/honolulu.jpg',
          description:
            'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
        },
        {
          name: 'Santorini',
          stars: 4,
          rating: 7.8,
          img: '/santorini.jpg',
          description:
            'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in places, spilling like icy cornices down the terraced rock.'
        },
        {
          name: 'Cusco',
          stars: 3,
          rating: 7.4,
          img: '/peru.jpg',
          description:
            'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
        }
      ]
    },
    getters: {
      selectedUser: state => {
        return state.users[state.indexedUser]
      },
      currentProduct: state => {
        return state.products[state.indexedProduct]
      }
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      },
      addFollower(state) {
        state.users[state.indexedUser].followers++
      },
      removeFollower(state) {
        state.users[state.indexedUser].followers--
      },
      changeUser(state, i) {
        state.indexedUser = i
      },
      selectProduct(state, i) {
        state.indexedProduct = i
      }
    }
  })
}

export default createStore
