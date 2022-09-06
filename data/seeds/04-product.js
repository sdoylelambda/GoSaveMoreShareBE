exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("product")
  //   .del()
  //   .then(function () {
  // Inserts seed entries
  return knex("product").insert([
    {
      category_id: 4,
      productName: "Flour - Strong",
      image: "https://picsum.photos/300/200?random=1",
      price: 676,
      shortDescription:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      description:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 5,
      stock: 90,
      brand: "Yogurt - Assorted Pack",
    },
    {
      category_id: 4,
      productName: "Vacuum Bags 12x16",
      image: "https://picsum.photos/300/200?random=2",
      price: 279,
      shortDescription:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      description:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 5,
      stock: 21,
      brand: "Pepper - White, Whole",
    },
    {
      category_id: 6,
      productName: "Cheese - Manchego, Spanish",
      image: "https://picsum.photos/300/200?random=3",
      price: 39,
      shortDescription:
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      ratings: 2,
      stock: 3,
      brand: "Veal - Insides, Grains",
    },
    {
      category_id: 6,
      productName: "Nacho Chips",
      image: "https://picsum.photos/300/200?random=4",
      price: 67,
      shortDescription:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      ratings: 1,
      stock: 75,
      brand: "Mushroom - Chantrelle, Fresh",
    },
    {
      category_id: 5,
      productName: "Lobster - Live",
      image: "https://picsum.photos/300/200?random=5",
      price: 699,
      shortDescription:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      ratings: 4,
      stock: 81,
      brand: "Beef - Bones, Marrow",
    },
    {
      category_id: 3,
      productName: "Carbonated Water - Raspberry",
      image: "https://picsum.photos/300/200?random=6",
      price: 668,
      shortDescription:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      ratings: 1,
      stock: 88,
      brand: "Yoplait - Strawbrasp Peac",
    },
    {
      category_id: 1,
      productName: "Chivas Regal - 12 Year Old",
      image: "https://picsum.photos/300/200?random=7",
      price: 794,
      shortDescription:
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 3,
      stock: 44,
      brand: "Apple - Delicious, Golden",
    },
    {
      category_id: 5,
      productName: "Bread - Roll, Soft White Round",
      image: "https://picsum.photos/300/200?random=8",
      price: 26,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      ratings: 1,
      stock: 46,
      brand: "Broom Handle",
    },
    {
      category_id: 2,
      productName: "Sole - Dover, Whole, Fresh",
      image: "https://picsum.photos/300/200?random=9",
      price: 963,
      shortDescription:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      ratings: 4,
      stock: 57,
      brand: "Bread Cranberry Foccacia",
    },
    {
      category_id: 5,
      productName: "Cheese - Cream Cheese",
      image: "https://picsum.photos/300/200?random=10",
      price: 899,
      shortDescription:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      ratings: 2,
      stock: 61,
      brand: "Noodles - Steamed Chow Mein",
    },
    {
      category_id: 1,
      productName: "Beef - Tongue, Cooked",
      image: "https://picsum.photos/300/200?random=11",
      price: 142,
      shortDescription:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      ratings: 3,
      stock: 64,
      brand: "Sun - Dried Tomatoes",
    },
    {
      category_id: 4,
      productName: "Soup Campbells - Tomato Bisque",
      image: "https://picsum.photos/300/200?random=12",
      price: 569,
      shortDescription:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      ratings: 4,
      stock: 43,
      brand: "Cookie Dough - Oatmeal Rasin",
    },
    {
      category_id: 2,
      productName: "Fish - Bones",
      image: "https://picsum.photos/300/200?random=13",
      price: 300,
      shortDescription:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      description:
        "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      ratings: 5,
      stock: 49,
      brand: "Pepper - Chipotle, Canned",
    },
    {
      category_id: 2,
      productName: "Cup - 3.5oz, Foam",
      image: "https://picsum.photos/300/200?random=14",
      price: 557,
      shortDescription:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      ratings: 5,
      stock: 24,
      brand: "Worcestershire Sauce",
    },
    {
      category_id: 2,
      productName: "Ham - Procutinni",
      image: "https://picsum.photos/300/200?random=15",
      price: 487,
      shortDescription:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      ratings: 2,
      stock: 46,
      brand: "Scallops - U - 10",
    },
    {
      category_id: 4,
      productName: "Sausage - Chorizo",
      image: "https://picsum.photos/300/200?random=16",
      price: 454,
      shortDescription:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      ratings: 5,
      stock: 5,
      brand: "Vodka - Moskovskaya",
    },
    {
      category_id: 5,
      productName: "Phyllo Dough",
      image: "https://picsum.photos/300/200?random=17",
      price: 561,
      shortDescription:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 5,
      stock: 54,
      brand: "Extract Vanilla Pure",
    },
    {
      category_id: 3,
      productName: "Chambord Royal",
      image: "https://picsum.photos/300/200?random=18",
      price: 877,
      shortDescription:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      description:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      ratings: 3,
      stock: 86,
      brand: "Glass - Juice Clear 5oz 55005",
    },
    {
      category_id: 4,
      productName: "Mix - Cocktail Strawberry Daiquiri",
      image: "https://picsum.photos/300/200?random=19",
      price: 213,
      shortDescription:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      ratings: 3,
      stock: 77,
      brand: "Lamb - Sausage Casings",
    },
    {
      category_id: 6,
      productName: "Spice - Paprika",
      image: "https://picsum.photos/300/200?random=20",
      price: 758,
      shortDescription:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      ratings: 5,
      stock: 2,
      brand: "Cattail Hearts",
    },
    {
      category_id: 4,
      productName: "Chicken - Whole Roasting",
      image: "https://picsum.photos/300/200?random=21",
      price: 481,
      shortDescription:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      ratings: 5,
      stock: 90,
      brand: "Glycerine",
    },
    {
      category_id: 4,
      productName: "Cheese - Mozzarella, Shredded",
      image: "https://picsum.photos/300/200?random=22",
      price: 360,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 3,
      stock: 61,
      brand: "Zucchini - Green",
    },
    {
      category_id: 3,
      productName: "Basil - Fresh",
      image: "https://picsum.photos/300/200?random=23",
      price: 370,
      shortDescription:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      ratings: 1,
      stock: 22,
      brand: "Pepsi, 355 Ml",
    },
    {
      category_id: 1,
      productName: "Toamtoes 6x7 Select",
      image: "https://picsum.photos/300/200?random=24",
      price: 353,
      shortDescription:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      ratings: 3,
      stock: 55,
      brand: "Wine - Sogrape Mateus Rose",
    },
    {
      category_id: 2,
      productName: "Sprouts - China Rose",
      image: "https://picsum.photos/300/200?random=25",
      price: 606,
      shortDescription:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      description:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      ratings: 3,
      stock: 43,
      brand: "Beef - Striploin Aa",
    },
    {
      category_id: 2,
      productName: "Artichokes - Jerusalem",
      image: "https://picsum.photos/300/200?random=26",
      price: 517,
      shortDescription:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      ratings: 3,
      stock: 65,
      brand: "Muffin Mix - Corn Harvest",
    },
    {
      category_id: 5,
      productName: "Prunes - Pitted",
      image: "https://picsum.photos/300/200?random=27",
      price: 991,
      shortDescription:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      ratings: 2,
      stock: 19,
      brand: "Pimento - Canned",
    },
    {
      category_id: 6,
      productName: "Red Snapper - Fresh, Whole",
      image: "https://picsum.photos/300/200?random=28",
      price: 33,
      shortDescription:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      ratings: 3,
      stock: 95,
      brand: "V8 - Tropical Blend",
    },
    {
      category_id: 1,
      productName: "Wine - Clavet Saint Emilion",
      image: "https://picsum.photos/300/200?random=29",
      price: 750,
      shortDescription:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      ratings: 3,
      stock: 18,
      brand: "Eggwhite Frozen",
    },
    {
      category_id: 5,
      productName: "Wine La Vielle Ferme Cote Du",
      image: "https://picsum.photos/300/200?random=30s",
      price: 521,
      shortDescription:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      description:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 4,
      stock: 89,
      brand: "Hickory Smoke, Liquid",
    },
  ]);
  // });
};
