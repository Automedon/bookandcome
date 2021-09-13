export const fakeData = {
  limit: 20,
  offset: 0,
  count: 8,
  total: 8,
  results: [
    {
      id: "9d3d51a9-ebd2-461c-ac7b-4bbdc0cdad5c",
      version: 8,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T16:48:00.538Z",
      lastModifiedAt: "2021-09-08T14:45:38.838Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "85dab159-fb66-4014-ba2c-dfef5fd8cb02",
      },
      masterData: {
        current: {
          name: { "en-US": "Fish and chips" },
          description: { "en-US": "Fish and chips" },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "fish-and-chips" },
          metaTitle: { "de-DE": "", "en-US": "" },
          metaDescription: { "de-DE": "", "en-US": "" },
          masterVariant: {
            id: 1,
            sku: "00000001",
            key: "key1",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 1000,
                  fractionDigits: 2,
                },
                id: "cad07827-1a5b-45f3-b3ff-873444fc5f65",
                country: "US",
                validFrom: "2021-09-18T00:00:00.000Z",
                validUntil: "2021-09-27T00:00:00.000Z",
                tiers: [
                  {
                    minimumQuantity: 2,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 800,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Super-Crispy-fish-an-RU0l3xxM.jpg",
                dimensions: { w: 480, h: 480 },
              },
            ],
            attributes: [{ name: "gr", value: 700 }],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 10 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "fish" }, { text: "chips" }] },
        },
        staged: {
          name: { "en-US": "Fish and chips" },
          description: { "en-US": "Fish and chips" },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "fish-and-chips" },
          metaTitle: { "de-DE": "", "en-US": "" },
          metaDescription: { "de-DE": "", "en-US": "" },
          masterVariant: {
            id: 1,
            sku: "00000001",
            key: "key1",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 1000,
                  fractionDigits: 2,
                },
                id: "cad07827-1a5b-45f3-b3ff-873444fc5f65",
                country: "US",
                validFrom: "2021-09-18T00:00:00.000Z",
                validUntil: "2021-09-27T00:00:00.000Z",
                tiers: [
                  {
                    minimumQuantity: 2,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 800,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Super-Crispy-fish-an-RU0l3xxM.jpg",
                dimensions: { w: 480, h: 480 },
              },
            ],
            attributes: [{ name: "gr", value: 700 }],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 10 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "fish" }, { text: "chips" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "fish-and-chips",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "b2d2dfcd-9ad6-45b7-942a-d6f24879b9d2",
      version: 10,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:10:53.983Z",
      lastModifiedAt: "2021-09-08T14:45:38.833Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "a71cc65e-328b-495b-87ba-ac5317f85b78",
      },
      masterData: {
        current: {
          name: { "en-US": "BOURGOGNE DES FLANDRES " },
          description: {
            "en-US":
              "Wonderfully rich and complex beer, a blend of dark ale and Timmermans’ lambic, with an acidic note from the lambic cutting the dark roasted grains and spicy hops of the ale. The beer will be restored to its original home in Bruges in 2015 when a new brewery opens there.",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "bourgogne-des-flandres" },
          metaTitle: { "en-US": "BOURGOGNE DES FLANDRES " },
          metaDescription: {
            "en-US":
              "Wonderfully rich and complex beer, a blend of dark ale and Timmermans’ lambic, with an acidic note from the lambic cutting the dark roasted grains and spicy hops of the ale. The beer will be restored to its original home in Bruges in 2015 when a new brewery opens there.",
          },
          masterVariant: {
            id: 1,
            sku: "00021",
            key: "bourg",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 700,
                  fractionDigits: 2,
                },
                id: "a1b4c26f-f577-4264-8081-8a601ba282b6",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/6.-Bourgogne-des-Fla-Ku0JWfmk.jpg",
                dimensions: { w: 262, h: 524 },
              },
            ],
            attributes: [
              { name: "abv", value: 5 },
              { name: "ml", value: 250 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 20 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "belgian" }, { text: "beer" }] },
        },
        staged: {
          name: { "en-US": "BOURGOGNE DES FLANDRES " },
          description: {
            "en-US":
              "Wonderfully rich and complex beer, a blend of dark ale and Timmermans’ lambic, with an acidic note from the lambic cutting the dark roasted grains and spicy hops of the ale. The beer will be restored to its original home in Bruges in 2015 when a new brewery opens there.",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "bourgogne-des-flandres" },
          metaTitle: { "en-US": "BOURGOGNE DES FLANDRES " },
          metaDescription: {
            "en-US":
              "Wonderfully rich and complex beer, a blend of dark ale and Timmermans’ lambic, with an acidic note from the lambic cutting the dark roasted grains and spicy hops of the ale. The beer will be restored to its original home in Bruges in 2015 when a new brewery opens there.",
          },
          masterVariant: {
            id: 1,
            sku: "00021",
            key: "bourg",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 700,
                  fractionDigits: 2,
                },
                id: "a1b4c26f-f577-4264-8081-8a601ba282b6",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/6.-Bourgogne-des-Fla-Ku0JWfmk.jpg",
                dimensions: { w: 262, h: 524 },
              },
            ],
            attributes: [
              { name: "abv", value: 5 },
              { name: "ml", value: 250 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 20 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "belgian" }, { text: "beer" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "bour-de-fl",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "1abda2ab-9f4f-4c2c-a672-1d556535ea14",
      version: 10,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:15:16.810Z",
      lastModifiedAt: "2021-09-08T14:45:38.800Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "a71cc65e-328b-495b-87ba-ac5317f85b78",
      },
      masterData: {
        current: {
          name: { "en-US": "CHIMAY TRIPLE" },
          description: {
            "en-US":
              "One of the most underestimated triples in our country is the Chimay Tripel, formerly known as Chimay Blanche. This fantastic beer is the legacy of a great brewer, Père Theodore, who selected the yeast strains for the beer with monastic patience, back in 1966. This stalwart – 8% ABV – is golden blonde as a triple should be. It is a bit cloudy with a lovely head, mostly hoppy on the nose but when swirled in the glass, it releases a hint of ripe fruit. The taste is more intense, more bitter than malty. Dry, fresh and mature, with a bone dry and very lengthy finish. It’s a great beer that pairs well with soft cheeses of great character, like Brie de Meaux. Chimay Triple now comes in a magnificent Magnum bottle under the name ‘Cinq Cents",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "chimay-triple" },
          metaTitle: { "en-US": "CHIMAY TRIPLE" },
          metaDescription: {
            "en-US":
              "One of the most underestimated triples in our country is the Chimay Tripel, formerly known as Chimay Blanche. This fantastic beer is the legacy of a great brewer, Père Theodore, who selected the yeast strains for the beer with monastic patience, back in 1966. This stalwart – 8% ABV – is golden blonde as a triple should be. It is a bit cloudy with a lovely head, mostly hoppy on the nose but when swirled in the glass, it releases a hint of ripe fruit. The taste is more intense, more bitter than malty. Dry, fresh and mature, with a bone dry and very lengthy finish. It’s a great beer that pairs well with soft cheeses of great character, like Brie de Meaux. Chimay Triple now comes in a magnificent Magnum bottle under the name ‘Cinq Cents",
          },
          masterVariant: {
            id: 1,
            sku: "0000023",
            key: "chimay-triple",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 900,
                  fractionDigits: 2,
                },
                id: "528c9d69-167f-49e5-89ad-ae810515b306",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/13.-Chimay-Triple.jp-OGfru8Yj.jpg",
                dimensions: { w: 640, h: 424 },
              },
            ],
            attributes: [
              { name: "abv", value: 8 },
              { name: "ml", value: 330 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 21 },
          },
          variants: [],
          searchKeywords: {
            "en-US": [
              { text: "belgian" },
              { text: "beer" },
              { text: "triples" },
            ],
          },
        },
        staged: {
          name: { "en-US": "CHIMAY TRIPLE" },
          description: {
            "en-US":
              "One of the most underestimated triples in our country is the Chimay Tripel, formerly known as Chimay Blanche. This fantastic beer is the legacy of a great brewer, Père Theodore, who selected the yeast strains for the beer with monastic patience, back in 1966. This stalwart – 8% ABV – is golden blonde as a triple should be. It is a bit cloudy with a lovely head, mostly hoppy on the nose but when swirled in the glass, it releases a hint of ripe fruit. The taste is more intense, more bitter than malty. Dry, fresh and mature, with a bone dry and very lengthy finish. It’s a great beer that pairs well with soft cheeses of great character, like Brie de Meaux. Chimay Triple now comes in a magnificent Magnum bottle under the name ‘Cinq Cents",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "chimay-triple" },
          metaTitle: { "en-US": "CHIMAY TRIPLE" },
          metaDescription: {
            "en-US":
              "One of the most underestimated triples in our country is the Chimay Tripel, formerly known as Chimay Blanche. This fantastic beer is the legacy of a great brewer, Père Theodore, who selected the yeast strains for the beer with monastic patience, back in 1966. This stalwart – 8% ABV – is golden blonde as a triple should be. It is a bit cloudy with a lovely head, mostly hoppy on the nose but when swirled in the glass, it releases a hint of ripe fruit. The taste is more intense, more bitter than malty. Dry, fresh and mature, with a bone dry and very lengthy finish. It’s a great beer that pairs well with soft cheeses of great character, like Brie de Meaux. Chimay Triple now comes in a magnificent Magnum bottle under the name ‘Cinq Cents",
          },
          masterVariant: {
            id: 1,
            sku: "0000023",
            key: "chimay-triple",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 900,
                  fractionDigits: 2,
                },
                id: "528c9d69-167f-49e5-89ad-ae810515b306",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/13.-Chimay-Triple.jp-OGfru8Yj.jpg",
                dimensions: { w: 640, h: 424 },
              },
            ],
            attributes: [
              { name: "abv", value: 8 },
              { name: "ml", value: 330 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 21 },
          },
          variants: [],
          searchKeywords: {
            "en-US": [
              { text: "belgian" },
              { text: "beer" },
              { text: "triples" },
            ],
          },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "chimay-triple",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "59a900cb-1738-4209-9e42-2eb1755e5e4c",
      version: 10,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:20:12.427Z",
      lastModifiedAt: "2021-09-08T14:45:38.713Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "a71cc65e-328b-495b-87ba-ac5317f85b78",
      },
      masterData: {
        current: {
          name: { "en-US": "VICARIS GENERAAL" },
          description: {
            "en-US":
              "A whole new wave of craft brewers have begun to make their mark on the brewing scene in Belgium. While they’re not displacing the classic beers of Belgium, they’re adding new depth and vivacity to the conversation.\n\nBrouwerij Dilewyns, headed by the Dilewyns sisters Anne-Catherine (brewer) & Claire (business), is certainly making a statement with a new state of the art brewery and an increasing international reputation.\n\nAll their beers are based on their excellent triple, including the Generaal. Don’t call it a dubbel, Anne-Catherine calls it a dark triple. Rich, roasty, and elegant; the Generaal takes this beer to a dark place with the addition of darker specialty malts to their bright and lovely triple.",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "vicaris-generaal" },
          metaTitle: { "en-US": "VICARIS GENERAAL" },
          metaDescription: {
            "en-US":
              "A whole new wave of craft brewers have begun to make their mark on the brewing scene in Belgium. While they’re not displacing the classic beers of Belgium, they’re adding new depth and vivacity to the conversation.\n\nBrouwerij Dilewyns, headed by the Dilewyns sisters Anne-Catherine (brewer) & Claire (business), is certainly making a statement with a new state of the art brewery and an increasing international reputation.\n\nAll their beers are based on their excellent triple, including the Generaal. Don’t call it a dubbel, Anne-Catherine calls it a dark triple. Rich, roasty, and elegant; the Generaal takes this beer to a dark place with the addition of darker specialty malts to their bright and lovely triple.",
          },
          masterVariant: {
            id: 1,
            sku: "0000456",
            key: "vicaris",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 850,
                  fractionDigits: 2,
                },
                id: "2fe6a695-edd5-46a2-bfdb-60f472d38313",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/25.-Generaal.jpg-ngg-vPTau7NP.jpg",
                dimensions: { w: 508, h: 531 },
              },
            ],
            attributes: [
              { name: "abv", value: 8.8 },
              { name: "ml", value: 500 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 12 },
          },
          variants: [],
          searchKeywords: {
            "en-US": [
              { text: "belgian" },
              { text: "beer" },
              { text: "dark triple" },
            ],
          },
        },
        staged: {
          name: { "en-US": "VICARIS GENERAAL" },
          description: {
            "en-US":
              "A whole new wave of craft brewers have begun to make their mark on the brewing scene in Belgium. While they’re not displacing the classic beers of Belgium, they’re adding new depth and vivacity to the conversation.\n\nBrouwerij Dilewyns, headed by the Dilewyns sisters Anne-Catherine (brewer) & Claire (business), is certainly making a statement with a new state of the art brewery and an increasing international reputation.\n\nAll their beers are based on their excellent triple, including the Generaal. Don’t call it a dubbel, Anne-Catherine calls it a dark triple. Rich, roasty, and elegant; the Generaal takes this beer to a dark place with the addition of darker specialty malts to their bright and lovely triple.",
          },
          categories: [
            { typeId: "category", id: "c5952514-5482-406c-8665-e59dabf9ccca" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "vicaris-generaal" },
          metaTitle: { "en-US": "VICARIS GENERAAL" },
          metaDescription: {
            "en-US":
              "A whole new wave of craft brewers have begun to make their mark on the brewing scene in Belgium. While they’re not displacing the classic beers of Belgium, they’re adding new depth and vivacity to the conversation.\n\nBrouwerij Dilewyns, headed by the Dilewyns sisters Anne-Catherine (brewer) & Claire (business), is certainly making a statement with a new state of the art brewery and an increasing international reputation.\n\nAll their beers are based on their excellent triple, including the Generaal. Don’t call it a dubbel, Anne-Catherine calls it a dark triple. Rich, roasty, and elegant; the Generaal takes this beer to a dark place with the addition of darker specialty malts to their bright and lovely triple.",
          },
          masterVariant: {
            id: 1,
            sku: "0000456",
            key: "vicaris",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 850,
                  fractionDigits: 2,
                },
                id: "2fe6a695-edd5-46a2-bfdb-60f472d38313",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/25.-Generaal.jpg-ngg-vPTau7NP.jpg",
                dimensions: { w: 508, h: 531 },
              },
            ],
            attributes: [
              { name: "abv", value: 8.8 },
              { name: "ml", value: 500 },
            ],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 12 },
          },
          variants: [],
          searchKeywords: {
            "en-US": [
              { text: "belgian" },
              { text: "beer" },
              { text: "dark triple" },
            ],
          },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "vicaris-general",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "742f0eec-c2f3-4746-9fe9-1178e858944a",
      version: 11,
      lastMessageSequenceNumber: 4,
      createdAt: "2021-09-07T19:27:54.995Z",
      lastModifiedAt: "2021-09-08T14:45:38.803Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "85dab159-fb66-4014-ba2c-dfef5fd8cb02",
      },
      masterData: {
        current: {
          name: { "en-US": "Full English Breakfast" },
          description: {
            "en-US":
              'Also known as the "full English" or "fry-up," this breakfast spread is on par with fish and chips as perhaps the most famous British food custom. The full English is an audacious and calorie-loaded composition: eggs, bacon, sausage, black pudding (blood sausage), baked beans, mushrooms, grilled tomato, and fried bread or toast. For breakfast! (Londoners love breakfast.) One thing’s for sure: It keeps hunger locked up till lunch.',
          },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "full-english-breakfast" },
          metaTitle: { "en-US": "Full English Breakfast" },
          metaDescription: {
            "en-US":
              'Also known as the "full English" or "fry-up," this breakfast spread is on par with fish and chips as perhaps the most famous British food custom. The full English is an audacious and calorie-loaded composition: eggs, bacon, sausage, black pudding (blood sausage), baked beans, mushrooms, grilled tomato, and fried bread or toast. For breakfast! (Londoners love breakfast.) One thing’s for sure: It keeps hunger locked up till lunch.',
          },
          masterVariant: {
            id: 1,
            sku: "0000045",
            key: "breakfast",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 1100,
                  fractionDigits: 2,
                },
                id: "92cb493c-12f0-446b-a8ed-9e5ca7270ab0",
                tiers: [
                  {
                    minimumQuantity: 2,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 950,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/full_english_Pellicc-2Nj38If4.jpg",
                dimensions: { w: 1200, h: 800 },
              },
            ],
            attributes: [{ name: "gr", value: 1200 }],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 8 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "breakfast" }] },
        },
        staged: {
          name: { "en-US": "Full English Breakfast" },
          description: {
            "en-US":
              'Also known as the "full English" or "fry-up," this breakfast spread is on par with fish and chips as perhaps the most famous British food custom. The full English is an audacious and calorie-loaded composition: eggs, bacon, sausage, black pudding (blood sausage), baked beans, mushrooms, grilled tomato, and fried bread or toast. For breakfast! (Londoners love breakfast.) One thing’s for sure: It keeps hunger locked up till lunch.',
          },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "full-english-breakfast" },
          metaTitle: { "en-US": "Full English Breakfast" },
          metaDescription: {
            "en-US":
              'Also known as the "full English" or "fry-up," this breakfast spread is on par with fish and chips as perhaps the most famous British food custom. The full English is an audacious and calorie-loaded composition: eggs, bacon, sausage, black pudding (blood sausage), baked beans, mushrooms, grilled tomato, and fried bread or toast. For breakfast! (Londoners love breakfast.) One thing’s for sure: It keeps hunger locked up till lunch.',
          },
          masterVariant: {
            id: 1,
            sku: "0000045",
            key: "breakfast",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 1100,
                  fractionDigits: 2,
                },
                id: "92cb493c-12f0-446b-a8ed-9e5ca7270ab0",
                tiers: [
                  {
                    minimumQuantity: 2,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 950,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/full_english_Pellicc-2Nj38If4.jpg",
                dimensions: { w: 1200, h: 800 },
              },
            ],
            attributes: [{ name: "gr", value: 1200 }],
            assets: [],
            availability: { isOnStock: true, availableQuantity: 8 },
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "breakfast" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "breakfast",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "b33d785e-a50b-4da9-9bd0-187c2f4e860c",
      version: 5,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:45:23.776Z",
      lastModifiedAt: "2021-09-08T14:45:38.844Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "625c4187-0a3b-4abd-862c-95df37454fb8",
      },
      masterData: {
        current: {
          name: { "en-US": "Black coffee" },
          description: { "en-US": "Black coffee with mil and sugar" },
          categories: [
            { typeId: "category", id: "90968a9c-e11f-4336-84eb-99f27176b9df" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "black-coffee" },
          metaTitle: { "de-DE": "", "en-US": "Black coffee" },
          metaDescription: {
            "de-DE": "",
            "en-US": "Black coffee with mil and sugar",
          },
          masterVariant: {
            id: 1,
            sku: "0000067",
            key: "cofee",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 200,
                  fractionDigits: 2,
                },
                id: "8172cff1-9584-40cc-aed0-9cd9dd960585",
                tiers: [
                  {
                    minimumQuantity: 4,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 150,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Sweetened-Condensed--aO6khjRv.jpg",
                dimensions: { w: 680, h: 1200 },
              },
            ],
            attributes: [{ name: "ml", value: 250 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "coffee" }] },
        },
        staged: {
          name: { "en-US": "Black coffee" },
          description: { "en-US": "Black coffee with mil and sugar" },
          categories: [
            { typeId: "category", id: "90968a9c-e11f-4336-84eb-99f27176b9df" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "black-coffee" },
          metaTitle: { "de-DE": "", "en-US": "Black coffee" },
          metaDescription: {
            "de-DE": "",
            "en-US": "Black coffee with mil and sugar",
          },
          masterVariant: {
            id: 1,
            sku: "0000067",
            key: "cofee",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 200,
                  fractionDigits: 2,
                },
                id: "8172cff1-9584-40cc-aed0-9cd9dd960585",
                tiers: [
                  {
                    minimumQuantity: 4,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 150,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Sweetened-Condensed--aO6khjRv.jpg",
                dimensions: { w: 680, h: 1200 },
              },
            ],
            attributes: [{ name: "ml", value: 250 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "coffee" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "black-cofffe",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "cb6127d3-f840-4fad-92b8-4f2ea22514f1",
      version: 5,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:49:24.980Z",
      lastModifiedAt: "2021-09-08T14:45:39.206Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "625c4187-0a3b-4abd-862c-95df37454fb8",
      },
      masterData: {
        current: {
          name: { "en-US": "Black tea with milk" },
          description: { "en-US": "Black tea with milk and sugar" },
          categories: [
            { typeId: "category", id: "90968a9c-e11f-4336-84eb-99f27176b9df" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "black-tea-with-milk" },
          metaTitle: { "de-DE": "", "en-US": "Black tea with milk" },
          metaDescription: {
            "de-DE": "",
            "en-US": "Black tea with milk and sugar",
          },
          masterVariant: {
            id: 1,
            sku: "0000003423",
            key: "black-tea",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 150,
                  fractionDigits: 2,
                },
                id: "982b4980-74b7-4db3-b8c2-88ce622954a1",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Royal-Milk-Tea-4730--fm6jI9rC.jpg",
                dimensions: { w: 800, h: 533 },
              },
            ],
            attributes: [{ name: "ml", value: 400 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "tea" }] },
        },
        staged: {
          name: { "en-US": "Black tea with milk" },
          description: { "en-US": "Black tea with milk and sugar" },
          categories: [
            { typeId: "category", id: "90968a9c-e11f-4336-84eb-99f27176b9df" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "black-tea-with-milk" },
          metaTitle: { "de-DE": "", "en-US": "Black tea with milk" },
          metaDescription: {
            "de-DE": "",
            "en-US": "Black tea with milk and sugar",
          },
          masterVariant: {
            id: 1,
            sku: "0000003423",
            key: "black-tea",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 150,
                  fractionDigits: 2,
                },
                id: "982b4980-74b7-4db3-b8c2-88ce622954a1",
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/Royal-Milk-Tea-4730--fm6jI9rC.jpg",
                dimensions: { w: 800, h: 533 },
              },
            ],
            attributes: [{ name: "ml", value: 400 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "tea" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "black-tea",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
    {
      id: "f469fcdd-801f-4769-a390-1a72ff750178",
      version: 5,
      lastMessageSequenceNumber: 3,
      createdAt: "2021-09-07T19:53:13.837Z",
      lastModifiedAt: "2021-09-08T14:45:38.926Z",
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "763f0b8e-5ee8-4460-acff-3f662da960ef" },
      },
      createdBy: {
        isPlatformClient: true,
        user: { typeId: "user", id: "73980cb9-b340-462f-b3a3-30e740958518" },
      },
      productType: {
        typeId: "product-type",
        id: "85dab159-fb66-4014-ba2c-dfef5fd8cb02",
      },
      masterData: {
        current: {
          name: { "en-US": "Sausage roll" },
          description: {
            "en-US":
              "A sausage roll is usually a ground pork meat, seasoned with herbs, and wrapped — ends open — with puff pastry. ",
          },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "sausage-roll" },
          metaTitle: { "de-DE": "", "en-US": "Sausage roll" },
          metaDescription: {
            "de-DE": "",
            "en-US":
              "A sausage roll is usually a ground pork meat, seasoned with herbs, and wrapped — ends open — with puff pastry. ",
          },
          masterVariant: {
            id: 1,
            sku: "00000790",
            key: "sausage-roll",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 700,
                  fractionDigits: 2,
                },
                id: "a62e6723-7f4d-4587-bfdc-4f80a4afaebc",
                tiers: [
                  {
                    minimumQuantity: 3,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 600,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/230488-splendid-tabl-6-gNd4jI.jpg",
                dimensions: { w: 2000, h: 1143 },
              },
            ],
            attributes: [{ name: "gr", value: 200 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "sausage" }, { text: "roll" }] },
        },
        staged: {
          name: { "en-US": "Sausage roll" },
          description: {
            "en-US":
              "A sausage roll is usually a ground pork meat, seasoned with herbs, and wrapped — ends open — with puff pastry. ",
          },
          categories: [
            { typeId: "category", id: "e54a7ac3-81ca-43d3-bfe4-ca6613e1c392" },
          ],
          categoryOrderHints: {},
          slug: { "en-US": "sausage-roll" },
          metaTitle: { "de-DE": "", "en-US": "Sausage roll" },
          metaDescription: {
            "de-DE": "",
            "en-US":
              "A sausage roll is usually a ground pork meat, seasoned with herbs, and wrapped — ends open — with puff pastry. ",
          },
          masterVariant: {
            id: 1,
            sku: "00000790",
            key: "sausage-roll",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 700,
                  fractionDigits: 2,
                },
                id: "a62e6723-7f4d-4587-bfdc-4f80a4afaebc",
                tiers: [
                  {
                    minimumQuantity: 3,
                    value: {
                      type: "centPrecision",
                      currencyCode: "USD",
                      centAmount: 600,
                      fractionDigits: 2,
                    },
                  },
                ],
              },
            ],
            images: [
              {
                url:
                  "https://b94fdf3652ced168b8ed-c3404d8b108b2f7ee6231161feccfa8b.ssl.cf5.rackcdn.com/230488-splendid-tabl-6-gNd4jI.jpg",
                dimensions: { w: 2000, h: 1143 },
              },
            ],
            attributes: [{ name: "gr", value: 200 }],
            assets: [],
          },
          variants: [],
          searchKeywords: { "en-US": [{ text: "sausage" }, { text: "roll" }] },
        },
        published: true,
        hasStagedChanges: false,
      },
      key: "sausage-roll",
      taxCategory: {
        typeId: "tax-category",
        id: "f6b83f75-19ca-48c6-bdba-93918340b21b",
      },
      lastVariantId: 1,
    },
  ],
};
